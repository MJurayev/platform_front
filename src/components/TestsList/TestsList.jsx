import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useServer } from '../../Contexts/ServerProvider'
import TestItem from './TestItem/TestItem'
import st from './TestsList.module.scss'
export default function TestsList() {
    const [tests, setTests] = useState([])
    const { server } = useServer()
    const getTests=()=>{
        axios.get(`${server}/api/quiz`,
            {
                headers: {
                'x-auth-token':localStorage.getItem('x-auth-token')
                }
            }
        )
        .then(res=>setTests(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getTests()
    })

    return (
        <div className={st.container}>
            <div className={st.title}>Testlar</div>
            <div className={st.containerTests}>
                {
                    tests.map((x, key)=>{
                        return <Link key={key} to={`/quiz/${x._id}`}><TestItem key={key} test={x}/></Link>
                    })
                }
                
            </div>
        </div>
    )
}
