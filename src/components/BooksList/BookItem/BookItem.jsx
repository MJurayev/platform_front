import React from 'react'
import st from './BookItem.module.scss'
import downloadIcon from "../../../assets/img/downloadIcon.png";
import showIcon from "../../../assets/img/watchIcon.png";
import book from "../../../assets/img/AboutHeaderImage.png"
    
export default function BookItem() {
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={book} alt=""/>
                <div className={st.slug}>Bizning platformamizga xush kelibsiz platformamizga </div>
                <div className={st.actions}>
                <button className={st.btn}>Yuklab olish <img src={downloadIcon} alt=""/></button>
                <div className={st.show}><img src={showIcon} alt=""/> </div>
                </div>
            </div>
        </div>
    )
}
