import {
  type FC,
  type ReactNode,
  createContext,
  useState,
  useCallback,
} from 'react';

type ModalContextProperties = {
  modalProperties: { isOpen: boolean; content: ReactNode };
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};
type ModalProviderProperties = {
  children: ReactNode;
};
type ModalProperties = {
  isOpen: boolean;
  content: ReactNode;
};
export const modalConxtex = createContext<ModalContextProperties>({
  modalProperties: { isOpen: false, content: <></> },
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider: FC<ModalProviderProperties> = ({ children }) => {
  const [modalProperties, setModalProperties] = useState<ModalProperties>({
    content: <></>,
    isOpen: false,
  });
  const openModal = useCallback((content: ReactNode) => {
    setModalProperties({ content: content, isOpen: true });
  }, []);
  const closeModal = useCallback(() => {
    setModalProperties({ isOpen: false, content: null });
  }, []);
  return (
    <modalConxtex.Provider value={{ modalProperties, openModal, closeModal }}>
      {modalProperties.content}
      {children}
    </modalConxtex.Provider>
  );
};
