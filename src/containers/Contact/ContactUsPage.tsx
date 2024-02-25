import React from 'react'
import Contact from './Contact'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleBarMin from '@/components/elements/TitleBar/TitleBarMin'

const ContactUsPage = () => {
    return (
        <>
            <TitleBarMin title='Contact Us' />
            <Contact />
        </>
    )
}

export default ContactUsPage