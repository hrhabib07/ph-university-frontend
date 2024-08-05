import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";

const CreateAcademicDepartment = () => {
  const { data, isFetching } = useGetAllAcademicFacultyQuery(undefined);
  console.log(data, isFetching);

  const handleSubmit = (academicDepartmentData) => {
    // console.log(data);
  };
  return (
    <>
      <Flex justify="center">
        <Col span={6}>
          <PHform onSubmit={handleSubmit}>
            <PHInput
              type="text"
              name="academicDepartment"
              label="AcademicDepartment"
            ></PHInput>
            <Button htmlType="submit">Submit</Button>
          </PHform>
          {/* <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            // options={}
          ></PHSelect> */}
        </Col>
      </Flex>
    </>
  );
};

export default CreateAcademicDepartment;
