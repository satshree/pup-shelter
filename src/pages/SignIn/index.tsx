import { FormEvent, useState } from "react";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./page.module.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setUsernameError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError("");
  };

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <Card>
          <form onSubmit={handleSignIn}>
            <Input
              label="Username"
              placeholder="Enter your Username"
              value={username}
              onChange={handleUsernameChange}
              errorMessage={usernameError}
              required={true}
            />
            <br />
            <Input
              label="Password"
              placeholder="Enter your Password"
              password={true}
              value={password}
              onChange={handlePasswordChange}
              errorMessage={passwordError}
              required={true}
            />
            <br />
            <Button text="Sign In" block={true} submit={true} />
          </form>
        </Card>
      </div>
    </div>
  );
}
