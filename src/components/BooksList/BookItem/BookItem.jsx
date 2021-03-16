import React from 'react'
import st from './BookItem.module.scss'
import downloadIcon from "../../../assets/img/downloadIcon.png";
import showIcon from "../../../assets/img/watchIcon.png";
import { useServer } from '../../../Contexts/ServerProvider';
    
export default function BookItem({bookInfo}) {
    const {server} = useServer()
    return (
        <div className={st.container}>
            <div className={st.box}>
                <img src={`${server}/api/books/image/${bookInfo._id}`} alt=""/>
                <div className={st.slug}>{bookInfo.name} </div>
                <div className={st.actions}>
                <a href={`${server}/api/books/${bookInfo._id}`} className={st.btn}>Yuklab olish <img src={downloadIcon} alt=""/></a>
                <a href={`${server}/api/books/open/${bookInfo._id}`} className={st.show}><img src={showIcon} alt=""/> </a>
                </div>
            </div>
        </div>
    )
}
