import styles from "./badge.module.css";

interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  return <div className={styles.badge}>{props.text}</div>;
}
