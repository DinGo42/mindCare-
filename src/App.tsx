import './App.css';
import { Main } from './pages/main';
import { ModalProvider } from './shared/hooks/use-modal-provider';

function App() {
  return (
    <>
      <ModalProvider>
        <Main />
      </ModalProvider>
    </>
  );
}

export default App;
