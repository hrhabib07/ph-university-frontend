/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterNameOptions } from "../../../constant/semester";
import { monthOptions } from "../../../constant/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  useAddAcademicSemesterMutation,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { TResponse } from "../../../types/global";

const SemesterRegistration = () => {
  const { data: academicSemester } = useGetAllAcademicSemesterQuery([
    { name: "sort", value: "year" },
  ]);
  // console.log(academicSemester);
  const semesterOptions = academicSemester.data.map(
    (item: { _id: any; name: any; year: any }) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    })
  );
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating...");
    const name = semesterNameOptions[Number(data.name) - 1].label;
    const code = data.name;
    const year = data.year;
    const semesterData = {
      name,
      code,
      year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    // try {
    //   console.log("semester data:", semesterData);
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res?.error) {
    //     toast.error(res?.error?.data?.message, { id: toastId });
    //   } else {
    //     toast.success(res?.data?.message, { id: toastId });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   console.log("error", error);
    //   // const errorMassage = error?.data?.massage;
    //   toast.error("something went wrong", { id: toastId });
    // }
  };
  const academicSemesterSchema = z.object({
    name: z.string({ required_error: "Please select a name" }),
    year: z.string({ required_error: "Please select a year" }),
    startMonth: z.string({ required_error: "Please select a start month" }),
    endMonth: z.string({ required_error: "Please select a end month" }),
  });
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform
          onSubmit={handleSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={semesterOptions}
          ></PHSelect>

          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
