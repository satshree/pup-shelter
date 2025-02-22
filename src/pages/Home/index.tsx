import { useContext, useEffect, useState } from "react";

import { AppDataContext } from "../../context";

import { Dog } from "../../types/models";

import Card from "../../components/Card";
import Label from "../../components/Label";
import Badge from "../../components/Badge";
import FavoritesModal from "../../components/FavoritesModal";

import { searchDogs } from "../../utils/api/dogs";

import ArrowUp from "./icons/ArrowUp";
import ArrowDown from "./icons/ArrowDown";

import Pup from "../../assets/img/pup.svg";
import HeartIcon from "../../assets/icon/heart.svg";

import styles from "./page.module.css";

export default function Home() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const {
    dogList,
    searching,
    pagination,
    currentSearch,
    favoriteList,
    setDogList,
    setSearching,
    setPagination,
    updateFavoriteList,
  } = appDataContext;

  const [sort, setSort] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setSearching(false);
  }, []);

  useEffect(() => {
    handleSortChange();
  }, [sort]);

  const fetchDogs = async (from: number) => {
    setSearching(true);

    const response = await searchDogs(currentSearch, from, sort);

    setDogList(response.dogs);
    setPagination(response.pagination);
    setSearching(false);
  };

  const handlePaginationClick = async (from: number = 0) =>
    await fetchDogs(from);

  const handleSortChange = async () => await fetchDogs(0);

  const handleAddToFavorite = (dog: Dog) => {
    if (favoriteList.indexOf(dog) === -1) {
      const newFavoriteList = [...favoriteList, dog];
      updateFavoriteList(newFavoriteList);
      alert("Pup added to your favorite list.");
    } else {
      alert("This pup is in your favorite list.");
    }
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
                <div className="d-flex align-items-center justify-content-center">
                  <span style={{ marginTop: "0.25rem" }}>
                    <Label>Found {pagination.total} results</Label>
                    <span
                      style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                    >
                      |
                    </span>
                  </span>
                  <span
                    className={styles.clickable}
                    onClick={() => setSort("asc")}
                  >
                    <ArrowUp stroke={sort === "asc" ? "#4197FF" : "#000"} />
                  </span>
                  <span
                    className={styles.clickable}
                    onClick={() => setSort("desc")}
                  >
                    <ArrowDown stroke={sort === "desc" ? "#4197FF" : "#000"} />
                  </span>
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
                                &#91;Age: {dog.age}&#93;
                              </small>
                            </Label>
                          </div>
                          <Badge text={dog.breed} />
                        </div>
                        <div>
                          <Label>
                            <small
                              className={`${styles.clickable} ${styles.favorite}`}
                              onClick={() => handleAddToFavorite(dog)}
                            >
                              <img
                                src={HeartIcon}
                                style={{ width: 20, height: 20 }}
                                alt="favorite"
                              />
                            </small>
                          </Label>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
              <hr />
            </>
          )}
        </>
      </div>

      <FavoritesModal />
    </>
  );
}
