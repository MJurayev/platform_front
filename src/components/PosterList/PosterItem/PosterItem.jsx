import React from 'react'
import st from './PosterItem.module.scss'
import downloadIcon from "../../../assets/img/downloadIcon.png";
import poster from "../../../assets/img/AboutHeaderImage.png"
export default function PosterItem() {
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={poster} alt=""/>
                <div className={st.slug}>Bizning platformamizga xush kelibsiz platformamizga </div>
                <button className={st.btn}>Yuklab olish <img src={downloadIcon} alt=""/></button>
            </div>
        </div>
    )
}
