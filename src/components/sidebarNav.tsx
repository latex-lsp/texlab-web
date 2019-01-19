import { Menu, MenuLabel, MenuList } from 'bloomer';
import { Link } from 'gatsby';
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
        <Link to={node.path}>{node.name}</Link>
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
