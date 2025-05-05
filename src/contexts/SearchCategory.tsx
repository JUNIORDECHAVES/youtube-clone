import { createContext, useContext, useState } from "react";

type SelectedCategoryContextProps = {
    selectdCategory: string;
    setSelectdCategory: (id: string) => void;
};

type SelectdCategoryProviderProps = {
    children: React.ReactNode;
};

export const SelectdCategoryContext = createContext({} as SelectedCategoryContextProps);

export const SelectdCategoryProvider = ({ children }: SelectdCategoryProviderProps) => {
    const [selectdCategory, setSelectdCategory] = useState("0");

    return (
        <SelectdCategoryContext.Provider value={{ selectdCategory, setSelectdCategory }}>
            {children}
        </SelectdCategoryContext.Provider>
    );
}

export default function useSelectedCategory() {
    return useContext(SelectdCategoryContext);
}