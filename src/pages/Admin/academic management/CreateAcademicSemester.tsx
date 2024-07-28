import { FieldValues, SubmitHandler } from "react-hook-form";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHform onSubmit={handleSubmit}>
      <PHInput type="text" name="Semester Name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHform>
  );
};

export default CreateAcademicSemester;
