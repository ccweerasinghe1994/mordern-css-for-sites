import { FC } from 'react';

import { ReactNode } from 'react';

interface MyBrandProps {
  children: ReactNode;
}

const MyBrand: FC<MyBrandProps> = ({ children }) => {
  return (
    <span className="uppercase tracking-[0.25em] text-brandTextOne-light dark:text-brandSecondary-dark font-normal max-sm:invisible max-sm:overflow-hidden">
      {children}
    </span>
  );
};

export default MyBrand;
