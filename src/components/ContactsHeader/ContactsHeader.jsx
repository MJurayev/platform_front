import React from 'react'
import st from './ContactsHeader.module.scss'
import telegramBlack from '../../assets/img/telegramBlack.png'
import instagramBlack from '../../assets/img/instagramBlack.png'
import facebookBlack from '../../assets/img/facebookBlack.png'
import Call from '../../assets/img/Call.png'
import EmailIcon from '../../assets/img/EmailIcon.png'

import contactImage from '../../assets/img/contact.png'
export default function ContactsHeader() {
    return (
        <div className={st.container}>
            <img src={contactImage} alt=""/>
            <div className={st.info}>
                <div className={st.title}>Biz bilan bog'lanishingiz uchun ma'lumotlar</div>
                <div className={st.phone}><img src={Call} alt=""/> +99894333-33-33</div>
                <div className={st.email}><img src={EmailIcon} alt=""/>Amirooancb@gmail.comh</div>
                <div className={st.socialLinks}>
                    <img src={instagramBlack} alt=""/>
                    <img src={facebookBlack} alt=""/>
                    <img src={telegramBlack} alt=""/>
                </div>
            </div>
        </div>
    )
}
