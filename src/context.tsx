import { createContext, useState } from "react";

import { Dog } from "./types/models";

interface ContextType {
  dogList: Dog[];
  searching: boolean;
  favoriteList: Dog[];
  setDogList: (dogList: Dog[]) => void;
  setSearching: (searching: boolean) => void;
  updateFavoriteList: (newList: Dog[]) => void;
}

export const AppDataContext = createContext<ContextType | undefined>(undefined);

export const AppDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [searching, setSearching] = useState(false);
  const [favoriteList, updateFavoriteList] = useState<Dog[]>([]);

  return (
    <AppDataContext.Provider
      value={{
        dogList,
        searching,
        favoriteList,
        setDogList,
        setSearching,
        updateFavoriteList,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
