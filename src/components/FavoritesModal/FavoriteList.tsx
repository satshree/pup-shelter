import { useContext } from "react";

import { AppDataContext } from "../../context";

import { Dog } from "../../types/models";

import Card from "../Card";
import Badge from "../Badge";
import Label from "../Label";

import TrashIcon from "../../assets/icon/trash.svg";

import styles from "./styles.module.css";

export default function FavoriteList() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const { favoriteList, updateFavoriteList } = appDataContext;

  const handleRemove = (dog: Dog) => {
    const userConfirm = confirm(
      `Are you sure to remove ${dog.name} from favorites?  `
    );

    if (userConfirm) {
      let newFavoriteList = [...favoriteList];

      const favoriteIndex = newFavoriteList.indexOf(dog);
      newFavoriteList.splice(favoriteIndex, 1);
      updateFavoriteList(newFavoriteList);
    }
  };

  return (
    <>
      {favoriteList.length === 0 ? (
        <>
          <div className="p-5 d-flex align-items-center justify-content-center">
            <Label type="subtitle">
              Add pups you like to favorites and start matching!
            </Label>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            {favoriteList.map((dog) => (
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
                          className={styles.remove}
                          onClick={() => handleRemove(dog)}
                        >
                          <img
                            src={TrashIcon}
                            style={{ width: 20, height: 20 }}
                            alt="remove"
                          />
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
  );
}
