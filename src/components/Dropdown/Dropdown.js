import React from "react";
import { AlertTitle, Alert } from "@mui/material";
import "./Dropdown.scss";
import { useTranslation } from "react-i18next";

export default function Dropdown({
  label,
  listItem,
  value,
  name,
  onChange,
  disabled,
}) {
  return (
    <>
      <div className="input_component">
        <label htmlFor="dropdown" className="label">
          {label}
        </label>
        <select
          id="dropdown"
          className="input"
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
        >
          {listItem.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
