import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Divider from '../../components/DividerSection/Divider'
import Divider2 from '../../components/DividerSection2/Divider2'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import OurComforts from '../../components/OurComforts/OurComforts'
import OurGoal from '../../components/OurGoal/OurGoal'
import OurPartners from '../../components/OurPartners/OurPartners'
import st from './Home.module.scss'
export default function Home() {
    return (
        <>
            <Navbar/>
            <Header />
            <Divider />
            <OurComforts />
            
            {/* <OurPartners /> */}
            {/* <div className={st.margin}></div> */}

            <Divider2 />
            
            <OurGoal />
            <ContactForm />
            <Footer />
        </>
    )
}
