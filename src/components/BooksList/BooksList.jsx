import {useState, useEffect} from 'react'
import st from './BooksList.module.scss'
import BookItem from './BookItem/BookItem'
import { useServer } from '../../Contexts/ServerProvider'
import axios from 'axios'
export default function BooksList() {
    const { server } = useServer()
    const [books, setBooks] = useState([])
    const getBooks=()=>{
        axios.get(`${server}/api/books`, {
            headers:{
                'Content-type':'application/json',
                'x-auth-token':localStorage.getItem('x-auth-token')
            }
        }).then((res)=>{
            setBooks(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getBooks()
    },[])
    return (    
        <div className={st.container}>
           {books.map((book, key)=>{
               return (
                <div key={key} className={st.col}>
                <BookItem bookInfo={book} />
                </div>
               )
           }) }
        </div>
    )
}
