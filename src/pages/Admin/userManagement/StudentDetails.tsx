import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  //   console.log(params.studentId);
  return (
    <div>
      <h1>Hello, From StudentDetails of {studentId}</h1>
    </div>
  );
};

export default StudentDetails;
