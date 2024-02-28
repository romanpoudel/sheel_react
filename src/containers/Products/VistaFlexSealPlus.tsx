import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaFlexSealPlus = () => {
    return (
        <>

            <TitleBar title="Vista Flex Seal +"
                subTitle="(2K Acrylic Cementitious Waterproofing Coating)"
                linkTitle="Products"
                linkTo="/products" />

            <ImageWithContentLeft
                imageUrl="/images/dummy-img.jpg"
                title="Description"
                content="Vista Flex Seal+ is cementitious waterproofing coating is ready to use two component- carefully graded aggregates in combination with selected acrylic polymer. Vista Flex Seal is highly recommended to waterproof concrete."
            />

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Easy to apply by brush",
                            "Exhibits good water proofing character",
                            "No additional water is required to make the slurry",
                            "Pre batched components",
                            "Can be used in hair line crack"
                        ],
                        [
                            "Quick mixing",
                            "Very good adhesion with substrates",
                            "Non Corrosive",
                            "Can be used for potable water contact",
                            "Protects concrete against water penetration, chloride and carbonation"
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Standards">
                <Paragraph content="Available in 5 Kg Pack & 25 Kg Pack" />
            </TitleWithContent>

            <TitleWithContent title="Area of Application">
                <Paragraph content="Dr. Vista 108 IWA+ is recommended for use in Structural Concrete, particularly in:" />
                <CustomLists
                    items={[
                        [
                            "Basements",
                            "Roof slabs and screeds",
                            "Water tanks & water retaining structures",
                            "Swimming pools. Toilets, water retaining structures"
                        ],
                        [
                            "Internal & external plastering",
                            "Bathrooms and balconies sumps and drains repair and renovation",
                            "All masonry surfaces both inside and outside.",
                            "Basements, tunnels, machinery pits, cisterns.reservoirs."
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
                                "Compressive shength at 27°C",
                                "3 days - 2.2 N/mm \n 28 days - 21 N/mm" // Include newline character where needed
                            ],
                            [
                                "Tensile Strength",
                                "4.56N/mm2 after 14 days exposure"
                            ],
                            [
                                "Mixing",
                                "Used as slurry Part A: Part B 1:4 (by weight)"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Safety and Precautions">

                <CustomLists
                    items={[
                        [
                            "In case of eye contact, wash with plenty of clean water and seek medical advice.",
                            "If swallowed, seek medical attention immediately. Do not induce vomiting",
                            "In case of skin contact, rinse with plenty of clean water, then cleanse with soap and water Do not use solvent to clean the contacted ares"
                        ],
                        [
                            "Avoid contact with skin eyes, and avoid swallowing",
                            "Ensure adequate ventilation and avoid inhalation of vapour.",
                            "Wear suitable protective clothing, gloves and eye protection."
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Packing">
                <Paragraph content="Available in 5 Kg Pack & 25 Kg Pack" />
            </TitleWithContent>
            <TitleWithContent title="Storing">
                <Paragraph content="Store in a cool dry place under shed away from heat." />
            </TitleWithContent>

        </>
    )
}

export default VistaFlexSealPlus