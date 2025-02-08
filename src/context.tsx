import { createContext, useState } from "react";

import { Dog } from "./types/models";

interface ContextType {
  dogList: Dog[];
  searching: boolean;
  setDogList: (dogList: Dog[]) => void;
  setSearching: (searching: boolean) => void;
}

export const AppDataContext = createContext<ContextType | undefined>(undefined);

export const AppDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [searching, setSearching] = useState(false);

  return (
    <AppDataContext.Provider
      value={{ dogList, searching, setDogList, setSearching }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
