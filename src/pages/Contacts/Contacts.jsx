import React from 'react'
import Divider from '../../components/DividerSection/Divider'
import ContactForm from '../../components/ContactForm/ContactForm'
import st from './Contacts.module.scss'
import ContactsHeader from '../../components/ContactsHeader/ContactsHeader'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
export default function Contacts() {
    return (
        <div>
            <Navbar />
            <ContactsHeader />
            <Divider />
            <ContactForm />
            <Footer />
        </div>
    )
}
