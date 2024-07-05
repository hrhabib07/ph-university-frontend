interface MenuItem {
  key: string;
  label: JSX.Element | string;
  children?: MenuItem[];
}

function convertMenuData(data: MenuItem[]): MenuItem[] {
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

const originalData: MenuItem[] = [
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
    ],
  },
];

const convertedData: MenuItem[] = convertMenuData(originalData);
console.log(convertedData);
