import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaNoTwo = () => {
    return (
        <>

            <TitleBar title="Vista No. 2" subtitle="(RAPID 1 QUICK SETTING/HARDENING COMPOUND FOR CEMENT MORTAR & CONCRETE)" />
            <ImageWithContentLeft
                imageUrl="../../../src/assets/dummy-img.jpg"
                title="Description"
                content="VISTA NO - 2 is an extra fast setting waterproof / plugging compound liquid."
            />
            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Excellent quality plugging compound-consistent performance.",
                            "High early strength —plugging is completed within 5 minutes"
                        ],
                        [
                            "Simple Application",
                            "Excellent adhesion"
                        ]
                    ]}

                />
            </TitleWithContent>

            <TitleWithContent title="How To Use">
                <Paragraph content="Cut back the opening of leaking hole to form concave shape tapering to a narrow mouth at the entrance, place the gelled cement mass into the hole and keep the pressure on for 4 to 5 minutes." />
            </TitleWithContent>

            <TitleWithContent title="Properties">

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "Aspect",
                                "Redish Liquied"
                            ],
                            [
                                "Specific Gravity",
                                "1.25 + 0.02"
                            ],
                            [
                                "SP.GR @ 25 °C",
                                "	1.10 + 0.02"
                            ],
                            [
                                "Dose",
                                "	37% by weight of cement. Not to be diluted with water."
                            ],
                            [
                                "Chloride Content",
                                "0.20 % (Max)"
                            ],
                            [
                                "Setting Time",
                                "	30 to 60 seconds."
                            ],
                        ]
                    }}
                />
            </TitleWithContent>

            <TitleWithContent title="Priming">
                <Paragraph content="Vista Sealant primer is recommended for the surface namely concrete, brickworks, asbestos, cement, gypsum board, stone, glass, timber, rigid PVC,anodized aluminum, ceramics etc. Primer is not required for Epoxy and Polyester surface." />
            </TitleWithContent>

            <TitleWithContent title="Mixing">
                <Paragraph content="Both components are pre-measured. Use suitable instrument for mixing. Mix for 8 to 10 minutes or until smooth and homogeneous materials result. Using a pressure gun install the sealant into the joint without trapping air. Tool —off with a spatula to lightly concave profile. Remove masking tape." />
                <Paragraph content="Joint design:" />
                <CustomLists
                    items={[
                        [
                            "Minimum joint depth = 8mm",
                            "Maximum joint width = 50mm"
                        ],
                        [
                            "Width to depth ratio for joints up to 10mm wide = 1:1",
                            "Width to depth ratio for joints from 10mm to 50mm = 2:1"

                        ]
                    ]}
                />

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "Aspect of comp. A",
                                "White paste"
                            ],
                            [
                                "Aspect of comp. B",
                                "Dark brown paste1.25 + 0.02"
                            ],
                            [
                                "Mixed Compound",
                                "Grey in colour"
                            ],
                            [
                                "Density",
                                "1.55 + 0.02%"
                            ],
                            [
                                "Mixing Ratio",
                                "Comp A-92 : Comp B-8"
                            ],
                            [
                                "Movement Accommodation",
                                "+ 20% of the width"
                            ],
                            [
                                "Tensile Strength",
                                "Minimum"
                            ],
                            [
                                "Shore 'A' Hardness",
                                "18"
                            ],
                            [
                                "Pot Life at 27 °C",
                                "4 hours"
                            ],
                            [
                                "Width to Depth ratio",
                                "White paste"
                            ],
                            [
                                "Temperature Range",
                                "From 50 °C to 80 °C"
                            ],
                            [
                                "Back up materials",
                                "Polyethylene brityl rod / Thermocol"
                            ],

                        ]
                    }}
                />




            </TitleWithContent>



        </>
    )
}

export default VistaNoTwo