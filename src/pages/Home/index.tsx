import { useContext } from "react";

import { AppDataContext } from "../../context";

import Label from "../../components/Label";

import styles from "./page.module.css";
import Pup from "../../assets/img/pup.svg";

export default function Home() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const { dogList, searching } = appDataContext;

  return (
    <>
      <div className={styles.page}>
        <>
          {dogList.length === 0 ? (
            <>
              <div className="d-flex align-items-center justify-content-center">
                <img src={Pup} className={styles.pup} />
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ fontWeight: 550 }}
              >
                {searching ? (
                  <>
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  <Label>Start by searching dog breeds</Label>
                )}
              </div>
            </>
          ) : (
            <>{JSON.stringify(dogList)}</>
          )}
        </>
      </div>
    </>
  );
}
