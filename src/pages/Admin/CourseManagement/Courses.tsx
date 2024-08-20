/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dropdown,
  Modal,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { TAcademicSemester } from "../../../types";
import { SetStateAction, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemesterQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement/courseManagement";
import moment from "moment";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement/userMangement";
import PHform from "../../../components/form/PHform";
import PHSelect from "../../../components/form/PHSelect";

type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const items = [
  { label: "UPCOMING", key: "UPCOMING" },
  { label: "ONGOING", key: "ONGOING" },
  { label: "ENDED", key: "ENDED" },
];

const Courses = () => {
  const { data, isFetching } = useGetAllCoursesQuery(undefined);

  // console.log(data);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        // console.log("item", item);
        return <AssignFacultyModal facultyInfo={item} />;
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {};

  const tableData = data?.data?.map((item) => ({
    key: item._id,
    title: item.title,
    code: item.code,
  }));
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

const AssignFacultyModal = ({ facultyInfo }) => {
  // console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  const [addFaculties] = useAddFacultiesMutation();
  // console.log(facultiesData.data);
  const facultyOption = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));
  // console.log(facultyOption);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (data) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };
    // console.log(facultyData);
    addFaculties(facultyData);
    // addFaculties(facultyData);
  };
  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <PHform onSubmit={handleSubmit}>
          <PHSelect
            name="faculties"
            mode="multiple"
            label="Faculty"
            options={facultyOption}
          ></PHSelect>
          <Button htmlType="submit" onClick={handleOk}>
            Submit
          </Button>
        </PHform>
      </Modal>
    </>
  );
};

export default Courses;
