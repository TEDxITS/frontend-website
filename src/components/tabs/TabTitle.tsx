import React, { useCallback } from 'react';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  buttonClassName?: string;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  buttonClassName,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li>
      <button onClick={onClick} className={buttonClassName}>
        {title}
      </button>
    </li>
  );
};

export default TabTitle;
