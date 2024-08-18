import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/Admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/userManagement/CreateStudent";
import AcademicSemester from "../pages/Admin/academic management/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/academic management/CreateAcademicSemester";
import AcademicDepartment from "../pages/Admin/academicDepartment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/Admin/academicDepartment/CreateAcademicDepartment";
import AcademicFaculty from "../pages/Admin/academicFaculty/AcademicFaculty";
import CreateAcademicFaculty from "../pages/Admin/academicFaculty/CreateAcademicFaculty";
import { TUserPath } from "../types";
import StudentDataTable from "../pages/Admin/userManagement/StudentDataTable";
import StudentDetails from "../pages/Admin/userManagement/StudentDetails";
import AdminDataTable from "../pages/Admin/userManagement/AdminDataTable";

export const adminPaths: TUserPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentDataTable />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Crate Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Admins",
        path: "admins-data",
        element: <AdminDataTable />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
