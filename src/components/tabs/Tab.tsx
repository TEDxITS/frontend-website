import React from 'react';

type Props = {
  title: string;
  className?: string;
};

const Tab: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Tab;
