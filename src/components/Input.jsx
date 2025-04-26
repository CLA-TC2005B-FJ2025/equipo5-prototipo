import "../Styles/Global.css";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  accept,
  id,
}) {
  return (
    <input
      className="Input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      accept={accept}
      id={id}
    />
  );
}
