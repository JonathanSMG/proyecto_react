import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      // Si alguno de los campos está vacío, muestra una alerta
      alert('Por favor, completa todos los campos');
      return;
    }

    // Los campos están completos, realiza el inicio de sesión
    console.log(email);
    props.onFormSwitch('habitacion')
  }

  return (
    <div className="contendores-principales">
      <header>
        <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />
      </header>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>

        <div className="separador">
          <label htmlFor="email">Correo Electrónico</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tucorreo@gmail.com" id="email" name="email" required />
        </div>

        <div className="separador">
          <label htmlFor="password">Contraseña</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
        </div>

        <span className="link-text">¿No tienes una cuenta?{' '}
          <span className="link-clic" onClick={() => props.onFormSwitch('register')}>Regístrate aquí</span>
          .
        </span>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
