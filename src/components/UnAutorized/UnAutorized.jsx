import React from 'react'
import st from './UnAutorized.module.css'
export default function UnAutorized() {
    return (
        <div className={st.container}>
            <div className={st.box}>
                Siz tizimga kirmagansiz? Iltimos, Ro'yxatdan o'ting yoki Tizimga kiring!!!
            </div>
        </div>
    )
}
