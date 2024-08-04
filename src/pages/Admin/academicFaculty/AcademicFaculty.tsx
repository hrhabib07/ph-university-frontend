import { Table } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement/AcademicManagement.api";

const AcademicFaculty = () => {
  const { data, isFetching } = useGetAllAcademicFacultyQuery(undefined);

  interface DataType {
    key: React.Key;
    name: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Academic Faculty name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
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

  return (
    <div>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={data?.data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicFaculty;
