import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};
type TPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};

export const adminPaths: TPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Crate Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path as string,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

interface MenuItem {
  key: string;
  label: ReactNode | string;
  children?: MenuItem[];
}

function convertMenuData(data: TPath[]): MenuItem[] {
  return data.map((item) => {
    const newItem: MenuItem = {
      key: item.name,
      label: item.children ? item.name : <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    };

    if (item.children) {
      newItem.children = convertMenuData(item.children);
    }

    return newItem;
  });
}

export const adminSidebarItems: MenuItem[] = convertMenuData(adminPaths);
