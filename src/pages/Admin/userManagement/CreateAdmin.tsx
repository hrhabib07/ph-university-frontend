import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { bloodGroupOptions, genderOptions } from "../../../constant/global";
import { Controller } from "react-hook-form";
import { useAddAdminMutation } from "../../../redux/features/admin/userManagement/userMangement";

const CreateAdmin = () => {
  const [addAdmin] = useAddAdminMutation();
  // const [addAdmin, { data, error }] = useAddAdminMutation();
  // console.log("data", data);
  // console.log("error", error);

  const handleSubmit = (data: { image: string | Blob }) => {
    const adminData = {
      password: "admin123", // Assuming a default password or set it dynamically
      admin: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(adminData));
    formData.append("file", data.image);
    addAdmin(formData);
    // console.log();
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
                  name="managementDepartment"
                  label="Management Department"
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

export default CreateAdmin;
