import React from 'react'
import Divider from '../../components/DividerSection/Divider'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactsHeader from '../../components/ContactsHeader/ContactsHeader'
export default function Contacts() {
    return (
        <div>
            <ContactsHeader />
            <Divider />
            <ContactForm />
        </div>
    )
}
