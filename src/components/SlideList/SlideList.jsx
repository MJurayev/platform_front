import React from 'react'
import st from './SlideList.module.scss'
import SlideItem from './SlideItem/SlideItem'
export default function SlideList() {
    return (    
        <div className={st.container}>
            <div className={st.col}>
            <SlideItem />
            </div>

            <div className={st.col}>
            <SlideItem />
            </div>
            <div className={st.col}>
            <SlideItem />
            </div>

            <div className={st.col}>
            <SlideItem />
            </div>

            <div className={st.col}>
            <SlideItem />
            </div>
            <div className={st.col}>
            <SlideItem />
            </div>
            {/* <Route path="/mundarija/posters" >POster</Route>               
                <Route path="/mundarija/slides" >Slide</Route>               
                <Route path="/mundarija/books" >Book</Route>   */}
        </div>
    )
}
