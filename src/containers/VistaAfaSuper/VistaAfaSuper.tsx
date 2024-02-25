import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaAfaSuper = () => {
    return (
        <>

            <TitleBar title="Vista Afa Super" />
            < ImageWithContentLeft
                title="Description"
                imageUrl="./src/assets/dummy-img.jpg"
                content="Dr Vista AFA Super is an alkali free accelerator especially used for wet shotcrete applications. It starts up a sudden drop of slump and a thixotropic effect at the time of spraying. The reaction with cement particles is immediate. Dr Vista AFA Super can be used in combination with Dr Vista superplasticizers."
            />
            <TitleWithContent title="Advantages">

                <CustomLists
                    items={[
                        [
                            "Develops earlyhigh strength.",
                            "Does not contain any chloride which causes corrosion of steel.",
                            "Dr Vista AFA Super is an alkali free accelerator especially used for wet shotcrete applications. It starts up a sudden drop of slump and a thixotropic effect at the time of spraying. The reaction with cement particles is immediate. Dr Vista AFA Super can be used in combination with Dr Vista superplasticizers."
                        ],
                        [
                            "Speeds up the work and contributes to good water tightness of the sprayed concrete lining.",
                            "Improves overhead spray and reduces rebound."

                        ]
                    ]}


                />
            </TitleWithContent>

            <TitleWithContent title="Area of Application">

                <CustomLists
                    items={[
                        [
                            "Mines",
                            "Shotcrete",
                            "Protection of shafts"
                        ],
                        [
                            "Tunnels, shafts",
                            "Rock & Slope Stabilisation",
                            "Tank linings"

                        ]
                    ]}


                />
            </TitleWithContent>

            <TitleWithContent title="Properties">

               <Table
               items = {{
                headings: [],
                rows:[
                    [
                        "Appearence / Color",
                        "Off White Liquid",
                    ],
                    [
                        "Relative Density",
                        "1.44 ± 0.03",
                    ],
                    [
                        "pH value",
                        "2.5 ± 0.5",
                    ],
                    [
                        "Chloride Content",
                        "0.1%",
                    ],
                    [
                        "Alkali Content",
                        "1%/B",
                    ],
                    
                ]
               }
               }
               
               />
            </TitleWithContent>

            <TitleWithContent title="Compactibility">
                <Paragraph content="Vista Superplast HS can be used with all types of cement except High Alumina Cement.It is compatible with other typers of vista ad mixture when added seperately to the mix. Site trails should be carried out to optimize dosages." />
            </TitleWithContent>

            <TitleWithContent title="Application Instructions">
                <Paragraph content="Dr Vista AFA Super is dosed at the shotcrete gun nozzle in the wet shotcreting process. The mix is prepared as per design calculations and availability of aggregate, cement, water and water reducing agents. The liquid mix is shot through the nozzle. At the end of the nozzle, Dr Vista AFA Super is dosed through a separate line." />
                <Paragraph content="Addition of Dr Vista AFA Super immediately accelerates the setting in shotcrete application and effectively reduces rebound losses. Moreover Dr Vista AFA Super also helps to build up an even layer on the surface with or without steel reinforcement." />
                <Paragraph content="All testing should be aligned to EFNARC European Specification for Sprayed Concrete (1996) to evaluate the best performing mix design against economical considerations." />
            </TitleWithContent>

            <TitleWithContent title="Precautions">
                <Paragraph content="Health & Safety Instruction:
                Dr Vista AFA Super is non toxic, non flammable and non hazardous. However any contact with human body must we washed with plenty of water."/>
            </TitleWithContent>

            <TitleWithContent title="Storage">
                <Paragraph content="Store in a cool dry place under shed away from heat." />
            </TitleWithContent>
        </>
    )
}

export default VistaAfaSuper