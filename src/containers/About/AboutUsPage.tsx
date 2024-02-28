import TitleBarMin from "@/components/elements/TitleBar/TitleBarMin"
import About from "./About"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"
import Paragraph from "@/components/elements/Paragraph/Paragraph"

const AboutUsPage = () => {
    return (
        <>
            {/* <TitleBarMin title="About Us" /> */}
            <div className='mb-4'>
                {/* For the gap below nav */}
                <p>For the gap below nav</p>
            </div>

            <About />

            <TitleWithContent title="We Provide Best Services">
                <Paragraph content="At Sheel Waterproofing, we are dedicated to providing exceptional waterproofing services for homes and businesses alike. With our expertise and commitment to quality, we ensure that your property remains protected from water damage and its detrimental effects. Water intrusion can wreak havoc on your property, leading to costly repairs, mold growth, and structural instability. That's why our experienced team of professionals is here to offer comprehensive waterproofing solutions tailored to your specific needs. With years of industry knowledge and state-of-the-art techniques, we specialize in basement waterproofing, foundation repair, and exterior waterproofing. No matter the size or complexity of the project, we have the expertise to deliver outstanding results that stand the test of time." />

                <br />

                <Paragraph content=" At Sheel Waterproofing, we are dedicated to providing exceptional waterproofing services for homes and businesses alike. With our expertise and commitment to quality, we ensure that your property remains protected from water damage and its detrimental effects. Water intrusion can wreak havoc on your property, leading to costly repairs, mold growth, and structural instability. That's why our experienced team of professionals is here to offer comprehensive waterproofing solutions tailored to your specific needs. With years of industry knowledge and state-of-the-art techniques, we specialize in basement waterproofing, foundation repair, and exterior waterproofing. No matter the size or complexity of the project, we have the expertise to deliver outstanding results that stand the test of time." />

                <br />

                <Paragraph content="At Sheel Waterproofing, we pride ourselves on our customer-centric approach. We understand that each property is unique, and we take the time to assess your specific requirements before recommending the most effective waterproofing solution. Our dedicated team is always ready to answer your questions, address your concerns, and guide you through every step of the process. We prioritize the use of high-quality materials and the latest industry advancements to ensure optimal performance and durability. Our goal is to provide you with peace of mind, knowing that your property is shielded from water damage, even in the most challenging conditions." />

                <br />

                <Paragraph content="When you choose Sheel Waterproofing, you are choosing a partner that is committed to your satisfaction. We strive to exceed your expectations, delivering exceptional results within budget and on schedule. Explore our range of services, learn more about our successful projects, and contact us today for a complimentary consultation. Let Sheel Waterproofing be your reliable choice for all your waterproofing needs. Protect your investment with confidence - choose Sheel Waterproofing as your trusted waterproofing solution provider." />
            </TitleWithContent>

        </>
    )
}

export default AboutUsPage