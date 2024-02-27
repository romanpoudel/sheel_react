import React from 'react'
import Contact from './Contact'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleBarMin from '@/components/elements/TitleBar/TitleBarMin'

const ContactUsPage = () => {
    return (
        <>

              {/* <TitleBarMin title="Contact Us"></TitleBarMin> */}


            <div className='mb-4'>
                {/* For the gap below nav */}
                <p>For the gap below nav</p> 
            </div>
            <Contact />
        </>
    )
}

export default ContactUsPage