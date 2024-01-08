import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'
/* import Siparis from "./components/Siparis" */
import Anasayfa from "./components/Anasayfa"
/* import Final from "./components/Final" */


function App() {
  return (
      <Routes>
      <Route path="/" element={<Anasayfa />}/>
      </Routes>

  );
}

export default App;
