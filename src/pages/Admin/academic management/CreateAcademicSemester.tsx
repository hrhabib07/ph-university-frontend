import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  { value: "01", label: "Fall" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Autumn" },
];
const CreateAcademicSemester = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterNameCode = {
      name: "something",
      code: "something",
    };
    console.log(semesterNameCode, data);
    // console.log(data);
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform onSubmit={handleSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
