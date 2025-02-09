import { useNavigate } from "react-router-dom";

import Label from "../../components/Label";

import LostBro from "../../assets/img/Lost-bro.svg";
import Button from "../../components/Button";

export default function Lost() {
  const navigate = useNavigate();

  const handleRedirect = () => navigate("/");

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <div>
        <img src={LostBro} style={{ width: 550, height: 550 }} alt="lost" />
      </div>
      <div>
        <Label type="subtitle">You seem lost</Label>
      </div>
      <div>
        <br />
        <Button text="Click here to go back" onClick={handleRedirect} />
      </div>
    </div>
  );
}
