import {  createContext, useContext, useState } from "react"


const Context = createContext()
 function ServerProvider({children}) {
    // const [server, setServer] = useState("http://node-platform.cleverapps.io")
    const [server, setServer] = useState("http://localhost:8080")
    return (
        <Context.Provider value={{server, setServer }}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useServer=()=>{
    const {server} = useContext(Context)
    return {server}
}
export {ServerProvider, useServer}