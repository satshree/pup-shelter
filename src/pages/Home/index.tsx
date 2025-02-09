import { useContext, useEffect } from "react";

import { AppDataContext } from "../../context";

import Card from "../../components/Card";
import Label from "../../components/Label";
import Badge from "../../components/Badge";

import Pup from "../../assets/img/pup.svg";

import styles from "./page.module.css";
import { searchDogs } from "../../utils/api/dogs";

export default function Home() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const {
    dogList,
    searching,
    pagination,
    currentSearch,
    setDogList,
    setSearching,
    setPagination,
  } = appDataContext;

  useEffect(() => {
    setSearching(false);
  }, []);

  const handlePaginationClick = async (from: number = 0) => {
    setSearching(true);

    const response = await searchDogs(currentSearch, from);

    setDogList(response.dogs);
    setPagination(response.pagination);
    setSearching(false);
  };

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
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
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
              <div className="d-flex align-items-center justify-content-between w-100">
                <div>
                  <Label>Found {pagination.total} results</Label>
                </div>
                <div>
                  {searching ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className={styles.favorite}
                    onClick={() => {
                      if (pagination.currentPage > 1) {
                        handlePaginationClick((pagination.currentPage - 1) * 9);
                      }
                    }}
                  >
                    &laquo;
                  </div>
                  <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                    Showing Page {pagination.currentPage} of{" "}
                    {pagination.totalPage}
                  </div>
                  <div
                    className={styles.favorite}
                    onClick={() => {
                      if (pagination.currentPage < pagination.totalPage) {
                        handlePaginationClick((pagination.currentPage + 1) * 9);
                      }
                    }}
                  >
                    &raquo;
                  </div>
                </div>
              </div>
              <br />
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
