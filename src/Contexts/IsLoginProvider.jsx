import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext()
export default function IsLoginProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    useEffect(()=>{
    }, [isLoggedIn])
    return (
        <Context.Provider value={{isLoggedIn, setIsLoggedIn}}>
            <Context.Consumer>
                {()=>children}
            </Context.Consumer>
        </Context.Provider>            
    )
}


const useIsLoggedIn =()=>{
    const {isLoggedIn, setIsLoggedIn} = useContext(Context)
    return {isLoggedIn, setIsLoggedIn}
}

export {
    useIsLoggedIn
}