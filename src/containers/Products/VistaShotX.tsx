import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaShotX = () => {
    return (
        <>

            <TitleBar
                title="Vista Shot X"
                subtitle="High Performance Powder Accelerator For Dry Mix Shotcrete"
            />

            <ImageWithContentLeft
                title="Description"
                imageUrl="../src/assets/dummy-img.jpg"
                content="A ready to use alkali free accelerator in powder form for use with dry gunite mixes. It allows spraying to take place even on wet surfaces subject to slight infiltration"
            />

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Improved water tightness",
                            "Reduced rebound",
                            "Better adhesion to areas of slight seepage",
                            "Chloride free and does not corrode the reinforcement",
                        ],
                        [
                            "Improves overhead spraying",
                            "Produces high strength concrete",
                            "Speeds up the job",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Area Of Application">
                <CustomLists
                    items={[
                        [
                            "Tunnels and galleries",
                            "Securing rock-faces",
                            "Embarkment and excavations",
                            "Thin section concrete shells",
                        ],
                        [
                            "Highly economical",
                            "Concrete repair-work",
                            "Strengthening concrete structures",
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
                                "Aspect",
                                "Setting time \n\n (Testing using Gillmore apparatus)"
                            ],
                            [
                                "White powder",
                                "Initial setting time within 3 Min. \n\n Final settign time within 12 Min."
                            ],
                            
                        ]
                    }}
                />

            </TitleWithContent>


            <TitleWithContent title="Dosage">
                <Paragraph content="Vista Shot - X normally used 2% to 4% by weight of cement. When increased to 5% to 6% setting is quicker and curing time is much reduced." />
            </TitleWithContent>


            <TitleWithContent title="Shelf Life">
                <Paragraph content="Best before 6 months from the date of manufacture in unopened container. The material should be stored under shed and away form direct sunlight at room temperature ranging between 5 °C (Min.) and 45 °C (Max)." />
            </TitleWithContent>


            <TitleWithContent title="Packing">
                <Paragraph content="25/50 kg. in HDPE bag." />
            </TitleWithContent>


            <TitleWithContent title="Precautions">
                <Paragraph content="Vista Shot - X is non-toxic and ingestion is to be avoided. If contact with eyes occur, wash well immediately with water and seek medical advice." />
            </TitleWithContent>

        </>
    )
}

export default VistaShotX