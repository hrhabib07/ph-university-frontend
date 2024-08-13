/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { TStudent } from "../../../types";
import { SetStateAction, useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement/userMangement";
import { TQueryParam } from "../../../types/global";

type TTableData = Pick<TStudent, "_id" | "name" | "id">;

const StudentDataTable = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(2);
  const { data, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 3 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
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

  const tableData = data?.data?.map(
    (item: { fullName: any; _id: any; id: any }) => ({
      key: item?._id,
      fullName: item?.fullName,
      id: item.id,
    })
  );
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

export default StudentDataTable;
