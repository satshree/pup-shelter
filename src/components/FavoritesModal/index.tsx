import { useContext, useState } from "react";

import { AppDataContext } from "../../context";

import { Dog } from "../../types/models";

import Button from "../Button";
import FavoriteList from "./FavoriteList";
import { matchDog } from "../../api/dogs";
import Label from "../Label";

export default function FavoritesModal() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const { favoriteList, updateFavoriteList } = appDataContext;

  const [loading, setLoading] = useState(false);
  const [matched, setMatched] = useState<Dog | undefined>(undefined);

  const handleMatching = async () => {
    setLoading(true);

    const response = await matchDog(favoriteList.map((fav) => fav.id));

    let matchedDog;
    for (const dog of favoriteList) {
      if (dog.id === response.match) {
        matchedDog = dog;
        break;
      }
    }

    setLoading(false);
    setMatched(matchedDog);
    updateFavoriteList([]);
  };

  const handleCloseTask = () => {
    if (matched) setTimeout(() => setMatched(undefined), 1200);
  };

  return (
    <>
      <div id="favoritesModal" className="modal fade" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Favorites</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseTask}
              ></button>
            </div>
            <div className="modal-body">
              {matched ? (
                <>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div>
                        <Label type="title">Congratulations!</Label>
                      </div>
                      <div>
                        <Label type="subtitle">
                          You have been matched with {matched.name}
                        </Label>
                      </div>
                    </div>
                    <br />
                    <img src={matched.img} style={{ width: 300 }} />
                  </div>
                </>
              ) : (
                <>
                  <FavoriteList />
                  {favoriteList.length > 0 ? (
                    <>
                      <hr />
                      <div className="d-flex align-items-center justify-content-between">
                        <Button
                          text="Match and Choose your Pup!"
                          block={true}
                          onClick={handleMatching}
                          loading={loading}
                        />
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
