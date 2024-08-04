/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { TAcademicSemester } from "../../../types";
import { SetStateAction, useState } from "react";

type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState();
  const { data, isFetching } = useGetAllAcademicSemesterQuery(params);

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
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
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
    (item: {
      _id: any;
      name: any;
      year: any;
      startMonth: any;
      endMonth: any;
    }) => ({
      key: item?._id,
      name: item.name,
      year: item.year,
      startMonth: item.startMonth,
      endMonth: item.endMonth,
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

export default AcademicSemester;
