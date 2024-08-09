import { Button, Col, Divider, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";

const CreateStudent = () => {
  const dummyStudentData = {
    password: "securepassword456",
    student: {
      name: {
        firstName: "Habib",
        middleName: "L.",
        lastName: "Smith",
      },
      gender: "female",
      dateOfBirth: "1998-04-15",
      email: "habib725@example.com",
      contactNo: "0987654321",
      emergencyContactNo: "1234567890",
      bloodGroup: "A+",
      presentAddress: "789 Pine St, Big City",
      permanentAddress: "321 Oak St, Small Town",
      guardian: {
        fatherName: "John Smith",
        fatherOccupation: "Architect",
        fatherContactNo: "0987654322",
        motherName: "Jane Smith",
        motherOccupation: "Nurse",
        motherContactNo: "0987654323",
      },
      localGuardian: {
        name: "David Green",
        occupation: "Lawyer",
        contactNo: "0987654324",
        address: "456 Maple St, Big City",
      },
      profileImg: "path/to/profileImg4.jpg",
      isActive: "active",
      admissionSemester: "6656c2f9c6ed72a7fe9737cc",
      academicDepartment: "665ed7227a5c09c219132b7e",
      isDeleted: false,
    },
  };

  const handleSubmit = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));
    // console.log(Object.fromEntries(formData));
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <PHform onSubmit={handleSubmit}>
            <Row gutter={8}>
              <Divider>Personal Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.firstName"
                  label="First Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.middleName"
                  label="Middle Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.lastName"
                  label="Last Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="gender" label="Gender"></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="dateOfBirth"
                  label="Date of Birth"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="bloodGroup"
                  label="Blood Group"
                ></PHInput>
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PHform>
        </Col>
      </Row>
    </>
  );
};

export default CreateStudent;
