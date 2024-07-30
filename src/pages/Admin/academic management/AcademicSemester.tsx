/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Year",
    dataIndex: "year",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
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

const onChange: TableProps<DataType>["onChange"] = (
  pagination: any,
  filters: any,
  sorter: any,
  extra: any
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
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
