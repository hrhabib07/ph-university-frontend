import { Table } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";

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
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Faculty",
    dataIndex: "faculty",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AcademicDepartment = () => {
  const { data } = useGetAllAcademicDepartmentQuery(undefined);
  console.log(data);
  const newTableData = data?.data.map((item) => {
    return {
      _id: item._id,
      name: item.name,
      faculty: item?.academicFaculty?.name,
    };
  });
  console.log(newTableData);
  return (
    <>
      <Table
        columns={columns}
        dataSource={newTableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
};

export default AcademicDepartment;
