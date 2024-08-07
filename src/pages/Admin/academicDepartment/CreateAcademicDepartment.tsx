import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicFacultyQuery,
} from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import PHSelect from "../../../components/form/PHSelect";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import errorMap from "zod/locales/en.js";

const CreateAcademicDepartment = () => {
  const facultyNameOptions: { value: any; label: any }[] = [];

  const { data } = useGetAllAcademicFacultyQuery(undefined);
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  data?.data.map((item) =>
    facultyNameOptions.push({ value: item.name, label: item.name })
  );

  const academicDepartmentValidationSchema = z.object({
    name: z
      .string({
        required_error: "academic department is required",
      })
      .min(3),
    academicFaculty: z.string({
      required_error: "academic faculty is required",
    }),
  });

  const handleSubmit: SubmitHandler<FieldValues> = async (formData) => {
    console.log(formData);
    console.log("clicked");
    const toastId = toast.loading("creating...");
    const { name, academicFaculty } = formData;
    const facultyId = data.data.filter((item) => item.name === academicFaculty);
    const academicDepartmentData = {
      name,
      academicFaculty: facultyId[0]._id,
    };
    try {
      const res = (await addAcademicDepartment(
        academicDepartmentData
      )) as TResponse;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Flex justify="center">
        <Col span={6}>
          <PHform
            onSubmit={handleSubmit}
            resolver={zodResolver(academicDepartmentValidationSchema)}
          >
            <PHInput
              type="text"
              name="name"
              label="AcademicDepartment"
            ></PHInput>
            <PHSelect
              label="Academic Faculty"
              name="academicFaculty"
              options={facultyNameOptions}
            ></PHSelect>
            <Button htmlType="submit">Submit</Button>
          </PHform>
        </Col>
      </Flex>
    </>
  );
};

export default CreateAcademicDepartment;
