import React from "react";
import { useState } from "react";
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import "./Input.scss";

export default function Input({
  label,
  placeholder,
  className,
  type,
  disabled,
  id,
  onChange,
  value,
  name,
}) {
  const [typ, setTyp] = useState(type);
  const handleViewPassword = () => {
    setTyp("text");
  };

  const handleHiddenPassword = () => {
    setTyp("password");
  };
  return (
    <div className="input_component">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="input_container">
        <input
          id={id}
          type={typ || "text"}
          placeholder={placeholder}
          className={`input ${className}`}
          disabled={disabled}
          onChange={onChange}
          value={value}
          name={name}
        />
        {type === "password" &&
          (typ === "password" ? (
            <RemoveRedEyeOutlined
              className="eye-icon"
              onClick={handleViewPassword}
            />
          ) : (
            <VisibilityOffOutlined
              className="eye-icon"
              onClick={handleHiddenPassword}
            />
          ))}
      </div>
    </div>
  );
}
