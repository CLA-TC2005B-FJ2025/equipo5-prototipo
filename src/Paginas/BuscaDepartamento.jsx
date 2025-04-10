import { useState } from 'react';
import '../Styles/BuscaDepartamento.css';

export default function BuscaDepartamento() {
  const [id, setId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const departamentos = {
    '1': 'Matemáticas',
    '2': 'Ciencias Computacionales',
    '3': 'Física',
  };

  const buscar = () => {
    if (!id) return setMensaje('Por favor ingresa un ID válido');

    const nombre = departamentos[id];
    setMensaje(nombre ? `Departamento: ${nombre}` : 'Departamento no encontrado');
  };

  return (
    <section className="busca">
      <h2>Buscar Departamento</h2>
      <input
        className="buscar-input"
        type="text"
        placeholder="ID del departamento (1, 2, 3)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="buscar-button" onClick={buscar}>Buscar</button>
      {mensaje && <p className="buscar-mensaje">{mensaje}</p>}
    </section>
  );
}

