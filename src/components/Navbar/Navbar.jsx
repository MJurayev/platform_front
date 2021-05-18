import { useEffect, useState } from 'react'
import st from './Navbar.module.scss'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import logo from '../../assets/img/LOGO.png'
import logo2 from '../../assets/img/LOGO2.png'
import { Link, NavLink } from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import { useIsLoggedIn } from '../../Contexts/IsLoginProvider'
export default function Navbar() {
    const {isLoggedIn, setIsLoggedIn} =useIsLoggedIn()
    const [toggle, setToggle] = useState(false)
    document.querySelectorAll('.close_navbar').forEach(item=> {
        item.addEventListener('click', event => {
            setToggle(false)
        })
    })
    const onClickNavToggle=()=>{
        setToggle(x=>!x)
    }
    const [loginIsOpen,setLoginIsOpen ] = useState(false)
    const [RegisterIsOpen, setRegisterIsOpen] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('x-auth-token')){
            setIsLoggedIn(true)

        }else{
            setIsLoggedIn(false)
        }
    })
    useEffect(()=>{
        setLoginIsOpen(false)
        
        setRegisterIsOpen(false)
    }, [])
    const disableLoginModal=()=>setLoginIsOpen(false)
    const disableRegisterModal=()=>setRegisterIsOpen(false)

    return (
        <>
            <div className={st.navbarTop}>
            <div className={`${st.logo} ${st.logoMobile}` }><img style={{height:'100%'}} src={logo2} /></div>
                <LoginModal disableModal={disableLoginModal} isOpen={loginIsOpen}/>
                <RegisterModal disableModal={disableRegisterModal} isOpen={RegisterIsOpen} />
                <div className={st.socialLinks}>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={telegram} alt=""/>
                </div>
               {!isLoggedIn ? <div className={st.authLinks}>
                    <Link className={st.signUp} onClick={()=>{setRegisterIsOpen(true)}} to="#" >Ro'yxatdan o'tish</Link>
                    <Link className={st.signIn} onClick={()=>{setLoginIsOpen(true)}} to="#" >Kirish</Link>
                </div> :"Foydalanuvchi"}
                <div  onClick={onClickNavToggle} className={(toggle ? st.closeToggle : '')+" "+st.toggle}>
                    <span></span>
                </div>
            </div>
            <div className={st.navbarSecond + " close_navbar "+ (!toggle ?  st.noneOverlay:'')}>
                <div className={st.logo}><img style={{height:'100%'}} src={logo} /></div>
                <ul className={ (!toggle?  st.closeNavbar : '')+ " "+st.navbar}>
                    {!isLoggedIn ? <div className={st.authLinks+" "+st.mobileAuth}>
                        <Link className={st.signUp+ " close_navbar"} onClick={()=>{setRegisterIsOpen(true)}}  to="#" >Ro'yxatdan o'tish</Link>
                        <Link className={st.signIn+ " close_navbar"} onClick={()=>{setLoginIsOpen(true)}} to="#" >Kirish</Link>
                    </div> :"s" }

                    <li  className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/home' >Bosh sahifa</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/about' >Biz haqimizda</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/mundarija' >Mundarija</NavLink> </li>
                    <li className={st.navlink+ " close_navbar"}> <NavLink activeClassName={st.active} to='/contact' >Aloqa</NavLink> </li>
                </ul>
            </div>
        </>
    )
}
