import { createContext, useState } from "react";

export const ModeContext = createContext({
    mode: "",
    togglefunction: ()=>{}
})

export const ModecontextProvider = ({children}) =>{
    const  [mode ,setmode] = useState('light');

    const togglefunction =()=>{
        if(mode === 'light'){
        setmode("dark" )}
        else 
        {setmode ('light')}
    };

    return <ModeContext.Provider value={{mode,togglefunction}}>{children}</ModeContext.Provider>
}