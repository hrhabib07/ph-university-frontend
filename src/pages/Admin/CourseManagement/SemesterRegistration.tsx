/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { semesterStatusOptions } from "../../../types/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement/courseManagement";
import { TResponse } from "../../../types/global";

const SemesterRegistration = () => {
  const [addRegisteredSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllAcademicSemesterQuery([
    { name: "sort", value: "year" },
  ]);
  // console.log(academicSemester);
  const semesterOptions = academicSemester?.data.map(
    (item: { _id: any; name: any; year: any }) => ({
      value: item._id,
      label: `${item.name} ${item.year}`,
    })
  );
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    console.log(semesterData);
    try {
      console.log("semester data:", semesterData);
      const res = (await addRegisteredSemester(semesterData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
      // const errorMassage = error?.data?.massage;
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform onSubmit={handleSubmit}>
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={semesterOptions}
          ></PHSelect>

          <PHSelect
            label="Status"
            name="status"
            options={semesterStatusOptions}
          ></PHSelect>
          <PHDatePicker label="Start Date" name="startDate"></PHDatePicker>
          <PHDatePicker label="End Date" name="endDate"></PHDatePicker>
          <PHInput
            label="Minimum Credit"
            name="minCredit"
            type="number"
          ></PHInput>
          <PHInput
            label="Maximum Credit"
            name="maxCredit"
            type="number"
          ></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
