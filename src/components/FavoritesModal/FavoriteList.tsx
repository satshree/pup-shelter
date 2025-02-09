import { useEffect, useState } from "react";

import { Dog } from "../../types/models";

import Card from "../Card";
import Badge from "../Badge";
import Label from "../Label";

interface FavoriteListProps {
  favoriteList: Dog[];
}

export default function FavoriteList(props: FavoriteListProps) {
  const [favoriteList, setFavoriteList] = useState<Dog[]>([]);

  useEffect(() => setFavoriteList(props.favoriteList), [props.favoriteList]);

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
        favoriteList.map((dog) => (
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
                <div></div>
              </div>
            </Card>
          </div>
        ))
      )}
    </>
  );
}
