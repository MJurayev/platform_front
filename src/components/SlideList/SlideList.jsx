import React, { useState , useEffect} from 'react'
import st from './SlideList.module.scss'
import SlideItem from './SlideItem/SlideItem'
import axios from 'axios'
import { useServer } from '../../Contexts/ServerProvider'
export default function SlideList() {
    const [slides, setSlides] = useState([])
    const { server } = useServer()
    async function getSlides(){
        await axios.get(`${server}/api/slide`, {
            headers:{
                'Content-type':'application/json',
                'x-auth-token':localStorage.getItem('x-auth-token')
            }
        }).then((res)=>{
            setSlides(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        console.log('updateing')
    }
    
    useEffect(()=>{
        getSlides()
    }, [])
    return (
        <div className={st.container}>
            {slides.map((item, key)=>{
                return <div key={key}  className={st.col}>
                        <SlideItem info={item} />
                    </div>
                })
            }
        </div>
    )
}
