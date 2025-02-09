import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";

import { AppDataContext } from "../../context";

import { getDogBreedAPI } from "../../api/dogs";

import { searchDogs } from "../../utils/api/dogs";
import { endUserSession, isLoggedIn } from "../../utils/api/auth";

import Label from "../Label";
import Button from "../Button";
import DropdownInput from "../DropdownInput";

import styles from "./header.module.css";

export default function Header() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const navigate = useNavigate();
  const location = useLocation();

  const {
    breedList,
    favoriteList,
    setDogList,
    setBreedList,
    setSearching,
    setPagination,
    setCurrentSearch,
  } = appDataContext;

  const [authenticated, setAuthenicated] = useState(isLoggedIn());

  const [search, setSearch] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search a pup...");

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const dogBreedList = await getDogBreedAPI();
      setBreedList(dogBreedList);

      setSearchPlaceholder(
        `Search a pup... ${
          dogBreedList[Math.floor(Math.random() * dogBreedList.length)]
        } maybe?`
      );
    };

    const checkAuth = isLoggedIn();
    setAuthenicated(checkAuth);

    if (checkAuth) fetchDogBreeds();
  }, [location]);

  useEffect(() => {
    const fetchDogList = async () => {
      setSearching(true);
      const response = await searchDogs(search);

      setDogList(response.dogs);
      setPagination(response.pagination);
      setSearching(false);
    };

    setCurrentSearch(search);
    fetchDogList();
  }, [search]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSignOut = async () => {
    const confirmUser = confirm("Sign out from Pup Shelter?");

    if (confirmUser) {
      try {
        await endUserSession();
      } catch {
        //
      }

      navigate("/signin");
    }
  };

  const showFavoritesModal = () => {
    const modalElement = document.getElementById("favoritesModal");
    if (modalElement) {
      const modal = Modal.getOrCreateInstance(modalElement);
      modal.show();
    }
  };

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
        {authenticated ? (
          <>
            <div className={styles.search}>
              <DropdownInput
                placeholder={searchPlaceholder}
                value={search}
                onChange={handleSearchChange}
                options={breedList}
                onOptionClick={handleSearchChange}
              />
            </div>
            <br />
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <Button
                  text={`Favorites (${favoriteList.length})`}
                  onClick={showFavoritesModal}
                />
              </div>
              <div style={{ marginLeft: "0.5rem" }}>
                <Button
                  text="Sign Out"
                  level="danger"
                  onClick={handleSignOut}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Label type="subtitle" color="#fff">
              Hello There! Sign In to Continue
            </Label>
          </>
        )}
      </div>
    </>
  );
}
