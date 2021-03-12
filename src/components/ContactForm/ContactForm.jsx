import React from 'react'
import st from './ContactForm.module.scss'

import userIcon from '../../assets/img/userIcon.png'
import Call from '../../assets/img/Call.png'
import EmailIcon from '../../assets/img/EmailIcon.png'
const submitFormHandle=(e)=>{
    e.preventDefault();
}
export default function ContactForm() {
    return (
        <div className={st.container}>
            <div className={st.containerForm}>
                    <div className={st.mainLabel}>Biz bilan bog’laning</div>
                    <form action="">
                        <div className={st.containerFormInner}>
                            <div className={st.forms}>
                                <div className={st.left}>
                                    <div className={st.input}>
                                        <label><img src={userIcon} alt=""/>Ism</label>
                                        <input type="text"/>
                                    </div>
                                    <div className={st.input}>
                                        <label><img src={EmailIcon} alt=""/>Email</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className={st.right}>
                                <div className={st.input}>
                                        <label><img src={userIcon} alt=""/>Familiya</label>
                                        <input type="text"/>
                                    </div>
                                    <div className={st.input}>
                                        <label><img src={Call} alt=""/>Phone</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className={st.button}>
                                    <button onClick={submitFormHandle}>Jo'natish</button>
                                </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}
