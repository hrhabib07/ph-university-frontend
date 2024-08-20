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
import AdminDetails from "../pages/Admin/userManagement/AdminDetails";
import FacultyDataTable from "../pages/Admin/userManagement/FacultyDataTable";
import FacultyDetails from "../pages/Admin/userManagement/FacultyDetails";
import SemesterRegistration from "../pages/Admin/CourseManagement/SemesterRegistration";
import CreateCourse from "../pages/Admin/CourseManagement/CreateCourse";
import OfferCourse from "../pages/Admin/CourseManagement/OfferCourse";
import Courses from "../pages/Admin/CourseManagement/Courses";
import RegisteredSemesters from "../pages/Admin/CourseManagement/RegisteredSemesters";
import OfferedCourse from "../pages/Admin/CourseManagement/OfferedCourse";

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
        path: "admin-data/:adminId",
        element: <AdminDetails />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Faculties",
        path: "faculty-data",
        element: <FacultyDataTable />,
      },
      {
        path: "faculty-data/:facultyId",
        element: <FacultyDetails />,
      },
    ],
  },
  {
    name: "Course management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];
