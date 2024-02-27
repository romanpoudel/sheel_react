import ListWithDescription from '@/components/elements/CustomLists/ListWithDescription'
import ImageWithContentLeft from '@/components/elements/ImageWithContent/ImageWithContentLeft'
import Paragraph from '@/components/elements/Paragraph/Paragraph'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent'

const LiquidWaterproofingMembrane = () => {
    return (
        <>

            <TitleBar title='Liquid Waterproofing Membrane' 
            linkTitle="Services"
            linkTo="/services"/>

            <ImageWithContentLeft
                imageUrl='/images/dummy-img.jpg'
                title='Description'
                content="Liquid-applied membrane (LAM) is a monolithic, fully-bonded, liquid-based coating suitable for many waterproofing and roofing applications. The coating cures to form a rubber-like elastomeric waterproof membrane and may be applied over many substrates, including asphalt, bitumen and concrete."
            />

            <TitleWithContent title='Applications of Liquid Waterproofing Membrane'>

                <ListWithDescription
                    items={[
                        {
                            title: "Flat Roofs:",
                            content: ["Ideal for flat roofs to create a continuous and seamless waterproofing layer, preventing water seepage."]
                        },
                        {
                            title: "Basements:",
                            content: ["Applied to basement walls and floors to create a waterproof barrier, preventing moisture infiltration."]
                        },
                        {
                            title: "Balconies and Terraces:",
                            content: ["Provides a durable waterproof coating for balconies and terraces, safeguarding against weathering and moisture."]
                        },
                        {
                            title: "Wet Areas:",
                            content: ["Suitable for wet areas like bathrooms and kitchens, forming a seamless waterproofing layer around fixtures and surfaces."]
                        },
                        {
                            title: "Podiums and Decks:",
                            content: ["Ensures reliable waterproofing for podiums and decks, protecting underlying structures from water damage."]
                        },
                        {
                            title: "Concrete Structures:",
                            content: ["Used on various concrete structures, including bridges and retaining walls, to enhance water resistance."]
                        }
                    ]}
                />













            </TitleWithContent>

            <TitleWithContent title='How Liquid Waterproofing Works?'>
                <Paragraph content='Understanding the process of applying liquid waterproofing membranes can provide insights into their effectiveness. Let’s explore the key steps:' />
                <ListWithDescription
                    items={[
                        {
                            title: "Surface Preparation",
                            content: [
                                "Before applying the liquid membrane, the surface needs to be properly prepared. This typically involves cleaning the area to remove dirt, debris, and any loose or damaged material. Any cracks or defects should be repaired, ensuring a smooth and stable base for the membrane."
                            ]
                        },
                        {
                            title: "Curing and Drying Time",
                            content: [
                                "After application, the liquid membrane requires a specific curing and drying time. This allows the membrane to bond and form a solid, impermeable layer. The duration can vary depending on the product, ambient conditions, and thickness of the applied membrane. Following the manufacturer’s instructions regarding curing and drying times is crucial for optimal results."
                            ]
                        },
                        {
                            title: "Application Process",
                            content: [
                                "Depending on the product and surface requirements, the liquid waterproofing membrane is applied using various methods such as brushing, spraying, or roller application. Multiple coats may be needed to achieve the desired thickness and ensure complete coverage. Careful attention is given to corners, edges, and details to ensure a watertight seal."
                            ]
                        }
                    ]}
                />


            </TitleWithContent>

            <TitleWithContent title='Common Types of Liquid Waterproofing Membrane:'>
                <ListWithDescription
                    items={[
                        {
                            title: "Polyurethane-Based:",
                            content: [
                                "Offers excellent flexibility and durability, suitable for various applications."
                            ]
                        },
                        {
                            title: "Bitumen-Modified:",
                            content: [
                                "Combines the waterproofing properties of bitumen with the flexibility of polymers."
                            ]
                        },
                        {
                            title: "Acrylic-Based:",
                            content: [
                                "Provides UV resistance and is often used for exposed applications."
                            ]
                        },
                        {
                            title: "Silicone-Based:",
                            content: [
                                "Known for high elasticity and resistance to extreme temperatures."
                            ]
                        }
                    ]}
                />


            </TitleWithContent>
            <TitleWithContent
                title='Maintenance and Longevity'>
                <Paragraph content='Proper maintenance is vital for assuring the longevity and effectiveness of liquid waterproofing membranes. Regular inspections should be carried out to identify any signs of damage or wear. Prompt repairs should be conducted to address any issues and maintain the integrity of the waterproofing system. Additionally, following the manufacturer’s guidelines for maintenance and cleaning will help prolong the lifespan of the liquid membrane.' />

            </TitleWithContent>
            <TitleWithContent
                title='Conclusion'>
                <Paragraph content='Liquid waterproofing membranes provide an effective and versatile solution for protecting structures from water damage. Their seamless application, superior protection, and cost-effectiveness offer numerous advantages over traditional waterproofing methods. From roofs and terraces to basements and bathrooms, liquid membranes find applications in various areas where reliable water protection is required. The longevity and effectiveness of liquid waterproofing membranes can be maximised by understanding the process involved in their application and ensuring proper maintenance.' />

            </TitleWithContent>
        </>

    )
}

export default LiquidWaterproofingMembrane