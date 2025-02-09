import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticateUser, endUserSession } from "../../utils/api/auth";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./page.module.css";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    endUserSession();
  }, []);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    setUsernameError("");
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "") {
      setUsernameError("Name is required!");
      return;
    }

    if (email === "") {
      setEmailError("Email is required!");
      return;
    }

    try {
      setLoading(true);
      await authenticateUser({ name: username, email });

      navigate("/");
    } catch (err) {
      console.log("ERROR", err);

      setLoading(false);
      alert("Unable to authenticate");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <Card>
          <form onSubmit={handleSignIn}>
            <Input
              label="Name"
              placeholder="Enter your Name"
              value={username}
              onChange={handleUsernameChange}
              errorMessage={usernameError}
              required={true}
            />
            <br />
            <Input
              label="Email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              errorMessage={emailError}
              required={true}
            />
            <br />
            <Button
              text="Sign In"
              block={true}
              submit={true}
              loading={loading}
            />
          </form>
        </Card>
      </div>
    </div>
  );
}
