import { createContext, useState } from "react";

export const addPlayerContext=createContext(0)

export default function AddPlayerContextProvider(prpos){
    const [players,setPlayers]=useState([])

    return <addPlayerContext.Provider value={{players,setPlayers}}>
        {prpos.children}
    </addPlayerContext.Provider>
}

