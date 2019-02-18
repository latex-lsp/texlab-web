import { Menu, MenuLabel, MenuList } from 'bloomer';
import { Link } from 'gatsby';
import React from 'react';

export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface SidebarNavProps {
  categories: MenuCategory[];
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ categories }) => {
  const renderItem = (item: MenuItem, key: number) => (
    <li key={key}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  );

  return (
    <Menu>
      {categories.map((category, key) => (
        <>
          <MenuLabel key={key}>{category.name}</MenuLabel>
          <MenuList>{category.items.map(renderItem)}</MenuList>
        </>
      ))}
    </Menu>
  );
};
