import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { BOOKS_LOADING_START } from "../Actions/Books.action"
    const server= `http://3.141.203.196:8001`
    const initialState = {
        books:[],
        isLoading:false,
        error:""

    }

const startBooksLoading=(state)=>{
    const result = axios({
                            method:"GET",
                            url:`${server}/api/books`,
                            headers:{
                                'Content-type':'application/json',
                                'x-auth-token':localStorage.getItem('x-auth-token')
                            }
                        })
    console.log(result)

    const booksTemp = [
      {
        _id:'"6072dfe20123d1307816cc8d"',
        filename: "Python darslari_2_1618141154808.pdf",
        filepath: "uploads\\book\\Python darslari_2_1618141154808.pdf",
        imagepath: "uploads\\image\\Python darslari_IMG_20210410_143326_1618141154819.jpg",
        name: "Python darslari"
    },
    {
        _id:"6072e71d28a6061548b498f4",
        filename: "Python darslari_2_1618143003347.pdf",
        filepath: "uploads/book/Python darslari_2_1618143003347.pdf",
        imagepath: "uploads/image/Python darslari_IMG_20210410_143326_1618143004270.jpg",
        name: "Python darslari"
    }
    ]
    return {}
}
function bookReducer (state, action){
    switch(action.type){
        case BOOKS_LOADING_START : startBooksLoading(state);break;
        default:return state
    }
}



const Context = createContext()
export default function BooksProvider({children}) {
    const [books, dispatch] = useReducer(initialState, bookReducer)
    return (
        <Context.Provider value={{books, dispatch}} >
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

// export const useBooks=()=>{
//     const {books, dispatch} = useContext(Context)
//     return [books, dispatch]
// }