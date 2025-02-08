import Card from "../../components/Card";
import Label from "../../components/Label";

import styles from "./page.module.css";

import Pup from "../../assets/img/pup.svg";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <div className="row w-100">
          <div className="col-md-3">
            <Card>
              <div>
                <Label>Filter</Label>
              </div>
              <br />
              <div></div>
            </Card>
          </div>
          <div className="col-md-9 d-flex align-items-center justify-content-center">
            <img src={Pup} className={styles.pup} />
          </div>
        </div>
      </div>
    </>
  );
}
