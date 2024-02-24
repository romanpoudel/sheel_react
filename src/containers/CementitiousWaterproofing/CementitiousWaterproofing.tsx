import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ListWithDescription from "@/components/elements/CustomLists/ListWithDescription"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const CementitiousWaterproofing = () => {
    return (
        <>

            <TitleBar title="Cementitious Waterproofing" />
            <ImageWithContentLeft
                imageUrl="../src/assets/dummy-img.jpg"
                title="Description"
                content="Cementitious waterproofing is a specialized technique that involves the application of cement-based coatings or admixtures to concrete surfaces. This process creates a waterproof barrier, preventing water penetration and safeguarding structures against the damaging effects of moisture, chemicals, and environmental factors. It is the most common method for waterproofing. Its main component is cement, sand, and liquid, some may spend extra to add acrylic addictive membrane to get better bonding and durability. It Is a semi-flexible waterproofing system that uses a mixture of cement and other materials to provide the waterproofing characteristics. It provides a good bonding to the structure to protect against water infiltration to seal against damp soil and seepage. This waterproofing membrane does not stretch since it is made of cement. This membrane usually requires 2-3layer of coating to enhance the waterproofing protection to the concrete surfaces. Cementitious waterproofing membrane is easy to apply with a trowel, brush, roller or even spray method. This method is often used in internal wet areas, it is a rigid, semi flexible type of waterproofing. Since it is commonly used in internal more often, it is not exposed to sunlight and weathering, thus it does not go through contract and expansion process. Cementitious waterproofing is a method used to protect structures from water penetration by applying a cement-based coating or material. It is commonly used in construction to make surfaces such as concrete walls, basements, and foundations impermeable to water."
            />

            <TitleWithContent title="Applications of Cementitious Waterproofing" >
                <Paragraph content="Cementitious waterproofing is commonly used in various construction applications, including:" />
                <CustomLists
                    items={[
                        [
                            "Basement walls and floors",
                            "Swimming pools",
                            "Roofs and terraces",
                        ],
                        [
                            "Water tanks",
                            "Bridge decks"
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="How Cementitious Waterproofing Works">
                <Paragraph content="Cementitious waterproofing works by creating a durable, water-resistant barrier on concrete surfaces, preventing the infiltration of water and protecting structures from the damaging effects of moisture. The process involves the use of cement-based coatings or admixtures, which work in various ways to enhance the waterproofing properties of the concrete. The process of cementitious waterproofing involves the application of a cement-based mixture that forms a waterproof barrier when cured. This mixture is often composed of Portland cement, sand, and chemical additives that enhance its waterproofing properties. The application can be done using brushes, trowels, or sprayers." />

                <ListWithDescription
                    titleLeft="Coatings and Sealants:"

                    contentLeft="Cementitious waterproofing coatings are applied directly to the surface of concrete. These coatings typically consist of a mixture of Portland cement, various additives, and polymers. When applied, the coating forms a protective layer that adheres to the concrete substrate, creating a seamless and waterproof surface."

                    titleRight="Integral Admixtures:"

                    contentRight="Integral waterproofing involves adding specialized admixtures directly into the concrete mix during the mixing process. These admixtures may include hydrophobic agents, crystalline compounds, or other waterproofing chemicals. As the concrete cures, these additives create a network of water-repelling compounds within the concrete matrix, enhancing its resistance to water penetration."
                />

                <ListWithDescription
                    titleLeft="Capillary Blocking:"

                    contentLeft="One key mechanism in cementitious waterproofing is the ability to block capillaries and pores within the concrete. Water can seep into concrete through capillaries and microscopic pores. The cementitious materials work to fill and seal these openings, preventing water molecules from passing through and ensuring a watertight barrier."

                    titleRight="Chemical Reaction:"

                    contentRight="Some cementitious waterproofing systems rely on chemical reactions to enhance waterproofing. For example, crystalline waterproofing agents react with moisture in the concrete to form insoluble crystals. These crystals fill voids and microcracks, creating an impermeable barrier that hinders water penetration over time."
                />
                <ListWithDescription
                    titleLeft="Flexible and Elastomeric Properties:"

                    contentLeft="Certain cementitious waterproofing products exhibit flexible and elastomeric properties. This flexibility allows the material to withstand minor movements in the structure without cracking or losing its waterproofing effectiveness. It is particularly important in areas prone to structural settling or thermal expansion and contraction."

                    titleRight="Resistance to Environmental Factors:"

                    contentRight="Cementitious waterproofing is designed to withstand various environmental factors, including UV exposure, temperature fluctuations, and chemical exposure. This resilience ensures that the waterproofing system remains effective over the long term, providing continuous protection against water damage."
                />
            </TitleWithContent>

            <TitleWithContent title="Different types of cementitious waterproof products">
                <ListWithDescription
                    titleLeft="Two-component polymer modified cementitious coating:"

                    contentLeft="It is a two-component modified acrylic polymer-based cementitious waterproofing coating system, which on mixing and hardening provides an excellent water-resistant barrier. It offers excellent resistance to both positive and negative pressures. It resists positive and negative pressure under 100m head in water retaining and below ground structures as well as roofs and decks."

                    titleRight="Cementitious Waterproofing Slurry:"

                    contentRight="It is a two-part and polymer modified cementitious waterproofing slurry to waterproof concrete and masonry. It comprises a liquid polymer and a cement base mix incorporating special additives."
                />

                <ListWithDescription
                    titleLeft="Rapid-Setting Hydraulic Cement:"

                    contentLeft="It is a rapid-setting hydraulic cement compound used to instantly stop running water or seepage in masonry or concrete. It is ready to use and requires only the addition of water before plugging and sealing active leaks."

                    titleRight="Cementitious Waterproof Plugging Compound:"

                    contentRight="It is a ready-mixed, rapid setting compound to stop water and moisture ingress. The product can be used internally or externally as a waterproof plugging mortar or where rapid setting and early strength gain is required."
                />
            </TitleWithContent>

            <TitleWithContent title="Advantages of Cementitious Waterproofing">
                <CustomLists
                    items={[
                        [
                            "Effective in preventing water infiltration",
                            "Durable and long-lasting",
                        ],
                        [
                            "Can be applied to both new and existing structures",
                            "Cost-effective compared to some other waterproofing methods",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Some of the drawbacks of Cementitious Waterproofing">
                <CustomLists
                    items={[
                        [
                            "Requires proper surface preparation for effective application",
                            "May not be suitable for very high water pressure situations",
                        ],
                        [
                            "Cracks in the substrate can compromise its effectiveness",
                        ]
                    ]}
                />
                <Paragraph content="In conclusion, Cementitious waterproofing stands as a reliable solution, providing robust protection against water damage in diverse construction scenarios." />
            </TitleWithContent>

        </>

    )
}

export default CementitiousWaterproofing