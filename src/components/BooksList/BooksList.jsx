import React from 'react'
import st from './BooksList.module.scss'
import BookItem from './BookItem/BookItem'
export default function BooksList() {
    return (    
        <div className={st.container}>
            <div className={st.col}>
            <BookItem />
            </div>

            <div className={st.col}>
            <BookItem />
            </div>
            <div className={st.col}>
            <BookItem />
            </div>

            <div className={st.col}>
            <BookItem />
            </div>

            <div className={st.col}>
            <BookItem />
            </div>
            <div className={st.col}>
            <BookItem />
            </div>
            {/* <Route path="/mundarija/posters" >POster</Route>               
                <Route path="/mundarija/slides" >Slide</Route>               
                <Route path="/mundarija/books" >Book</Route>   */}
        </div>
    )
}
