import React from 'react';
import st from './AboutHeader.module.scss'
import AboutHeaderImage  from '../../assets/img/AboutHeaderImage.png'
export default function AboutHeader() {
  return (
    <div className={st.container}   >
            <div className={st.content}>
                <div className={st.title}>
                 Bizning platformamizga xush kelibsiz 
                </div>
                <div className={st.description}>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of aLorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a      
                </div>
            </div>
            <img src={AboutHeaderImage} alt=""/>
    </div>
  );
}
