import { createContext, useState } from "react";

import { Dog } from "./types/models";

interface ContextType {
  dogList: Dog[];
  setDogList: (dogList: Dog[]) => void;
}

export const DogListContext = createContext<ContextType | undefined>(undefined);

export const DogListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dogList, setDogList] = useState<Dog[]>([]);

  return (
    <DogListContext.Provider value={{ dogList, setDogList }}>
      {children}
    </DogListContext.Provider>
  );
};
