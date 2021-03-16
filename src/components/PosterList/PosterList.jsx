import React, { useEffect, useState } from 'react'
import st from './PosterList.module.scss'
import PosterItem from './PosterItem/PosterItem'
import { useServer } from '../../Contexts/ServerProvider'
import axios from 'axios'
export default function PosterList() {
    const { server } = useServer()
    const [posters, setPosters] = useState([])
    const getPosters=()=>{
        axios.get(`${server}/api/poster`, {
            headers:{
                'Content-type':'application/json',
                'x-auth-token':localStorage.getItem('x-auth-token')
            }
        }).then((res)=>{
            setPosters(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getPosters()
    })
    return (    
        <div className={st.container}>
            {posters.map((item, key)=>{
                return (
                        <div key={key} className={st.col}>
                            <PosterItem poster={item} />
                        </div>
                    )
            })}
        </div>
    )
}
