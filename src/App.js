import React, { useState } from "react";
import logo from './logo.svg';

import './App.css';
import { Principal} from "./pages/Principal";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register.jsx";
import { Habitacion } from "./pages/Habitacion.jsx";
import { Reservas } from "./pages/Reservas.jsx";
import { Administrador } from "./pages/Administrador.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState('principal');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {currentForm === "login" ? (
      <Login onFormSwitch={toggleForm} />
    ) : currentForm === "principal" ? (
      <Principal onFormSwitch={toggleForm} />
    ) : currentForm === "register" ? (
      <Register onFormSwitch={toggleForm} />
    ) : currentForm === "habitacion" ? (
      <Habitacion onFormSwitch={toggleForm} />
    ) : currentForm === "reservas" ? (
      <Reservas onFormSwitch={toggleForm} />
    ) : (
      <Administrador onFormSwitch={toggleForm} />
    )}
  </div>
  );
}

export default App;
