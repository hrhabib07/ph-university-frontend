import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import { TUserPath } from "../types";

export const facultyPaths: TUserPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
];
