import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaSuperplastHs1000 = () => {
    return (
        <>
            <TitleBar
                title="Vista Superplast HS 1000"
                subtitle="(HIGH PERFORMANCE SUPER-PLASTICIZING ADMIXTURE)"
            />
            <ImageWithContentLeft
                title="Description"
                imageUrl="../src/assets/dummy-img.jpg"
                content="VISTA SUPERPLAST HS is a unique multipurpose advance technology hig performance Super-plasticizing Accelerating admixtre based on modified poly carboxylate ether confirming to ASTM c494."
            />

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Improved Dispersion Properties.",
                            "Very High Water Reduction.",
                            "Improved Strength And Density.",
                            "Improved Compactness.",
                            "Improved Cohesiveness.",
                        ],
                        [
                            "Acceleration Setting Time.",
                            "Improved Flowability",
                            "Arrest Shrinkage.",
                            "Improved Workability Retention.",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Area Of Application">
                <Paragraph content="VISTA SUPERPLAST HS is recommended for use in free flowing concrete in Piling,floors, slabs,foundations,precast concrete,concrete of vertical tower,walls and columns and other structural elements." />
            </TitleWithContent>


            <TitleWithContent title="Properties">

                <Table
                    items={{
                        headings: [],
                        rows: [
                            [
                                "Aspect",
                                "Light Brown Liquid"
                            ],
                            [
                                "Specific Gravity",
                                "1.08 ± 0.02 @27°C"
                            ],
                            [
                                "Chloride Content",
                                "0.2 % (MAX)"
                            ],
                            [
                                "pH",
                                "> 6"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Compactibility">
                <Paragraph content="VISTA SUPERPLAST HS can be used with all types of cement except High Alumina Cement.It is compatible with other typers of vista ad mixture when added seperately to the mix. Site trails should be carried out to optimize dosages." />
            </TitleWithContent>

            <TitleWithContent title="Application Instructions">
                <Paragraph content="Dosage:As an estimate, the rate of addition of Vista Superplast HS is generally in the range of 0.4% - 1.2% by weight of cement. Optimum dosage is the best determined through sites trails with the concrete mix in comparison with a mix containing no admixture which allows the measuring of workability and strength gain." />
                <br />
                <Paragraph content="For best result, the measured quantity of Vista Superplast HS should be added in the last phase, after pre wetting the mix with 80% of the total water required." />
                <br />
                <Paragraph content="An overdose of double the recommended amount of Vista Superplast HS will result in very high Workability and some retardation of setting time. Ultimate compressive strength will, however, not be impaired." />
            </TitleWithContent>

            <TitleWithContent title="Storage">
                <Paragraph content="VISTA SUPERPLAST HS should be protected from extreme temperatures and preferably stored in the shade, and has a minimum shelf life of 12 months when it is stored under normal temperatures." />
            </TitleWithContent>

            <TitleWithContent title="Precaution">
                <Paragraph content="Health & Safety Instruction: Vista Superplast is non toxic. Any splashes on the skin should be washed immediately with water." />
            </TitleWithContent>


            <TitleWithContent title="Note:">
                <CustomLists
                    items={[
                        [
                            "The content of the technical data sheet are for general information and guideline only. Results shown here are generated from our laboratory or from our site experiences. This behavior may change as per prevailing condition at the time of application.",
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

export default VistaSuperplastHs1000