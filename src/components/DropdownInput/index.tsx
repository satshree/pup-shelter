import { useState } from "react";

import Input, { InputProps } from "../Input";

interface DropdownInputProps extends InputProps {
  options: string[];
  onOptionClick: (option: string) => void;
}

export default function DropdownInput(props: DropdownInputProps) {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setValue(value);
    const filtered = props.options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);

    if (value === "") props.onChange("");
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setFilteredOptions([]);
    props.onOptionClick(option);
  };

  const handleKeyDown = (value: string) => {
    setValue(value);
    setFilteredOptions([]);
    props.onOptionClick(value);
  };

  return (
    <div className="dropdown">
      <Input
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {value !== "" && filteredOptions.length > 0 && (
        <ul
          className="dropdown-menu w-100 mt-2 show"
          style={{ borderRadius: 12 }}
        >
          {filteredOptions.map((option, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
