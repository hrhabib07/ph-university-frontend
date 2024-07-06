import StudentDashboard from "../pages/Student/StudentDashboard";
import { TUserPath } from "../types";

export const studentPaths: TUserPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
];
