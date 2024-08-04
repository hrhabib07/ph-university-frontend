import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";

const CreateAcademicDepartment = () => {
  const handleSubmit = (data) => {
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
        </Col>
      </Flex>
    </>
  );
};

export default CreateAcademicDepartment;
