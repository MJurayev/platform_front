import React from 'react'
import st from './PosterList.module.scss'
import PosterItem from './PosterItem/PosterItem'
export default function PosterList() {
    return (    
        <div className={st.container}>
            <div className={st.col}>
            <PosterItem />
            </div>

            <div className={st.col}>
            <PosterItem />
            </div>
            <div className={st.col}>
            <PosterItem />
            </div>

            <div className={st.col}>
            <PosterItem />
            </div>

            <div className={st.col}>
            <PosterItem />
            </div>
            <div className={st.col}>
            <PosterItem />
            </div>
            {/* <Route path="/mundarija/posters" >POster</Route>               
                <Route path="/mundarija/slides" >Slide</Route>               
                <Route path="/mundarija/books" >Book</Route>   */}
        </div>
    )
}
