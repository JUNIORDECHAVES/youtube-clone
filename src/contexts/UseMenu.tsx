import React, { ReactNode, createContext, useState } from "react";

// 1. Definir o tipo do contexto
type MenuContextProps = {
    isOpenMenu: boolean;
    setIsOpenMenu: (value: boolean) => void;
}

const initialValue = {
    isOpenMenu: true,
    setIsOpenMenu: () => {}
}

// Criar o contexto com um valor inicial indefinido
export const MenuContext = createContext<MenuContextProps>(initialValue);

type useMenuProps = {
    children: ReactNode
}

export const UseMenuProvider = ({ children }: useMenuProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(initialValue.isOpenMenu)
    

    return (
        <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
            {children}
        </MenuContext.Provider>
    )

}