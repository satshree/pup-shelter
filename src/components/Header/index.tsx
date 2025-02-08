import Label from "../Label";

import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Label type="title" color="#fff">
          Pup Shelter
        </Label>
        <Label type="subtitle" color="#fff">
          For a dog-lover like yourself to help find a lucky dog a new home!
        </Label>
        <br />
        <br />
        <Label type="subtitle" color="#fff">
          Hello There! Sign In to Continue
        </Label>
      </div>
    </>
  );
}
