import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemeterApi/academicSemeterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log("academic semester data", data);
  return (
    <div>
      <h1>Hello from AcademicSemester file</h1>
    </div>
  );
};

export default AcademicSemester;
