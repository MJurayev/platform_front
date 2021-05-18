import React from 'react'
import { Link } from 'react-router-dom'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import st from './Footer.module.scss'
import logo2 from '../../assets/img/LOGO2.png'

export default function Footer() {
    return (
    <div className={st.container}>
        <div className={st.footer1}>
            <div className={st.sitemap}>
                <div className={st.logo}><img src={logo2} /></div>
                
                <ul className={st.footerNavbar}>
                    <li><Link to="/home">Biz haqimizda</Link></li>
                    <li><Link to="/home">Bosh sahifa</Link></li>
                    <li><Link to="/home">Aloqa</Link></li>
                    <li><Link to="/home">Yordam</Link></li>
                    <li><Link to="/home">Xavfsizlik</Link></li>
                </ul>
                <div className={st.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
            </div>
            <div className={st.footer_section+" "+ st.centered}>
                <div className={st.heading}>Community</div>
                <div className={st.items}>
                    <div className={st.item}>For Talents</div>
                    <div className={st.item}>For Companies</div>
                    <div className={st.item}>For Talents</div>
                    <div className={st.item}>FAQ</div>

                </div>
            </div>
            <div className={st.footer_section+" "+ st.centered}>
                <div className={st.heading}>Community</div>
                <div className={st.items}>
                    <div className={st.item}>For Talents</div>
                    <div className={st.item}>For Companies</div>
                    <div className={st.item}>For Talents</div>
                    <div className={st.item}>FAQ</div>
                </div>
            </div>
            <div className={st.footer_section+ " "+ st.contact_section}>
                <div className={st.heading}>Aloqa</div>
                <div className={st.items}>
                    <div className={st.item}>Feel free to get in touch with us via phone or send us a message.</div>
                    <div className={st.phone+" "+st.item}>+99894-111-11-11</div>
                    <div className={st.email+" "+ st.item}>info@finity.com</div>
                </div>
            </div>
        </div>
        <div className={st.footer2}>
            <div className={st.copyright}>© 2021 Copyright</div>
            <div className={st.socialLinks}>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={telegram} alt=""/>
                </div>
        </div>
    </div>
    )
}
