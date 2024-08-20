/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";

import PHInput from "../../../components/form/PHInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement/courseManagement";
import { TResponse } from "../../../types/global";

const CreateCourse = () => {
  const [addCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);
  // console.log(academicSemester);
  const preRequisiteCoursesOptions = courses?.data.map(
    (item: { _id: any; title: any }) => ({
      value: item._id,
      label: item.title,
    })
  );
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating...");

    const courseData = {
      ...data,
      isDeleted: false,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses: data.preRequisiteCourses.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };
    // console.log(courseData);
    try {
      console.log("semester data:", courseData);
      const res = (await addCourse(courseData)) as TResponse<any>;
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
          <PHInput label="Title" name="title" type="text"></PHInput>
          <PHInput label="Prefix" name="prefix" type="text"></PHInput>
          <PHInput label="Code" name="code" type="number"></PHInput>
          <PHInput label="Credits" name="credits" type="number"></PHInput>
          <PHSelect
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="Pre Requisite Courses"
            mode="multiple"
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
