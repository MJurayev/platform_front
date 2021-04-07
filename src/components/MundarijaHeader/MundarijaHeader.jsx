import React from 'react'
import { NavLink } from 'react-router-dom'
import { useIsLoggedIn } from '../../Contexts/IsLoginProvider'
import UnAutorized from '../UnAutorized/UnAutorized'
import st from './MundarijaHeader.module.scss'
export default function MundarijaHeader() {
    const {isLoggedIn} = useIsLoggedIn()
    return (
        <div className={st.container}>
            <div className={st.heading}>Mundarija</div>
            
                {isLoggedIn ? <ul className={st.links}>
                    <li><NavLink activeClassName={st.active} to="/mundarija/posters">Plakatlar</NavLink></li>
                    <li><NavLink activeClassName={st.active}  to="/mundarija/slides">Slaydlar</NavLink></li>
                    <li><NavLink activeClassName={st.active}  to="/mundarija/books">Kitoblar</NavLink></li>
                    <li><NavLink activeClassName={st.active}  to="/mundarija/tests">Testlar</NavLink></li>
                </ul> : <UnAutorized />}     
        </div>
    )
}
