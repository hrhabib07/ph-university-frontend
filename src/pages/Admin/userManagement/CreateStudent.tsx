/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHform from "../../../components/form/PHform";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constant/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement/userMangement";
import { Controller } from "react-hook-form";

const CreateStudent = () => {
  const { data: sData, isLoading: sIsLoading } =
    useGetAllAcademicSemesterQuery(undefined);

  const semesterDataOptions = sData?.data.map(
    (item: { _id: any; name: any; year: any }) => ({
      value: item._id,
      label: `${item.name}-${item.year}`,
    })
  );
  const { data: dData, isLoading: dIsLoading } =
    useGetAllAcademicDepartmentQuery(undefined, { skip: sIsLoading });

  const departmentDataOptions = dData?.data.map(
    (item: { _id: any; name: any }) => ({
      value: item._id,
      label: `${item.name}`,
    })
  );

  const [addStudent] = useAddStudentMutation();
  // const [addStudent, { data, error }] = useAddStudentMutation();
  // console.log("data", data);
  // console.log("error", error);

  // console.log(departmentDataOptions);

  const handleSubmit = (data: { image: string | Blob }) => {
    // console.log(data);

    const studentData = {
      password: "securepassword456",
      student: data,
    };
    // console.log(studentData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    //  formData.append("file", data.image);
    addStudent(formData);

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
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  label="Blood Group"
                  name="bloogGroup"
                  options={bloodGroupOptions}
                ></PHSelect>
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

              {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="Picture">
                      <Input
                        type="file"
                        value={value?.fileName}
                        {...field}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col> */}
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
