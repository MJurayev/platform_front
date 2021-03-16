import React, { useRef, useState } from 'react'
import st from './LoginModal.module.scss'
import axios from 'axios'
import { useServer } from '../../Contexts/ServerProvider'
import { useIsLoggedIn } from '../../Contexts/IsLoginProvider'
export default function LoginModal({isOpen,disableModal}) {
    const {setIsLoggedIn} = useIsLoggedIn()
    const [errors, setErrors] = useState()
    const {server} = useServer()
    const emailRef = useRef()
    const passwordRef = useRef()


    const onSubmitHandle=(e)=>{
        const bodyReq = {
            authType:'email',
            payload:emailRef.current.value,
            password:passwordRef.current.value
        }
        axios.post(`${server}/api/auth`,bodyReq )
            .then((res)=>{
                localStorage.setItem('x-auth-token', res.data._token)
                setIsLoggedIn(false)
                disableModal()
            })
            .catch((err)=>{
                setErrors("Login yoki parol noto'g'ri")
            })
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
               {errors ? <div className={st.errorBox}>
                <div className={st.errorModal}>Error:<span>{errors}</span> </div>
               </div> : ''}
                <div onClick={disableModal} className={st.overlay}></div>
                <div style={modalStyle} className={st.box}>
                    <div className={st.modalHeader}>Kirish</div>
                    <input ref={emailRef} type="text" placeholder="Email" required/>
                    <input ref={passwordRef} type="text" placeholder="Parol" required/>
                    <button onClick={onSubmitHandle}>Kirish</button>
                    {/* <div className={st.helpLogin}>Siz registratsiyadan o’tmaganmisiz unda <p className={st.signUp}> Sign up</p></div> */}
                </div>
            </div> 
       </>
    )   
}
