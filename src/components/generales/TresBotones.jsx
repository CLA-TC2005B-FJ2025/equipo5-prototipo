import { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaUserTie, FaUser, FaSearch } from "react-icons/fa";

export default function TresBotones() {
  const [counts, setCounts] = useState({ profesores: 0, directivos: 0, otros: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loadingCounts, setLoadingCounts] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [error, setError] = useState(null);

  // Carga conteos al montar
  useEffect(() => {
    async function fetchCounts() {
      try {
        const base = import.meta.env.VITE_API_URL;
        const [profRes, dirRes, otrosRes] = await Promise.all([
          fetch(`${base}directorio/profesores/count`),
          fetch(`${base}directorio/directivos/count`),
          fetch(`${base}directorio/otros/count`),
        ]);
        if (!profRes.ok || !dirRes.ok || !otrosRes.ok) {
          throw new Error("Error al obtener conteos");
        }
        const profJson = await profRes.json();
        const dirJson = await dirRes.json();
        const otrosJson = await otrosRes.json();
        setCounts({
          profesores: profJson.count,
          directivos: dirJson.count,
          otros: otrosJson.count,
        });
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoadingCounts(false);
      }
    }
    fetchCounts();
  }, []);

  // Maneja búsqueda
  const handleSearch = async () => {
    setLoadingSearch(true);
    setError(null);
    try {
      const base = import.meta.env.VITE_API_URL;
      const res = await fetch(
        `${base}directorio/search?term=${encodeURIComponent(searchTerm)}`
      );
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setResults(json.items);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoadingSearch(false);
    }
  };

  if (loadingCounts) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="frameTresBotonesCards">
      <div className="busquedaDirectorio">
        <input
          type="text"
          placeholder="Directorio de Personas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="iconoBuscar" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className="contenedorTarjetas">
        <div className="tarjetaDirectorio">
          <FaChalkboardTeacher size={40} />
          <p>Profesores</p>
          <span>{counts.profesores}</span>
        </div>

        <div className="tarjetaDirectorio">
          <FaUserTie size={40} />
          <p>Directivos</p>
          <span>{counts.directivos}</span>
        </div>

        <div className="tarjetaDirectorio">
          <FaUser size={40} />
          <p>Otros</p>
          <span>{counts.otros}</span>
        </div>
      </div>

      {searchTerm && (
        <div className="contenedorTarjetas">
          {loadingSearch ? (
            <p>Buscando...</p>
          ) : results.length > 0 ? (
            results.map((persona) => (
              <div key={persona.id} className="tarjetaDirectorio">
                <p>{persona.nombre}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron coincidencias.</p>
          )}
        </div>
      )}
    </div>
  );
}
