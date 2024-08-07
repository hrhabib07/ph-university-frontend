import { Button } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";

const CreateStudent = () => {
  const handleSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    console.log(Object.fromEntries(formData));
  };
  return (
    <PHform onSubmit={handleSubmit}>
      <PHInput type="text" name="name" label="Name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHform>
  );
};

export default CreateStudent;
