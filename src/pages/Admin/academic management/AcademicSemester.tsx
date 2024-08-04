/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";
import { TAcademicSemester } from "../../../types";

type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const columns: TableColumnsType<TTableData> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
  },
  {
    title: "Year",
    dataIndex: "year",
    defaultSortOrder: "descend",
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
  console.log("params", pagination, filters, sorter, extra);
};

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery([
    { name: "year", value: "2024" },
  ]);
  console.log("academic semester data", data);
  // console.log(data?.data);
  const tableData = data?.data?.map(
    (item: {
      _id: any;
      name: any;
      year: any;
      startMonth: any;
      endMonth: any;
    }) => ({
      _id: item?._id,
      name: item.name,
      year: item.year,
      startMonth: item.startMonth,
      endMonth: item.endMonth,
    })
  );
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
