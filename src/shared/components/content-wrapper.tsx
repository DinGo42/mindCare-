import { FC, ReactNode } from 'react';
import { Header } from '../../widgets';

type PageWrapperProperties = {
  children: ReactNode;
};
export const ContentWrapper: FC<PageWrapperProperties> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="tabletM:pr-24 tabletM:pl-24 w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        {children}
      </div>
    </>
  );
};
