import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Divider from '../../components/DividerSection/Divider'
import Divider2 from '../../components/DividerSection2/Divider2'
import Header from '../../components/Header/Header'
import OurComforts from '../../components/OurComforts/OurComforts'
import OurGoal from '../../components/OurGoal/OurGoal'

export default function Home() {
    return (
        <>
            <Header />
            <Divider />
            <OurComforts />
            
            {/* <OurPartners /> */}
            {/* <div className={st.margin}></div> */}

            <Divider2 />
            
            <OurGoal />
            <ContactForm />
        </>
    )
}
