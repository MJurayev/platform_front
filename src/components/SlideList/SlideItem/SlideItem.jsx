import React from 'react'
import st from './SlideItem.module.scss'
import downloadIcon from "../../../assets/img/downloadBook.png";
import showIcon from "../../../assets/img/watchIcon.png";
import poster from "../../../assets/img/AboutHeaderImage.png"
export default function SlideItem() {
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={poster} alt=""/>
                <div className={st.slug}>Bizning platformamizga xush kelibsiz platformamizga </div>
                <div className={st.actions}>                
                    <div className={st.show}><img src={showIcon} alt=""/> </div>
                    <div className={st.download}><img src={downloadIcon} alt=""/> </div>
                </div>
            </div>
        </div>
    )
}
