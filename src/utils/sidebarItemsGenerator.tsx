import { TSidebarItems, TUserPath } from "../types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (data: TUserPath[], role: string): TSidebarItems[] => {
  return data.map((item) => {
    const newItem: TSidebarItems = {
      key: item.name,
      label: item.children ? item.name : <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
    };

    if (item.children) {
      newItem.children = sidebarItemsGenerator(item.children, role);
    }

    return newItem;
  });
};
