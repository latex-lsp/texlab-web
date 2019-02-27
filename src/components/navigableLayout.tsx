import {
  Column,
  Columns,
  Container,
  Menu,
  MenuLabel,
  MenuList,
  Section,
  Select,
} from 'bloomer';
import { Link, navigate } from 'gatsby';
import React, { Fragment } from 'react';
import { Layout } from './layout';

export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface NavigableLayoutProps {
  activeItem: MenuItem;
  categories: MenuCategory[];
  sections: MenuItem[];
}

const MenuColumn: React.FC = ({ children }) => (
  <Column isSize={2} isHidden="touch">
    <Section>
      <Menu>{children}</Menu>
    </Section>
  </Column>
);

export const NavigableLayout: React.FC<NavigableLayoutProps> = ({
  activeItem,
  categories,
  sections,
  children,
}) => {
  const renderOption = (item: MenuItem) => (
    <option key={item.path} value={item.path}>
      {item.name}
    </option>
  );
  const renderListItem = (item: MenuItem) => (
    <li key={item.path}>
      <Link
        className={activeItem.path === item.path ? 'is-active' : undefined}
        to={item.path}>
        {item.name}
      </Link>
    </li>
  );

  const handleSelect = ({ target }: React.FormEvent) => {
    const element = target as HTMLSelectElement;
    navigate(element.value);
  };

  return (
    <Layout>
      <Container>
        <Columns>
          <MenuColumn>
            {categories.map(category => (
              <Fragment key={category.name}>
                <MenuLabel>{category.name}</MenuLabel>
                <MenuList>{category.items.map(renderListItem)}</MenuList>
              </Fragment>
            ))}
          </MenuColumn>
          <Column isSize={8}>
            <Section>
              <Columns isHidden="desktop" isMobile={true} isVCentered={true}>
                <Column isSize="narrow">
                  <MenuLabel>Topics</MenuLabel>
                </Column>
                <Column>
                  <Select onChange={handleSelect} value={activeItem.path}>
                    {categories.map(category => (
                      <optgroup key={category.name} label={category.name}>
                        {category.items.map(renderOption)}
                      </optgroup>
                    ))}
                  </Select>
                </Column>
              </Columns>
              {children}
            </Section>
          </Column>
          <MenuColumn>
            <MenuLabel>On this page</MenuLabel>
            <MenuList>{sections.map(renderListItem)}</MenuList>
          </MenuColumn>
        </Columns>
      </Container>
    </Layout>
  );
};
