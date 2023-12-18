
import './App.scss';
import { Universe } from "./pages/Universe";
import { BodiesProvider } from './context/BodiesProvider';

function App() {


  return (
    <>
    <BodiesProvider>
    <h1>holi</h1>
    <Universe></Universe>
    </BodiesProvider>

    </>
  )
}

export default App
