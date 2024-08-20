import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";

const OfferedCourse = () => {
  const { data: academicFacultyData } =
    useGetAllAcademicFacultyQuery(undefined);

  const academicFacultyOptions = academicFacultyData?.data.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform onSubmit={handleSubmit}>
          <PHSelectWithWatch
            label="Academic Semester"
            name="academicSemester"
            options={academicFacultyOptions}
          ></PHSelectWithWatch>

          <PHInput
            label="Minimum Credit"
            name="minCredit"
            type="number"
          ></PHInput>

          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default OfferedCourse;
