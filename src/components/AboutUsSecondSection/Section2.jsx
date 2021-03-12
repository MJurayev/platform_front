import React from 'react'
import st from './Second2.module.scss'
import Section2Image from '../../assets/img/Section2Image.png'
export default function Section2() {
    return (
        <div className={st.container}>
                <img src={Section2Image} alt=""/>
                <div className={st.content}>
                    <div className={st.topTitle}>
                        Biz haqimizda
                    </div>
                    <div className={st.title}>
                        Bizning platformamizga xush kelibsiz Bizning platformamizga xush kelibsiz Bizning platforma   
                    </div>
                    <div className={st.description}>
                        Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholdeLorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholdeLorem ipsum is common placeholder text used to demonstrate th
                    </div>
                </div> 
        </div>
    )
}
