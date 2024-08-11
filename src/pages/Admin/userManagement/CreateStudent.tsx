import { Button, Col, Divider, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  bloodGroupOptions,
  genderOptions,
  monthOptions,
} from "../../../constant/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement/userMangement";

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
      bloodGroup: "A+",

      dateOfBirth: "1998-04-15",
      email: "habib725@example.com",
      contactNo: "0987654321",
      emergencyContactNo: "1234567890",
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

  const studentDefaultValues = {
    name: {
      firstName: "Habib",
      middleName: "L.",
      lastName: "Smith",
    },
    gender: "female",
    bloogGroup: "A+",

    // dateOfBirth: "1998-04-15",
    email: "habib725@example.com",
    contactNo: "0987654321",
    emergencyContactNo: "1234567890",
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
  };

  const { data: sData, isLoading: sIsLoading } =
    useGetAllAcademicSemesterQuery(undefined);

  const semesterDataOptions = sData?.data.map((item) => ({
    value: item._id,
    label: `${item.name}-${item.year}`,
  }));
  const { data: dData, isLoading: dIsLoading } =
    useGetAllAcademicDepartmentQuery(undefined, { skip: sIsLoading });

  const departmentDataOptions = dData?.data.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log("error", error);
  console.log("res", data);

  console.log(departmentDataOptions);
  const handleSubmit = (data) => {
    // console.log(data);
    const studentData = {
      password: "securepassword456",
      student: data,
    };
    // console.log(studentData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    addStudent(formData);

    // console.log(Object.fromEntries(formData));
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <PHform onSubmit={handleSubmit} defaultValues={studentDefaultValues}>
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
                <PHSelect
                  name="gender"
                  label="Gender"
                  options={genderOptions}
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHDatePicker
                  name="dateOfBirth"
                  label="Date of Birth"
                ></PHDatePicker>
                {/* <PHInput
                  type="text"
                  name="dateOfBirth"
                  label="Date of Birth"
                ></PHInput> */}
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  label="Blood Group"
                  name="bloogGroup"
                  options={bloodGroupOptions}
                ></PHSelect>
              </Col>
              <Divider>Contact Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="email" name="email" label="Email"></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="contactNo"
                  label="Contact No"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact "
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="presentAddress"
                  label="Present Address "
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address "
                ></PHInput>
              </Col>
              <Divider>Guardian Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherName"
                  label="Father Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherOccupation"
                  label="Father Occupation"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherContactNo"
                  label="Father Contact No"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherName"
                  label="Mother Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherOccupation"
                  label="Mother Occupation"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherContactNo"
                  label="Mother Contact No"
                ></PHInput>
              </Col>
              <Divider>Local Guardian Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.name"
                  label="Name"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.occupation"
                  label="Occupation"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.contactNo"
                  label="Contact No."
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.address"
                  label="Address"
                ></PHInput>
              </Col>
              {/* 
              admissionSemester: "6656c2f9c6ed72a7fe9737cc", 
              academicDepartment:"665ed7227a5c09c219132b7e", 
              */}
              <Divider>Academic Info.</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={semesterDataOptions}
                  disabled={sIsLoading}
                  name="admissionSemester"
                  label="Admission Semester"
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={departmentDataOptions}
                  disabled={dIsLoading}
                  name="academicDepartment"
                  label="Academic Department"
                ></PHSelect>
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
