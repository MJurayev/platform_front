import React from 'react';
import st from './Divider.module.scss'
import img from '../../assets/img/divider.png'
export default function Divider() {
  return (
    <>
        
        <div className={st.container}>
        <img className={st.d1} src={img} alt=""/>
        <img className={st.d2} src={img} alt=""/>
        <img className={st.d3} src={img} alt=""/>
        </div>

    </>
  );
}
