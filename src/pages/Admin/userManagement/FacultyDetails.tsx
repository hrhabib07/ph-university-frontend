import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Descriptions, Button, Space } from "antd";
import { useGetSingleFacultyQuery } from "../../../redux/features/admin/userManagement/userMangement";

const FacultyDetails: React.FC = () => {
  const { facultyId } = useParams(); // Assuming you pass the faculty ID via route parameters
  const { data } = useGetSingleFacultyQuery(facultyId); // Fetch faculty data
  console.log(data);
  const dateOfBirth = new Date(data?.data.dateOfBirth).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Card title="Faculty Details" style={{ maxWidth: 800, margin: "auto" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Descriptions column={1} bordered size="middle">
            <Descriptions.Item label="Faculty Id">
              {data?.data?.id || data?.data?._id} {/* Adjust as necessary */}
            </Descriptions.Item>
            <Descriptions.Item label="Faculty Name">
              {data?.data?.name.firstName} {data?.data?.name.middleName}{" "}
              {data?.data?.name.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {data?.data?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {data?.data?.contactNo}
            </Descriptions.Item>
            <Descriptions.Item label="Emergency Contact">
              {data?.data?.emergencyContactNo}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={12}>
          <Descriptions column={1} bordered size="middle">
            <Descriptions.Item label="Designation">
              {data?.data?.designation}
            </Descriptions.Item>

            <Descriptions.Item label="Permanent Address">
              {data?.data?.permanentAddress}
            </Descriptions.Item>
            <Descriptions.Item label="Present Address">
              {data?.data?.presentAddress}
            </Descriptions.Item>
            <Descriptions.Item label="Date of Birth">
              {dateOfBirth}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {data?.data?.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Blood Group">
              {data?.data?.bloodGroup}
            </Descriptions.Item>
            {/* <Descriptions.Item label="Profile Image">
              <img
                src={data?.data?.profileImg} // Adjust the image property as necessary
                alt="Faculty Profile"
                style={{ maxWidth: "100px", borderRadius: "50%" }}
              />
            </Descriptions.Item> */}
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
            <Link to={"/admin/faculty-data"}>
              {" "}
              {/* Adjust the route as necessary */}
              <Button type="primary">Previous page</Button>
            </Link>
            <Button type="primary" danger>
              Block Faculty
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default FacultyDetails;
