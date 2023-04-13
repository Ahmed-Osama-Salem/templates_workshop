import type { ReactNode } from 'react';

const ThemeLayout: React.FC<{
  children: ReactNode;
}> = (props) => {
  return <section className="theme-layout-container">{props.children}</section>;
};

export default ThemeLayout;
