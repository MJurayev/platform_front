import React from 'react'
import AboutHeader from '../../components/AboutHeader/AboutHeader'
import Section2 from '../../components/AboutUsSecondSection/Section2'
import ContactsHeader from '../../components/ContactsHeader/ContactsHeader'
import Divider from '../../components/DividerSection/Divider'
import WhyForUs from '../../components/WhyForUs/WhyForUs'
import st from './AboutUs.module.scss'
export default function AboutUs() {
    return (
        <div className={st.container}>
            <AboutHeader />
            <Divider />
            <Section2 />
            <Divider />
            <WhyForUs />
            <ContactsHeader/>
        </div>
    )
}
