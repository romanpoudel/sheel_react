import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaNoThree = () => {
    return (
        <>

            <TitleBar
                title="Vista No. Three"
                subtitle="(QUICK SETTING COMPOUND FOR CEMENT MORTARS & CONCRETE ADDITIVES)"
            />

            <ImageWithContentLeft
                imageUrl="/images/dummy-img.jpg"
                title="Description"
                content="A multipurpose quick setting for cement mortar & concrete additive in liquid form when added to concrete, results in quick setting or rapid hardening of the same."
            />


            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "It can be used in tunnels, Basement, Emergency Repair and to stop ingress of water through structure in swimming pool, water treatment plant, reservoir etc.",
                        ],
                        [
                            "It is also used for any emergency repair during short duration of shutdown.",
                            "For sealing leak joints Vista No.3 is very useful.",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Uses">
                <CustomLists
                    items={[
                        [
                            "An easy to use multipurpose concrete additive.",
                            "For early stripping of shutter to expedite construction work.",
                            "A very useful product for pre-cast Industries where early remoulding is required Very useful for emergency repair in factories during shutdown."
                        ],
                        [
                            "Sealing joints in masonry, cracks / joints in tunnels etc.",
                            "Very useful for concrete work during interval of high & low tide when the time is very short for the concrete to set.",
                            "In cold weather concreting, it is very useful to set concrete or mortar in sub-zero temperatures."
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="How To Use">
                <Paragraph content="Vista No.3 is to be diluted with water in the ratio to 1:2. Before addition of diluted Vista No.3, sand , aggregate & cement are to be mixed properly in dry condition. Then the Vista No.3 solution is to be added at last and then mixed quickly, so as to avoid stiffening during mixing. For stopping minor leakages and dampness neat cement and Vista No.3 solution are mixed thoroughly to form a putty like consistency and applied on the surface immediately." />
            </TitleWithContent>


            <TitleWithContent title="Properties">

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "Appearence",
                                "Hazy Liquid"
                            ],
                            [
                                "Specific Gravity",
                                "	1.25 + 0.02"
                            ],
                            [
                                "Dose",
                                "31 : 3 or 4 (Vista No.3 : Cement) but may vary depending on site condition."
                            ],
                            [
                                "Setting Time",
                                "Initial"
                            ],

                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Handling Precaution">
                <Paragraph content="Vista No-3 is non-toxic, and ingestion is to be avoided. Any splashes to the skin must be washed with water .lf contact with eyes occurs, wash well immediately with water and seek medical advice." />
            </TitleWithContent>



            <TitleWithContent title="Note">
                <CustomLists
                    items={[
                        [
                            "The contents of the technical data sheet are for general information and guideline only. Results shown here are generated from our laboratory or from our site experiences. This behavior may change as per prevailing condition at the time of application.",

                        ],
                        [
                            "VISTA maintains a team of technical trained professional to provide full support in regards to any of our products.",

                        ]
                    ]}
                />
            </TitleWithContent>
        </>
    )
}

export default VistaNoThree