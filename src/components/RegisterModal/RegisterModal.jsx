import React, { useRef, useState } from 'react'
import st from './RegisterModal.module.scss'
import {useServer} from '../../Contexts/ServerProvider'
import axios from 'axios'
import { useIsLoggedIn } from '../../Contexts/IsLoginProvider'
export default function RegisterModal({isOpen,disableModal}) {
    const {server} =useServer()
    const {setIsLoggedIn} = useIsLoggedIn()
    const [error, setError] = useState(false)
    const [isCreated, setIsCreated] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRef2 = useRef()

    const veryficationNumber = useRef()
    const validate = ()=>{
        if(passwordRef.current.value==='' || passwordRef2.current.value===''){
            setError('parol 8 ta belgidan ko\'proq bo\'lishi shart')
            return false
        }
        if(passwordRef.current.value!==passwordRef2.current.value) {
            setError('parollar bir xil emas')
            return false 
        }
        return true
    }
    const onSubmitHandle=()=>{
        if(validate()){
            const body = {
                login:nameRef.current.value,
                password:passwordRef.current.value,
                authType:'email',
                payload:emailRef.current.value
            }
            axios.post(`${server}/api/users`, body)
                .then((res)=>{
                    console.log(res)
                    setIsCreated(true)
                    setEmail(body.payload)
                    setPassword(body.password)
                    setError('')
                })
                .catch((err)=>{
                    console.log(err)
                    setError("Email yoki parol xato")
                })
            }
    }
    const veryfication=()=>{

        const body = {
            code:veryficationNumber.current.value,
            type:'email',
            payload:email
        }
        axios.post(`${server}/api/verification`,body)
        .then((res)=>{
            const bodyReq = {
                authType:'email',
                payload:email,
                password:password
            }
            axios.post(`${server}/api/auth`,bodyReq )
                .then((res)=>{
                    localStorage.setItem('x-auth-token', res.data._token)
                    setIsLoggedIn(false)
                    disableModal()
                })
                .catch((err)=>{
                    setError("Login yoki parol noto'g'ri")
                })
        }).catch((err)=>{
            setError('Tasdiqlash kodida xato!')
        })
        console.log(body)
    }
    const modalBoxStyle = {
        visibility:isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? 1:0,
        transition:"all .4s ease",
    }
const modalStyle = {
    transition:"all .5s ease-in-out",
    opacity:isOpen ? 1:0,
    transform:isOpen ? 'translateY(0)': 'translateY(100px)'
}
    return (
       <>
           <div style={ modalBoxStyle } className={st.container}>
               {error ? <div className={st.errorModal}>Error:<span>{error}</span></div> : ''}
                <div onClick={disableModal} className={st.overlay}></div>
                <div style={modalStyle} className={st.box}>
                    {!isCreated ?
                    (
                        <div style={{width:'100%'}}>
                            <div className={st.modalHeader}>Ro'yxatdan o'tish</div>
                            <input type="text" ref={nameRef}   placeholder="Ismingiz" required/>
                            <input type="email" ref={emailRef}  placeholder="Email" required/>
                            <input type="password" ref={passwordRef} placeholder="Parol..." required/>
                            <input type="password" ref={passwordRef2} placeholder="Parol tasdiqlang..." required/>
                            <button onClick={onSubmitHandle}> Ro'yxatdan o'tish</button>
                        </div>
                    ) :(
                        <div>
                            <div className={st.modalHeader}>Tasdiqlash</div>
                            <div>Biz sizning emailingizga tasdiqlash xabari jo'natdik</div>
                            <input type="number" ref={veryficationNumber} placeholder="Tasdiq kodi" required/>
                            <button onClick={veryfication}> Tasdiqlash</button> 
                        </div>
                    )}
                    
                </div>
            </div> 
       </>
    )
}
