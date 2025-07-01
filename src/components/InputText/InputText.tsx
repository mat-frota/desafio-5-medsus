function InputText({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...other
}: any) {
  return (
    <div className="form-group" style={{ marginBottom: "10px" }}>
      <label htmlFor={id} style={{ fontWeight: "bold", color: "#555" }}>
        {label}
      </label>
      <div className="input-with-icon">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            border: "2px solid #ccc",
            color: "#333",
          }}
          {...other}
        />
      </div>
    </div>
  );
}

export default InputText;
