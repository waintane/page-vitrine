
import './style.css';

import {Route, Routes} from "react-router-dom";

import Accueil from "./pages/Accueil";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">

      <header>

        <Navigation/>

      </header>

      <main>
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
        </Routes>
      </main>

    </div>
  );
}

export default App;
