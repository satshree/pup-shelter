import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  block?: boolean;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  level?: "primary" | "danger";
}

export default function Button(props: ButtonProps) {
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <button
      className={`
        ${styles.btn} 
        ${props.block ? "w-100" : null}
        ${
          props.level === "danger"
            ? styles["btn-danger"]
            : styles["btn-primary"]
        }
        `}
      type={props.submit ? "submit" : "button"}
      onClick={handleClick}
      disabled={props.disabled || props.loading || false}
    >
      {props.text}
    </button>
  );
}
