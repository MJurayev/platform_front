// import React, { useEffect } from 'react'
import st from './SlideItem.module.scss'
import downloadIcon from "../../../assets/img/downloadBook.png";
import showIcon from "../../../assets/img/watchIcon.png";
import { useServer } from '../../../Contexts/ServerProvider';
export default function SlideItem({info}) {
    const {server} = useServer()
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={`${server}/api/slide/image/${info._id}`} alt=""/>
                <div className={st.slug}>{info.name}</div>
                <div className={st.actions}>                
                    <a href="/" className={st.show}><img src={showIcon} alt=""/> </a>
                    <a href={`${server}/api/slide/${info._id}`} className={st.download}><img src={downloadIcon} alt=""/> </a>
                </div>
            </div>
        </div>
    )
}
