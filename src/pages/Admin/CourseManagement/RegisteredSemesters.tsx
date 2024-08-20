/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dropdown,
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
  useGetAllRegisteredSemesterQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement/courseManagement";
import moment from "moment";

type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const items = [
  { label: "UPCOMING", key: "UPCOMING" },
  { label: "ONGOING", key: "ONGOING" },
  { label: "ENDED", key: "ENDED" },
];

const RegisteredSemester = () => {
  const [semesterId, setSemesterId] = useState();
  const [params, setParams] = useState();
  const { data, isFetching } = useGetAllRegisteredSemesterQuery(params);

  const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation();

  console.log(data);
  const handleStatusDropdown = (data) => {
    const updateSemesterRegistrationData = {
      id: semesterId,
      data: { status: data.key },
    };
    updateRegisteredSemester(updateSemesterRegistrationData);
  };
  const menuProps = {
    items,
    onClick: handleStatusDropdown,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        let color;
        // console.log("item : ", item);
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        // console.log("item", item);
        return (
          <Space>
            <Dropdown menu={menuProps} trigger={["click"]}>
              <Button onClick={() => setSemesterId(item.key)}>
                <Space>
                  Update
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {
    // console.log(extra, filters);
    const queryParams:
      | SetStateAction<undefined>
      | { name: string; value: any }[] = [];
    if (extra.action === "filter") {
      filters.name?.forEach((item: any) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item: any) =>
        queryParams.push({ name: "year", value: item })
      );
    }
    setParams(queryParams);
  };

  const tableData = data?.data?.map((item) => ({
    key: item._id,
    name: `${item.academicSemester.name} ${item.academicSemester.year}`,
    status: item.status,
    startDate: moment(new Date(item.startDate)).format("MMMM Do YYYY"), // Converts startDate to a readable format
    endDate: moment(new Date(item.startDate)).format("MMMM Do YYYY"),
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

export default RegisteredSemester;
