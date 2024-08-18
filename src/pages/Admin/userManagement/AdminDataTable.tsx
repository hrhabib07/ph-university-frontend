/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { TAdmin } from "../../../types";
import { SetStateAction, useState } from "react";
import { useGetAllAdminsQuery } from "../../../redux/features/admin/userManagement/userMangement";
import { TQueryParam } from "../../../types/global";
import { Link } from "react-router-dom";

type TTableData = Pick<
  TAdmin["admin"], // Picking from the 'admin' object inside TAdmin
  "name" | "email" | "contactNo" | "designation"
>;

const AdminDataTable = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetAllAdminsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name: { firstName: string; lastName: string }) =>
        `${name.firstName} ${name.lastName}`,
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Email",
      dataIndex: "email",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      showSorterTooltip: { target: "full-header" },
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/admin-data/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
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
    const queryParams:
      | SetStateAction<undefined>
      | { name: string; value: any }[] = [];
    if (extra.action === "filter") {
      filters.name?.forEach((item: any) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.designation?.forEach((item: any) =>
        queryParams.push({ name: "designation", value: item })
      );
    }
    setParams(queryParams);
  };

  const metaData = data?.meta;
  const tableData = data?.data?.map(
    (item: {
      _id: any;
      id: any;
      name: { firstName: string; lastName: string };
      designation: string;
      email: string;
      contactNo: string;
      profileImage: string;
    }) => ({
      key: item?._id,
      id: item?.id,
      name: item?.name,
      designation: item?.designation,
      email: item?.email,
      contactNo: item?.contactNo,
      profileImage: item?.profileImage,
    })
  );

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination
        onChange={(value) => setPage(value)}
        total={metaData?.total}
        pageSize={metaData?.limit}
      />
    </>
  );
};

export default AdminDataTable;
