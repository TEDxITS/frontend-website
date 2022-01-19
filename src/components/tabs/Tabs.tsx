import React, { ReactElement, useState } from 'react';

import TabTitle from './TabTitle';

type Props = {
  children: ReactElement[];
  className?: string;
  ulClassName?: string;
  liClassName?: string;
};

const Tabs: React.FC<Props> = ({ children, className, ulClassName }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={className}>
      <ul className={ulClassName}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
