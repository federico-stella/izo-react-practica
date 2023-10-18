import React from "react";
import { useState } from "react";
import { MenuContext } from "./menuContext";

const MenuContextProvider = ({children}) =>{
    const [practiceSelected, setPracticeSelected] = useState('Practica 1');

    const setPracticeFromChild = (hash) => {
        setPracticeSelected(hash)
    }

    return (
        <MenuContext.Provider value={{practiceSelected, setPracticeFromChild}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider