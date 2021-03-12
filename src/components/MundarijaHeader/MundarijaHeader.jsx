import React from 'react'
import { NavLink, Route, Router, Switch } from 'react-router-dom'
import st from './MundarijaHeader.module.scss'
export default function MundarijaHeader() {
    return (
        <div className={st.container}>
            <div className={st.heading}>Mundarija</div>
            
                <ul className={st.links}>
                    <li><NavLink activeClassName={st.active} to="/mundarija/posters">Plakatlar</NavLink></li>
                    <li><NavLink activeClassName={st.active}  to="/mundarija/slides">Slaydlar</NavLink></li>
                    <li><NavLink activeClassName={st.active}  to="/mundarija/books">Kitoblar</NavLink></li>
                </ul>      
        </div>
    )
}
