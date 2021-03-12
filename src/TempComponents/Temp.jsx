import React, { useEffect, useState } from 'react'
import LoginModal from './LoginModal/LoginModal'

export default function Temp() {
    const [loginIsOpen,setLoginIsOpen ] = useState(false)
    useEffect(()=>{
        setLoginIsOpen(true)
    }, [])    
    const disableModal=()=>{
        setLoginIsOpen(false)
    }
    return (
        <div >
            <button onClick={()=>{setLoginIsOpen(x=>!x)}}>Login Oynasi</button>

            <div >
                <LoginModal disableModal={disableModal} isOpen={loginIsOpen} />

            </div>
        </div>
    )
}
