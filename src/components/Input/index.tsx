import { useEffect, useState } from "react";

import Label from "../Label";

import styles from "./styles.module.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  password?: boolean;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
}

export default function Input(props: InputProps) {
  const [value, setValue] = useState("");

  useEffect(() => setValue(props.value), [props.value]);

  return (
    <>
      {props.label ? (
        <div>
          <Label>{props.label}</Label>
        </div>
      ) : null}
      <input
        type={props.password ? "password" : "text"}
        className={`${styles.input} form-control`}
        placeholder={props.placeholder || ""}
        value={value}
        onChange={(e) => props.onChange(e.target.value)}
        required={props.required || false}
      />
      {props.errorMessage ? (
        <div>
          <Label color="#dc3545">{props.errorMessage}</Label>
        </div>
      ) : null}
    </>
  );
}
