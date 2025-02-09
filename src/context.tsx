import { createContext, useState } from "react";

import { Dog } from "./types/models";

interface ContextType {
  dogList: Dog[];
  searching: boolean;
  breedList: string[];
  favoriteList: Dog[];
  setDogList: (dogList: Dog[]) => void;
  setSearching: (searching: boolean) => void;
  setBreedList: (breedList: string[]) => void;
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
  const [breedList, setBreedList] = useState<string[]>([]);
  const [favoriteList, updateFavoriteList] = useState<Dog[]>([]);

  return (
    <AppDataContext.Provider
      value={{
        dogList,
        searching,
        breedList,
        favoriteList,
        setDogList,
        setSearching,
        setBreedList,
        updateFavoriteList,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
