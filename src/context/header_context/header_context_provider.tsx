import React, { FC, RefObject, useRef, useState } from "react";

type IHeaderContext = {
  searchIsActive: boolean;
  setSearchIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchButtonRef: RefObject<HTMLButtonElement>;
  searchInputRef: RefObject<HTMLInputElement>;
  burgerIsActive: boolean;
  setBurgerIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  burgerButtonRef: RefObject<HTMLButtonElement>;
  burgerMenuRef: RefObject<HTMLUListElement>;
};

export const HeaderContext = React.createContext<IHeaderContext>(
  {} as IHeaderContext,
);

interface IHeaderContextProviderProps {
  children: React.ReactNode;
}

export const HeaderContextProvider: FC<IHeaderContextProviderProps> = ({
  children,
}) => {
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);

  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [burgerIsActive, setBurgerIsActive] = useState<boolean>(false);

  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const burgerMenuRef = useRef<HTMLUListElement>(null);

  return (
    <HeaderContext.Provider
      value={{
        searchIsActive: searchIsActive,
        setSearchIsActive: setSearchIsActive,
        searchButtonRef: searchButtonRef,
        searchInputRef: searchInputRef,
        burgerIsActive: burgerIsActive,
        setBurgerIsActive: setBurgerIsActive,
        burgerButtonRef: burgerButtonRef,
        burgerMenuRef: burgerMenuRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
