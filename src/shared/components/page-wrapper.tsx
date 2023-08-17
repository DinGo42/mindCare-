import { FC, ReactNode, memo } from 'react';

type PageWrapperProperties = {
  children: ReactNode;
};
const pageWrapper: FC<PageWrapperProperties> = ({ children }) => {
  return (
    <div className="tabletM:pr-24 tabletM:pl-24 w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
      {children}
    </div>
  );
};
export const PageWrapper = memo(pageWrapper);
