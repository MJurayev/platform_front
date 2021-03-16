import React from 'react'
import st from './PosterItem.module.scss'
import downloadIcon from "../../../assets/img/downloadIcon.png";
import { useServer } from '../../../Contexts/ServerProvider';
export default function PosterItem({poster}) {
    const {server} = useServer()
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={`${server}/api/poster/image/${poster._id}`} alt=""/>
                <div className={st.slug}>{poster.name}</div>
                <a href={`${server}/api/poster/${poster._id}`} className={st.btn}>Yuklab olish <img src={downloadIcon} alt=""/></a>
            </div>
        </div>
    )
}
