import React, { useState } from "react";

export const Administrador = (props) =>{
  const [habitaciones, setHabitaciones] = useState([
    {
      numero: "101",
      tipo: "Individual",
      capacidad: "1",
      precio: "$500/mes"
    },
    {
      numero: "201",
      tipo: "Doble",
      capacidad: "2",
      precio: "$800/mes"
    },
    {
      numero: "301",
      tipo: "Suite",
      capacidad: "4",
      precio: "$1200/mes"
    }
  ]);

  const [estudiantes, setEstudiantes] = useState([
    {
      nombre: "Jimmy Marin",
      correo: "jmarin20@live.uleam.edu.ec",
      telefono: "0981221892",
      habitacion: "101"
    },
    {
      nombre: "Margaria Guerrero",
      correo: "mireguerr1812@live.uleam.edu.ec",
      telefono: "0986425678",
      habitacion: "201"
    },
    {
      nombre: "Pablo Lopez",
      correo: "pablolopez@live.uleam.edu.ec",
      telefono: "0981221812",
      habitacion: "301"
    }
  ]);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [habitacionAsignada, setHabitacionAsignada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const nombre = e.target.nombre.value;
    const correo = e.target.email.value;
    const telefono = e.target.telefono.value;
    const habitacion = e.target.habitacion.value;
  
    // Verificar si los campos están vacíos
    if (!nombre || !correo || !telefono || !habitacion) {
      // Mostrar un mensaje de error al usuario
      alert('Por favor, complete todos los campos');
      return;
    }
  

    e.target.reset();
  
  };
  
  const mostrarFormulario = () => {
    const formulario = document.getElementById('registro-estudiante');
    formulario.style.display = 'block';
  };

  const registrarEstudiante = (e) => {
    e.preventDefault();

    // Lógica para registrar el estudiante

    // Reiniciar los valores de los estados
    setNombre('');
    setCorreo('');
    setTelefono('');
    setHabitacionAsignada('');

    // Ocultar el formulario
    const formulario = document.getElementById('registro-estudiante');
    formulario.style.display = 'none';
  };

  const agregarHabitacion = () => {
    const nuevaHabitacion = {
      numero: `${habitaciones.length + 1}01`,
      tipo: "Individual",
      capacidad: "1",
      precio: "$500/mes"
    };

    setHabitaciones([...habitaciones, nuevaHabitacion]);
  };

  const quitarHabitacion = () => {
    if (habitaciones.length > 3) {
      setHabitaciones(habitaciones.slice(0, habitaciones.length - 1));
    } else {
      alert("No se puede eliminar esta habitación.");
    }
  };

  const agregarEstudiante = (e) => {
    e.preventDefault();

    const nuevoEstudiante = {
      nombre,
      correo,
      telefono,
      habitacion: habitacionAsignada
    };

    setEstudiantes([...estudiantes, nuevoEstudiante]);

    setNombre("");
    setCorreo("");
    setTelefono("");
    setHabitacionAsignada("");
  };
  const quitarEstudiante = () => {
    const confirmacion = window.confirm("¿Está seguro que desea eliminar este estudiante?");
    if (confirmacion) {
      if (estudiantes.length > 3) {
        setEstudiantes(estudiantes.slice(0, estudiantes.length - 1));
      } else {
        alert("No se puede eliminar este estudiante.");
      }
    }
  };
  return (
    <div>
      <div className="contenedor-tabla">
      <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />

        <h1>Gestión de Residencia Universitaria</h1>
  
        <main>
          <h2>Habitaciones disponibles</h2>
  
          <table className="tabla-habitaciones">
            <thead>
              <tr>
                <th>Número de habitación</th>
                <th>Tipo de habitación</th>
                <th>Capacidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((habitacion, index) => (
                <tr key={index}>
                  <td>{habitacion.numero}</td>
                  <td>
                    <input type="text"  value={habitacion.tipo} readOnly />
                  </td>
                  <td>
                    <input type="text"  value={habitacion.capacidad} readOnly />
                  </td>
                  <td>
                    <input type="text"  value={habitacion.precio} readOnly />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="botones-habitaciones">
            <button type="submit" onClick={agregarHabitacion}>
              Agregar habitación
            </button>
            <button type="submit" onClick={quitarHabitacion}>
              Quitar habitación
            </button>
          </div>
  
          <h2>Lista de Estudiantes</h2>
  
          <table className="tabla-estudiantes">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Habitación</th>
                <th>Opción</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante, index) => (
                <tr key={index}>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.correo}</td>
                  <td>{estudiante.telefono}</td>
                  <td>{estudiante.habitacion}</td>
                  <td>
                    <button
                      type="eliminate"
                      className="eliminar-fila"
                      onClick={quitarEstudiante}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="registro-admin-boton">
            <button type="submit" onClick={() => mostrarFormulario()}>
              Agregar Estudiante
            </button>
          </div>
  
          <form id="registro-estudiante" style={{ display: "none" }} onSubmit={agregarEstudiante}>
            <h2>Registrar nuevo estudiante</h2>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            maxLength="10"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <label htmlFor="tipo-habitacion">Habitación asignada</label>
          <select
            id="tipo-habitacion"
            name="habitacion"
            required
            value={habitacionAsignada}
            onChange={(e) => setHabitacionAsignada(e.target.value)}
          >
            <option value="">Seleccione una habitación</option>
            {habitaciones.map((habitacion, index) => (
              <option key={index} value={habitacion.numero}>
                {habitacion.numero}
              </option>
            ))}
          </select>
          <button type="submit">Registrar</button>
        </form>
      </main>
    </div>
  </div>
);
            }
export default Administrador;
