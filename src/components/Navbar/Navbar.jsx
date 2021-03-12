import React, { useEffect, useState } from 'react'
import st from './Navbar.module.scss'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    document.querySelectorAll('.close_navbar').forEach(item=> {
        item.addEventListener('click', event => {
            setToggle(false)
        })
    })
    const onClickNavToggle=()=>{
        setToggle(x=>!x)
    }
    useEffect(()=>{
        
    })

    return (
        <>
            <div className={st.navbarTop}>
                <div className={st.socialLinks}>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={telegram} alt=""/>
                </div>
                <div className={st.authLinks}>
                    <Link className={st.signUp} to="/register" >Ro'yxatdan o'tish</Link>
                    <Link className={st.signIn} to="/login" >Kirish</Link>
                </div>
                <div  onClick={onClickNavToggle} className={(toggle ? st.closeToggle : '')+" "+st.toggle}>
                    <span></span>
                </div>
            </div>
            <div className={st.navbarSecond + " close_navbar "+ (!toggle ?  st.noneOverlay:'')}>
            
                <ul className={ (!toggle?  st.closeNavbar : '')+ " "+st.navbar}>
                    <div className={st.authLinks+" "+st.mobileAuth}>
                        <Link className={st.signUp+ " close_navbar"} to="/register" >Ro'yxatdan o'tish</Link>
                        <Link className={st.signIn+ " close_navbar"} to="/login" >Kirish</Link>
                    </div>
                    <li  className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/home' >Bosh sahifa</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/about' >Biz haqimizda</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/mundarija' >Mundarija</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/contact' >Aloqa</NavLink> </li>
                </ul>
            </div>
        </>
    )
}
