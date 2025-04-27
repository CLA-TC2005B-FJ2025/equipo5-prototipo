import AdminDashboard from "./admin/AdminDashboard.jsx";

export default function Dashboard() {
  const rol = localStorage.getItem("rol");

  if (rol === "1") return <AdminDashboard />;
  if (rol === "2") return <h1>ROL 2</h1>;
  if (rol === "3") return <h1>ROL 3</h1>;

  return <div>Rol no reconocido</div>;
}
