import React, { useState } from 'react';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass || !name || !confirmPass) {
      // Si alguno de los campos está vacío, muestra una alerta
      alert('Por favor, completa todos los campos');
      return;
    }

    if (pass !== confirmPass) {
      // Las contraseñas no coinciden, muestra una alerta
      alert('Las contraseñas no coinciden');
      return;
    }

    // Las contraseñas coinciden y los campos están completos, realiza el registro
    console.log(email);
    alert('Registrado correctamente');

    setEmail('');
    setPass('');
    setName('');
    setConfirmPass('');
  }

  return (
    <div className="contendores-principales">
      <header>
        <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />
      </header>

      <form className="register-form" onSubmit={handleSubmit}>
        <h2>REGISTRO</h2>

        <div className="separador">
          <label htmlFor="name">Nombre de usuario:</label>
          <input value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombres" required />
        </div>

        <div className="separador">
          <label htmlFor="email">Correo electrónico:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tucorreo@gmail.com" id="email" name="email" required />
        </div>

        <div className="separador">
          <label htmlFor="password">Contraseña:</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
        </div>

        <div className="separador">
          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="********" id="confirm-password" name="confirm-password" required />
        </div>

        <span className="link-text">¿Ya tienes una cuenta?{' '}
          <span className="link-clic" onClick={() => props.onFormSwitch('login')}>Inicia sesión aquí</span>
          .
        </span>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
