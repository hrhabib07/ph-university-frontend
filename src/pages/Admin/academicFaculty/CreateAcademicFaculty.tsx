import { Button, Col, Flex } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const handleSubmit = async (data) => {
    const academicFacultyData = { name: data.academicFaculty };
    try {
      const res = await addAcademicFaculty(academicFacultyData);
      if (res.data.success) {
        toast.success("Faculty Created successfully");
      }
      if (res.error) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHform onSubmit={handleSubmit}>
          <PHInput
            type="text"
            name="academicFaculty"
            label="Academic Faculty"
          ></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
