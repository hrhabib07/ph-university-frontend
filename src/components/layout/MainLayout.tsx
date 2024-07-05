import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths, adminRoutes } from "../../routes/admin.routes";
const { Header, Content, Footer, Sider } = Layout;

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

const convertedData: MenuItem[] = convertMenuData(adminPaths);
console.log("converted data here", convertedData);

const items: MenuProps["items"] = convertedData;
// [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  console.log(adminRoutes);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            height: "4rem",
            flexWrap: "wrap",
          }}
        >
          <h2>PH University</h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
