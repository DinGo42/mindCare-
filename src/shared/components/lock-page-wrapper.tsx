import { type ReactNode, type FC, useContext, memo } from 'react';
import { modalConxtex } from '../hooks/use-modal-provider';

type ContentLockProperties = {
  children: ReactNode;
  blur?: boolean;
  className?: string;
};
const useContentLock: FC<ContentLockProperties> = ({
  children,
  blur = false,
  className = '',
}) => {
  const { closeModal } = useContext(modalConxtex);
  return (
    <div className={`absolute top-0 z-30  flex h-full w-full ${className}`}>
      <div className="absolute z-20 h-fit">{children}</div>
      <div
        className={`h-full w-full ${
          blur ? 'backdrop-blur' : 'bg-black-400 opacity-70'
        }`}
        onClick={closeModal}
      />
    </div>
  );
};
export const ContentLockWrapper = memo(useContentLock);
