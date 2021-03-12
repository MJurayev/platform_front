import React from 'react'
import st from './OurGoal.module.scss'
import OurGoalImg from '../../assets/img/OurGoals.png'
export default function OurGoal() {
    return (
        <div className={st.container}>
            <img className={st.img} src={OurGoalImg} alt=""/>
            <div className={st.content}>
                <div className={st.heading}>Bizning maqsadimiz</div>
                <div className={st.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                </div>
            </div>
        </div>
    )
}
