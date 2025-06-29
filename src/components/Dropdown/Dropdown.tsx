import React from "react";
import "./Dropdown.css";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
  id: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  id,
  ...props
}) => {
  return (
    <div className="dropdown-container">
      <select id={id} className="dropdown-select" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="dropdown-arrow"></span>
    </div>
  );
};
