import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaPowerSilicaFume = () => {
    return (
        <>

            <TitleBar
                title="Vista Power Silica Fume"
                subtitle="(HYBRID TECHNOLOGY SILICA FUME)"
            />
            <ImageWithContentLeft
                imageUrl="./src/assets/dummy-img.jpg"
                title="Description"
                content="VISTA POWER SILICA FUME is a densified silica fume formulated to produce extremely strong, durable concrete. VISTA PowerX silica fume meets the requirements of ASTM C 1240."
            />

            <TitleWithContent title="Advantages">
                <Paragraph content="VISTA PowerX contains extremely fine (0.15μm) latently reactive silicon dioxide." />
                <Paragraph content="The presence of this substance gives following advantages:" />
                <CustomLists
                    items={[
                        [
                            "Increase in strength.",
                            "Increase Concreate Service Life.",
                            "Water retention and increased density when set.",
                            "Improved internal cohesion.",
                            "Improved pumping properties.",
                            "Improved water tightness.",
                        ],
                        [
                            "Improved durability.",
                            "Improved surface finish.",
                            "Reduced chloride diffusion.",
                            "Increased resistance to abrasion.",
                            "Increased resistance to abrasion.",
                            "Vista PowerX ideal for applications where concrete will be required to resist chemical attack. ",
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
                                "Color",
                                "Grey to dark grey powder"
                            ],
                            [
                                "Density",
                                "> 500 Kg/m3 densified"
                            ],
                            [
                                "Specific Surface Area",
                                "> 15 m2/gm"
                            ],
                            [
                                "Specific Gravity",
                                "2.2"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Technical Data">

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "SiO2",
                                "> 89%"
                            ],
                            [
                                "Alkalis as Na2O",
                                "< 1.5%"
                            ],
                            [
                                "Loss On Ignition",
                                "< 4%"
                            ],
                            [
                                "Moisture Content",
                                "< 3%"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Area of Application">
                <Paragraph content="VISTA POWER SILICA FUME used in:" />
                <CustomLists
                    items={[
                        [
                            "Increase in strength.",
                            "Increase Concreate Service Life.",
                        ],
                        [
                            "Improved durability.",
                            "Improved surface finish.",
                        ]
                    ]}
                />
            </TitleWithContent>




            <TitleWithContent title="How It Works">
                <Paragraph content="VISTA POWER SILICA FUME is a pozzolanic material that consists primarily of fine silicon dioxide particles in a non-crystalline form. Silica fume particles have a diameter of less than 1μm; about 100 times smaller than the average cement particle." />
            </TitleWithContent>
            <TitleWithContent title="Pozzolanic Action">
                <Paragraph content="A chemical reaction takes place between the free lime Ca (OH) 2 in the cement paste and the Vista PowerX particles which results in the formation of additional calcium silicate hydrate (CSH) gel, the glue that holds the concrete constituents together. The formation of this extra binding force within the gel increases the concrete Strength." />
            </TitleWithContent>
            <TitleWithContent title="Application">
                <Paragraph content="By use of VISTA PowerX concrete of highest quality can be produced. The standard rules of good concreting practice, concerning production, placing and testing are to be followed. Fresh concrete must be cured as per the relevant standard." />
            </TitleWithContent>
            <TitleWithContent title="Dosage">
                <Paragraph content="VISTA POWER SILICA FUME is recommended for use in concrete and wet shotcrete applications at an addition dosage of 5-15% by mass of cement." />
            </TitleWithContent>
            <TitleWithContent title="Health and Safety Information">
                <Paragraph content="For information and advice on the safe handling, storage and disposal of chemical products, users shall refer to the most recent Material Safety Data Sheet containing physical, ecological, toxicological and other safety-related data." />
            </TitleWithContent>







            {/* Remove start */}
            <>
            </>
            {/* Remove ends */}


        </>
    )
}

export default VistaPowerSilicaFume