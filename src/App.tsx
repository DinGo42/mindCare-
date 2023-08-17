import './App.css';
import { MainPage } from './pages/main';
import { ModalProvider } from './shared/hooks/use-modal-provider';

function App() {
  return (
    <>
      <ModalProvider>
        <MainPage />
      </ModalProvider>
    </>
  );
}

export default App;
