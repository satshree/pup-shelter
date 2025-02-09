import { useContext } from "react";

import { AppDataContext } from "../../context";

import FavoriteList from "./FavoriteList";

export default function FavoritesModal() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) return;

  const { favoriteList } = appDataContext;

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
              ></button>
            </div>
            <div className="modal-body">
              <FavoriteList favoriteList={favoriteList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
