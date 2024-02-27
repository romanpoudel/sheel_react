import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaIwa = () => {
    return (
        <>
            <TitleBar 
            title="Vista IWA" 
            subTitle="(SHOTCRETE ACCELERATOR-ALKALI FREE)" 
            linkTitle="Products"
            linkTo="/products"
            />

            <ImageWithContentLeft
                imageUrl="/images/dummy-img.jpg"
                title="Description"
                content="Vista - IWA Dr. Vista 108 IWA is a unique multipurpose advanced technology Integral Waterproofing compound. Dr. Vista 108 IWA+ is made from specially formulated cement friendly surface active agents, corrosion inhibit additive and polymers.It is used as an additive for cement concrete, mortar & plasters while constructing the building. The presence of this integral compound resists and reverses the normal tendency of hardened concrete to absorb water by capillary action and makes the concrete totally sealed against penetration of water."
            />

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Corrosion resistant",
                            "Compatible wiht all varieties of protaland cement",
                            "Minimise rebound loss",
                            "Improves workability of fresh concrete",
                        ],
                        [
                            "Water repellent concrete",
                            "Prevents/reduce sweating, efflorescence saltpetre action",
                            "Arrest shrinkage, better finish",
                            "Very economical, required at very lesser dosage",
                        ]
                    ]}
                />

            </TitleWithContent>

            <TitleWithContent title="Area of Application">
                < Paragraph content="Dr. Vista 108 IWA+ is recommended for use in Structural Concrete, particularly in:" />

                <CustomLists
                    items={[
                        [
                            "Basements",
                            "Water tanks & water retaining structures",
                            "Bathrooms and balconies",
                            "Repair and renovation",
                        ],
                        [
                            "Roof slabs and screeds",
                            "Internal & external plastering",
                            "Sumps and drains",
                        ]
                    ]}
                />

            </TitleWithContent>
            <TitleWithContent title="How to Use">
                <CustomLists
                    items={[
                        [
                            "Mix cement, aggregates and sand and dry mix.",
                            "Add 60%-70 % of required water and mix the mass.",
                            "Add IWA to the remaining water and pour it in the mixing drum and mix the entire quantity for approx. 3 minutes to achieve homogenous mix",
                            "Pour the mixture on a tray and use as per requirement and lay the concrete",
                        ],
                        [

                        ]
                    ]}
                />

            </TitleWithContent>


            <TitleWithContent title="Properties">

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "Appearence",
                                "Blue"
                            ],
                            [
                                "Color",
                                "DARK BROWN"
                            ],
                            [
                                "pH",
                                "1.10 + 0.02"
                            ],
                            [
                                "Chloride Content",
                                "10 - 11"
                            ],
                            [
                                "Water Permeability",
                                "60% OF CONTROL MIX"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Dosage">
                <Paragraph content="100ml per 50 kg bag Of cement." />
            </TitleWithContent>
        </>
    )
}

export default VistaIwa