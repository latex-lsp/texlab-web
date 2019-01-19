import { Menu, MenuLabel, MenuLink, MenuList } from 'bloomer';
import { navigate } from 'gatsby';
import React from 'react';

export interface SidebarNavNode {
  name: string;
  path: string;
  children: SidebarNavNode[];
}

interface SidebarNavProps {
  label: string;
  nodes: SidebarNavNode[];
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ label, nodes }) => {
  const renderNode = (node: SidebarNavNode, key: number) => {
    return (
      <li key={key}>
        <MenuLink onClick={() => navigate(node.path)}>{node.name}</MenuLink>
        {node.children.length > 0 && (
          <MenuList>{node.children.map(renderNode)}</MenuList>
        )}
      </li>
    );
  };

  return (
    <Menu>
      <MenuLabel>{label}</MenuLabel>
      <MenuList>{nodes.map(renderNode)}</MenuList>
    </Menu>
  );
};
