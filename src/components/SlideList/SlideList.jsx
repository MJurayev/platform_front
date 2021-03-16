import React, { useState , useEffect} from 'react'
import st from './SlideList.module.scss'
import SlideItem from './SlideItem/SlideItem'
import axios from 'axios'
import { useServer } from '../../Contexts/ServerProvider'
export default function SlideList() {
    const [slides, setSlides] = useState()
    const {server} = useServer()
    const getSlides=()=>{
        axios.get(`${server}/api/slide`, {
            headers:{
                'Content-type':'application/json',
                'x-auth-token':localStorage.getItem('x-auth-token')
            }
        }).then((res)=>{
            setSlides(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getSlides()

        console.log(slides)
    })
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
