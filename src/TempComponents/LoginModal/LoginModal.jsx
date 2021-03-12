import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import st from './LoginModal.module.scss'
export default function LoginModal({isOpen,disableModal}) {
    const [hasError, SetHasError] = useState(false)
    const onSubmitHandle=()=>{
        SetHasError(x=>!x)
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
               <div className={st.errorModal}>Error:<span>Number is not valid</span></div>
                <div onClick={disableModal} className={st.overlay}></div>
                <div style={modalStyle} className={st.box}>
                    <div className={st.modalHeader}>Ro'yxatdan o'tish</div>
                    <input type="text" className={st.error} data-error-msg="Error" placeholder="Email" required/>
                    <input type="text" placeholder="Parol" required/>
                    <button onClick={onSubmitHandle}> Ro'yxatdan o'tish</button>
                    <div className={st.helpLogin}>Siz registratsiyadan o’tmaganmisiz unda <p className={st.signUp}> Sign up</p></div>
                </div>
            </div> 
       </>
    )
}
