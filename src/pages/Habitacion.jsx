import React, { useState } from 'react';

export const Habitacion = (props) => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    
      const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
        setNombreUsuario('');
        setContraseña('');
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombreUsuario === 'Administrador' && contraseña === '12345') {
          // Realizar las acciones de administración aquí
          alert('Acciones de administración realizadas.');
          cerrarModal();
          props.onFormSwitch('administrador')

        } else {
          alert('El nombre de usuario o la contraseña son incorrectos.');
        }
        setNombreUsuario('');
        setContraseña('');
      };
    
      return (
        <div className="contendores-principales">
        <header>
        <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />
          </header>
    
          <button type="submit" onClick={abrirModal}>Administrar Residencias</button>

            {mostrarModal && (
            <div className="administrador">
                <div className="administrador-contenido">
                <button className="administrador-cerrar" onClick={cerrarModal}>Cerrar</button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre-usuario">Nombre del Administrador:</label>
                    <input type="text" id="nombre-admin" name="nombre-usuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
                    <br />
                    <label htmlFor="contrasena">Contraseña del administrador:</label>
                    <input type="password" id="contrasena-admin" name="contrasena" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    <br />
                    <button type="submit">Iniciar sesión</button>
                </form>
                </div>
            </div>
            )}

          <div class="habitaciones-contenedor">
          <h1>Habitaciones disponibles</h1>
          <div class="habitaciones-cuadricula">
            <section class="room individual">
              <h2>Individual</h2>
              <p>Precio: $1000 por mes</p>
              <p>Características:</p>
              <ul>
                <li>Cama individual</li>
                <li>Espacio de almacenamiento</li>
                <li>Escritorio y silla</li>
                <li>Baño compartido</li>
                <li>Cupos Disponibles: 10/100</li>
              </ul>
               <button type="submit" onClick={() => props.onFormSwitch('reservas')}>Reservar</button>

            </section>
            <section class="room doble">
              <h2>Doble</h2>
              <p>Precio: $1500 por mes</p>
              <p>Características:</p>
              <ul>
                <li>Camas individuales</li>
                <li>Espacio de almacenamiento</li>
                <li>Escritorio y sillas</li>
                <li>Baño compartido</li>
                <li>Cupos Disponibles: 50/100</li>
              </ul>
              <button type="submit" onClick={() => props.onFormSwitch('reservas')}>Reservar</button>
            </section>
            <section class="room premium">
              <h2>Suite</h2>
              <p>Precio: $2000 por mes</p>
              <p>Características:</p>
              <ul>
                <li>Cama queen size</li>
                <li>Sala de estar privada</li>
                <li>Escritorio y silla</li>
                <li>Baño privado</li>
                <li>Cupos Disponibles: 5/100</li>
              </ul>
              <button type="submit" onClick={() => props.onFormSwitch('reservas')}>Reservar</button>
            </section>
          </div>
      </div>
        </div>
      );
    };
export default Habitacion;
    