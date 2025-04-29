import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InfoDestacada() {
  const [commentsCount, setCommentsCount] = useState(0);
  const [subjectsCount, setSubjectsCount] = useState(0);
  const [filesCount, setFilesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Leer conteo de archivos de localStorage
    const storedFiles = parseInt(localStorage.getItem("archivos") || "0", 10);
    setFilesCount(storedFiles);

    // Fetch counts de comentarios y materias
    async function fetchCounts() {
      try {
        const base = import.meta.env.VITE_API_URL;
        const [comRes, matRes] = await Promise.all([
          fetch(`${base}info/comentarios/count`),
          fetch(`${base}info/materias/count`),
        ]);
        if (!comRes.ok || !matRes.ok) {
          throw new Error("Error al obtener conteos");
        }
        const comJson = await comRes.json();
        const matJson = await matRes.json();
        setCommentsCount(comJson.count);
        setSubjectsCount(matJson.count);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCounts();
  }, []);

  if (loading) return <div className="infoDestacadaContainer"><p>Cargando...</p></div>;
  if (error)   return <div className="infoDestacadaContainer"><p>Error: {error}</p></div>;

  return (
    <div className="infoDestacadaContainer">
      <h3 className="header">Información Destacada</h3>

      <div className="infoDestacadaNumeros">
        <div className="infoDestacadaItem">
          <h1>{commentsCount}</h1>
          <p className="infoTitulo">Comentarios</p>
          <p className="subtituloDos pointer" >VER LISTA</p>
        </div>
        <div className="infoDestacadaItem">
          <h1>{subjectsCount}</h1>
          <p className="infoTitulo">Materias</p>
          <p className="subtituloDos pointer" >VER LISTA</p>
        </div>
        <div className="infoDestacadaItem">
          <h1>{filesCount}</h1>
          <p className="infoTitulo">Archivos</p>
          <p className="subtituloDos pointer" >VER LISTA</p>
        </div>
      </div>

      <div className="infoDestacadaBoton">
        <button >Ver todos los datos</button>
      </div>
    </div>
  );
}
