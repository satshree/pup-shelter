import { useContext, useEffect } from "react";

import { AppDataContext } from "../../context";

import Card from "../../components/Card";
import Label from "../../components/Label";
import Badge from "../../components/Badge";

import Pup from "../../assets/img/pup.svg";

import styles from "./page.module.css";

export default function Home() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const { dogList, searching, setSearching } = appDataContext;

  useEffect(() => {
    setSearching(false);
  }, []);

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
            <>
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ height: 50 }}
              >
                {searching ? (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <div
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div style={{ marginLeft: "0.25rem" }}>
                        <Label>Searching ...</Label>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <div className="row">
                {dogList.map((dog) => (
                  <div key={dog.id} className="col-sm-4 mb-3">
                    <Card img={dog.img}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div className="d-flex align-items-center">
                            <Label>{dog.name}</Label>
                            <Label>
                              <small style={{ marginLeft: "0.25rem" }}>
                                [Age: {dog.age}]
                              </small>
                            </Label>
                          </div>
                          <Badge text={dog.breed} />
                        </div>
                        <div>
                          <Label>
                            <small className={styles.favorite}>
                              Add to Favorites
                            </small>
                          </Label>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      </div>
    </>
  );
}
