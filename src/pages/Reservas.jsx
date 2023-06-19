import React, { useState } from 'react';
const currentYear = new Date().getUTCFullYear();

export const Reservas = (props) => {
  const [tipoHabitacion, setTipoHabitacion] = useState('individual');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [banco, setBanco] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [correoPaypal, setCorreoPaypal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fechaEntrada && fechaSalida) {
      const selectedEntrada = new Date(fechaEntrada);
      const selectedSalida = new Date(fechaSalida);
      const selectedEntradaYear = selectedEntrada.getUTCFullYear();
      const selectedSalidaYear = selectedSalida.getUTCFullYear();

      if (selectedEntradaYear < currentYear || selectedSalidaYear < currentYear) {
        console.log("Selecciona una fecha válida del año actual");
        return;
      }
    } else {
      console.log("Por favor, completa todas las fechas");
    }
    if (
      metodoPago === "" ||
      (metodoPago === "tarjeta" &&
        (numeroTarjeta === "" ||
          nombreTarjeta === "" ||
          fechaVencimiento === "" ||
          codigoSeguridad === "")) ||
      (metodoPago === "transferencia" && (banco === "" || cuenta === "")) ||
      (metodoPago === "paypal" && correoPaypal === "")
    ) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  return (
      <div className="reservas-contenedor">
        <header>
        <img src={process.env.PUBLIC_URL + '/logo-uleam.png'} alt="Logo" className="logo" />
      </header>
        <h1>Reserva tu habitación</h1>

        <form onSubmit={handleSubmit}>
          <div className="formulario-reservar">
            <label htmlFor="tipo-habitacion">Tipo de habitación:</label>
            <select id="tipo-habitacion" name="tipo-habitacion" value={tipoHabitacion} onChange={(e) => setTipoHabitacion(e.target.value)}>
              <option value="individual">Individual</option>
              <option value="doble">Doble</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className="formulario-reservar">
            <label htmlFor="fecha-entrada">Fecha de entrada:</label>
            <input type="date" id="fecha-entrada" name="fecha-entrada" required value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)} max={`${currentYear}-12-31`} />
          </div>
          <div className="formulario-reservar">
            <label htmlFor="fecha-salida">Fecha de salida:</label>
            <input type="date" id="fecha-salida" name="fecha-salida" required value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} max={`${currentYear}-12-31`} />
          </div>
          <div className="formulario-reservar">
            <label htmlFor="nombre">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="formulario-reservar">
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <div className="formulario-reservar">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required pattern="[0-9]+" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
  
          <div className="formulario-reservar">
              <label htmlFor="metodo-pago">Método de pago:</label>
              <select id="metodo-pago" name="metodo-pago" required value={metodoPago} onChange={handleMetodoPagoChange}>
                <option value="">Seleccione un método de pago</option>
                <option value="tarjeta">Tarjeta de crédito/débito</option>
                <option value="transferencia">Transferencia bancaria</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div id="tarjeta" className={metodoPago === "tarjeta" ? "formulario-reservar" : "formulario-reservar hidden"}>
              <label htmlFor="numero-tarjeta">Número de tarjeta:</label>
              <input type="text" id="numero-tarjeta" name="numero-tarjeta" required value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
              <label htmlFor="nombre-tarjeta">Nombre en la tarjeta:</label>
              <input type="text" id="nombre-tarjeta" name="nombre-tarjeta" required value={nombreTarjeta} onChange={(e) => setNombreTarjeta(e.target.value)} />
              <label htmlFor="fecha-vencimiento">Fecha de vencimiento:</label>
              <input type="month" id="fecha-vencimiento" name="fecha-vencimiento" required value={fechaVencimiento} onChange={(e) => setFechaVencimiento(e.target.value)} />
              <label htmlFor="codigo-seguridad">Código de seguridad:</label>
              <input type="text" id="codigo-seguridad" name="codigo-seguridad" required value={codigoSeguridad} onChange={(e) => setCodigoSeguridad(e.target.value)} />
            </div>

            <div id="transferencia" className={metodoPago === "transferencia" ? "formulario-reservar" : "formulario-reservar hidden"}>
              <label htmlFor="banco">Banco emisor:</label>
              <input type="text" id="banco" name="banco" required value={banco} onChange={(e) => setBanco(e.target.value)} />
              <label htmlFor="cuenta">Número de cuenta:</label>
              <input type="text" id="cuenta" name="cuenta" required value={cuenta} onChange={(e) => setCuenta(e.target.value)} />
            </div>

            <div id="paypal" className={metodoPago === "paypal" ? "formulario-reservar" : "formulario-reservar hidden"}>
              <label htmlFor="correo-paypal">Correo electrónico asociado a la cuenta de PayPal:</label>
              <input type="email" id="correo-paypal" name="correo-paypal" required value={correoPaypal} onChange={(e) => setCorreoPaypal(e.target.value)} />
            </div>

            <button type="submit">Enviar reserva</button>
            </form>
          </div>
   );
};
export default Reservas;
    