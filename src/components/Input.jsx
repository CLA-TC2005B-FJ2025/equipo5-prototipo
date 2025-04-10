import '../Styles/global.css';

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className="Input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
