import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Descriptions, Button, Space } from "antd";
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagement/userMangement";

const StudentDetails: React.FC = () => {
  const { studentId } = useParams();
  const { data } = useGetSingleStudentQuery(studentId);

  const dateOfBirth = new Date(data?.data?.dateOfBirth).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Card title="Student Details" style={{ maxWidth: 800, margin: "auto" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Descriptions column={1} bordered size="middle">
            <Descriptions.Item label="Student Id">
              {data?.data?.id}
            </Descriptions.Item>
            <Descriptions.Item label="Student Name">
              {data?.data?.fullName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {data?.data?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {data?.data?.contactNo}
            </Descriptions.Item>
            <Descriptions.Item label="Blood Group">
              {data?.data?.bloodGroup || data?.data?.bloogGroup}
            </Descriptions.Item>
            <Descriptions.Item label="Date of Birth">
              {dateOfBirth}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {data?.data?.gender}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={12}>
          <Descriptions column={1} bordered size="middle">
            <Descriptions.Item label="Academic Department">
              {data?.data?.academicDepartment?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Academic Faculty">
              {data?.data?.academicFaculty?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Admission Semester">
              {data?.data?.admissionSemester?.name}-
              {data?.data?.admissionSemester?.year}
            </Descriptions.Item>
            <Descriptions.Item label="Permanent Address">
              {data?.data?.permanentAddress}
            </Descriptions.Item>
            <Descriptions.Item label="Present Address">
              {data?.data?.presentAddress}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Space size="small">
            <Link to={"/admin/students-data"}>
              <Button type="primary">Previous page</Button>
            </Link>
            <Button type="primary" danger>
              Block Student
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default StudentDetails;
