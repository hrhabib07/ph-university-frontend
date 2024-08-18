import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { bloodGroupOptions, genderOptions } from "../../../constant/global";
import { Controller } from "react-hook-form";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagement/userMangement";

const CreateFaculty = () => {
  const [addFaculty, { data, error }] = useAddFacultyMutation();
  console.log("data", data);
  console.log("error", error);
  const handleSubmit = (data: { image: string | Blob }) => {
    const facultyData = {
      password: "kuddusali", // Replace with a hashed password in production
      faculty: {
        ...data,
        designation: "Assistant Professor", // You can dynamically set this or use the input value
        academicDepartment: "665ed7227a5c09c219132b7e", // Should be dynamically set based on your form
        isDeleted: false,
      },
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.image);
    addFaculty(formData);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <PHform onSubmit={handleSubmit}>
            <Row gutter={8}>
              <Divider>Personal Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.middleName"
                  label="Middle Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHDatePicker name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  label="Blood Group"
                  name="bloogGroup"
                  options={bloodGroupOptions}
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="Profile Image">
                      <Input
                        type="file"
                        value={value?.fileName}
                        {...field}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Divider>Contact Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="email" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="contactNo" label="Contact No" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address"
                />
              </Col>
              <Divider>Professional Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="designation" label="Designation" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="academicDepartment"
                  label="Academic Department"
                />
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PHform>
        </Col>
      </Row>
    </>
  );
};

export default CreateFaculty;
