import React from 'react'
import st from './WhyForUs.module.scss'
import advantageItem from '../../assets/img/advantageItem.png'
export default function WhyForUs() {
    return (
            <div className={st.container}>
                    <div className={st.title}>Nima uchun biz?</div>
                    <div className={st.advantages}>
                        <div className={st.adItem}>
                            <img className={st.first} src={advantageItem} alt=""/>
                            <div className={st.heading}>Bizning platformamizga </div>
                            <div className={st.text}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic el
                            </div>
                        </div>

                        <div className={st.adItem}>
                            <img src={advantageItem} alt=""/>
                            <div className={st.heading}>Bizning platformamizga </div>
                            <div className={st.text}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic el
                            </div>
                        </div>

                        <div className={st.adItem}>
                            <img className={st.third} src={advantageItem} alt=""/>
                            <div className={st.heading}>Bizning platformamizga </div>
                            <div className={st.text}>
                            Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a Lorem ipsum is common placeholder text used to demonstrate the graphic el
                            </div>
                        </div>
                    </div>
            </div>
    )
}
