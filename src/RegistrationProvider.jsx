import { createContext, useContext, useEffect, useState } from "react"

const RegistrationContext = createContext(null);

export const useRegistration = () => useContext(RegistrationContext);



export const RegistrationProvider = ({children})=>{
    const [isRegistrationEnabled, setIsRegistrationEnabled] = useState(()=>{
        const saveState = localStorage.getItem("isRegistrationEnabled");
        return saveState ? JSON.parse(saveState) : true
    }
    )

    useEffect(()=>{
        const handleStorage = e =>{
            if(e.key === "isRegistrationEnabled"){
                setIsRegistrationEnabled(JSON.parse(e.newValue))
            }
        }
        window.addEventListener("storage", handleStorage)
        return ()=> window.removeEventListener("storage", handleStorage)
    }, [])

    const toggleRegistration = () =>{
        const newState = !isRegistrationEnabled;
        setIsRegistrationEnabled(newState);
        localStorage.setItem("isRegistrationEnabled", JSON.stringify(newState))
        window.dispatchEvent(new Event("storage"))
    
    }

    console.log("RegistrationProvider -isRegistrationEnabled", isRegistrationEnabled)   

    return(
        <RegistrationContext.Provider value={{isRegistrationEnabled, toggleRegistration}}>
            {children}
        </RegistrationContext.Provider>
    )

}