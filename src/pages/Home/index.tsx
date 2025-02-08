import { useState } from "react";

import { Dog } from "../../types/models";

import Label from "../../components/Label";

import styles from "./page.module.css";
import Pup from "../../assets/img/pup.svg";

export default function Home() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  return (
    <>
      <div className={styles.page}>
        {dogs.length === 0 ? (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <img src={Pup} className={styles.pup} />
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ fontWeight: 550 }}
            >
              <Label>Start by searching dog breeds</Label>
            </div>
          </>
        ) : (
          <>{JSON.stringify(dogs)}</>
        )}
      </div>
    </>
  );
}
