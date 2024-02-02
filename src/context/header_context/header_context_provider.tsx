import React, { FC, RefObject, useRef, useState } from "react";

type IHeaderContext = {
  searchIsActive: boolean;
  setSearchIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchInputRef: RefObject<HTMLInputElement>;
  burgerIsActive: boolean;
  setBurgerIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  burgerMenuRef: RefObject<HTMLUListElement>;
  userMenuIsActive: boolean;
  setUserMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  userMenuRef: RefObject<HTMLDivElement>;
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
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [burgerIsActive, setBurgerIsActive] = useState<boolean>(false);
  const burgerMenuRef = useRef<HTMLUListElement>(null);

  const [userMenuIsActive, setUserMenuIsActive] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  return (
    <HeaderContext.Provider
      value={{
        searchIsActive: searchIsActive,
        setSearchIsActive: setSearchIsActive,
        searchInputRef: searchInputRef,
        burgerIsActive: burgerIsActive,
        setBurgerIsActive: setBurgerIsActive,
        burgerMenuRef: burgerMenuRef,
        userMenuIsActive: userMenuIsActive,
        setUserMenuIsActive: setUserMenuIsActive,
        userMenuRef: userMenuRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
