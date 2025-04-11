import "../Styles/global.css";

export default function Button({ type, onClick, children }) {
  return (
    <button type={type} onClick={onClick} className="Button">
      {children}
    </button>
  );
}
