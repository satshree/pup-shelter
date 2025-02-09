import { useEffect, useState } from "react";

import { useDebounceValue } from "../../hooks";

import Input, { InputProps } from "../Input";

interface DropdownInputProps extends InputProps {
  options: string[];
  onOptionClick: (option: string) => void;
}

export default function DropdownInput(props: DropdownInputProps) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue(value, 300);

  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    const filtered = props.options.filter((option) =>
      option.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    setFilteredOptions(filtered);

    if (value === "") props.onChange("");
  }, [debouncedValue]);

  const handleChange = (value: string) => {
    setValue(value);
    setShow(true);
  };

  const handleSelect = (option: string) => {
    setShow(false);
    setValue(option);
    setFilteredOptions([]);
    props.onOptionClick(option);
  };

  return (
    <div className="dropdown">
      <Input
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleSelect}
      />
      {value !== "" && show && filteredOptions.length > 0 && (
        <ul
          className="dropdown-menu w-100 mt-2 show"
          style={{ borderRadius: 12, maxHeight: 400, overflow: "scroll" }}
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
