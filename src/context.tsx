import { createContext, useState } from "react";

import { Dog, Pagination } from "./types/models";

interface ContextType {
  dogList: Dog[];
  searching: boolean;
  breedList: string[];
  favoriteList: Dog[];
  currentSearch: string;
  pagination: Pagination;
  setDogList: (dogList: Dog[]) => void;
  setSearching: (searching: boolean) => void;
  setCurrentSearch: (search: string) => void;
  setBreedList: (breedList: string[]) => void;
  updateFavoriteList: (newList: Dog[]) => void;
  setPagination: (pagination: Pagination) => void;
}

const defaultPaginationData: Pagination = {
  total: 0,
  totalPage: 0,
  currentPage: 0,
};

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
  const [currentSearch, setCurrentSearch] = useState("");
  const [pagination, setPagination] = useState<Pagination>(
    defaultPaginationData
  );

  return (
    <AppDataContext.Provider
      value={{
        dogList,
        searching,
        breedList,
        pagination,
        favoriteList,
        currentSearch,
        setDogList,
        setSearching,
        setBreedList,
        setPagination,
        setCurrentSearch,
        updateFavoriteList,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
