import React from 'react'
import Contact from './Contact'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleBarMin from '@/components/elements/TitleBar/TitleBarMin'
import CompanyInfo from './CompanyInfo'
import ImageWithContentRight from '@/components/elements/ImageWithContent/ImageWithContentRight'

const ContactUsPage = () => {
    return (
        <>

              {/* <TitleBarMin title="Contact Us"></TitleBarMin> */}


            <div className='mb-4'>
                {/* For the gap below nav */}
                <p>For the gap below nav</p> 
            </div>
            <Contact />
            <CompanyInfo/>
            <ImageWithContentRight
            title=''
            imageUrl='/image/dummy-image.jpg'
            content=''
            />
        </>
    )
}

export default ContactUsPage