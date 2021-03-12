import {useState} from 'react'
import headerImage from '../../assets/img/headerImage.png'
import ArrowRight from '../../assets/img/arrow_right.png'

import st from './Header.module.scss'
export default function Header() {
    return (
        <div className={st.container}>
            <div className={st.welcome}>
                <div className={st.title}>Bizning platformamizga xush kelibsiz</div>
                <div className={st.description}>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a </div>
                <button>Ko'proq <img src={ArrowRight} alt=""/></button>
            </div>
            <img src={headerImage} alt=""/>
        </div>
    )
}
