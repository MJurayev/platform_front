import React from 'react'
import st from './OurGoal.module.scss'
import OurGoalImg from '../../assets/img/OurGoals.jpg'
// import OurGoalImg from '../../assets/img/OurGoals.png'
export default function OurGoal() {
    return (
        <div className={st.container}>
            <img className={st.img} src={OurGoalImg} alt=""/>
            <div className={st.content}>
                <div className={st.heading}>Bizning maqsadimiz</div>
                <div className={st.description}>
                Loyiha doirasida jismoniy tarbiya va sport sohasi rivojlanishini baholash uslubiyoti asosida uning muammolarini va kelajakdagi maqsadli strategiyalari oʼrganiladi hamda unga asosan jismoniy tarbiya va sportga boʼlgan talabni qondirishning iqtisodiy andozasi ishlab chiqiladi.
Mazkur loyiha doiraida Jahon bozorida raqobatdoshlikni taʼminlash uchun jismoniy tarbiya va sportni rivojlantirish boʼyicha sport marketingining maqsadli strategik kontseptsiyasi loyixasi ishlab chiqiladi hamda unga koʼra professional sportning moliyaviy mustaqilligini taʼminlash va tegishli shart-sharoitlar yaratishga qaratilgan yangicha model shakllantiriladi.
Ushbu loyiha jarayonida oʼrganilgan, olingan natijalar asosida “Jismoniy tarbiya va sport marketingi” oʼquv qoʼllanmasining elektron platformasi yaratiladi.
                </div>
            </div>
        </div>
    )
}
