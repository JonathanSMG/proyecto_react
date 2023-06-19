import React from 'react';

export const Principal = (props) => {
  return (
    <div className="contendores-principales">
     
      {/* Gestion */}
      <div className="gestion">
      <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />
        <strong>GESTION DE RESIDENCIA UNIVERSITARIA</strong>
        <nav>
          {/* Botones */}
          <button type="submit" onClick={() => props.onFormSwitch('register')}>Registrarse</button>

          <button type="submit" onClick={() => props.onFormSwitch('login')}>Iniciar sesión</button>

        </nav>
      </div>
      {/* pie de pagina */}
      
    </div>
  );
}

export default Principal;
