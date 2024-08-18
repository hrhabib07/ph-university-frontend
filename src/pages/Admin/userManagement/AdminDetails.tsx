import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Descriptions, Button, Space } from "antd";
import { useGetSingleAdminQuery } from "../../../redux/features/admin/userManagement/userMangement"; // Assuming you have a similar hook for admins

const AdminDetails: React.FC = () => {
  const { adminId } = useParams(); // Assuming you pass the admin ID via route parameters
  const { data } = useGetSingleAdminQuery(adminId); // Fetch admin data
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
    <Card title="Admin Details" style={{ maxWidth: 800, margin: "auto" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Descriptions column={1} bordered size="middle">
            <Descriptions.Item label="Admin Id">
              {data?.data?.id || data?.data?._id} {/* Adjust as necessary */}
            </Descriptions.Item>
            <Descriptions.Item label="Admin Name">
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
              {data?.data?.bloodGroup || data?.data?.bloogGroup}
            </Descriptions.Item>
            {/* <Descriptions.Item label="Profile Image">
              <img
                src={data?.data?.profileImage}
                alt="Admin Profile"
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
            <Link to={"/admin/admins-data"}>
              <Button type="primary">Previous page</Button>
            </Link>
            <Button type="primary" danger>
              Block Admin
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default AdminDetails;
