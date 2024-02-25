import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaSuperCrete = () => {
    return (
        <>

            <TitleBar
                title="Vista Super Crete"
                subtitle="An acrylic polymer baeed protective cemenfitious coadng for water proofing and Repairing compounds"
            />

            <ImageWithContentLeft
                title="Description"
                imageUrl="../src/assets/dummy-img.jpg"
                content="Visto Super (lreote is on ocrylic polymer bosed Cenrentitious costing ond repoiring compounds when used os recommended, combines with cement ond fine sond lo torm r:n impernreoble costing by blocking the copillories ond pores of the subslrote of concrete il is olso LJV resistont."
            />

            <TitleWithContent title="Uses">
                <Paragraph content="visto super crete is recommended for use in infrastructures that required to be water proofed and protected against the ingress of moisture, like Roof / Terrace, Basements , Water tanks, Swimming Pools. Retaining Walls, Bridge Walls, Tunnels, Sewage Tonkr, Reservoirs Joms, Dock Gotes etc." />
            </TitleWithContent>

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Excellent bond with most building materials.",
                            "Low permeability makes mortar or concrete waterproof",
                            "Imparts chemical resistance to substrate",
                        ],
                        [
                            "Reduces or prevents solt penetrotion inlo concrete ond mortor.",
                            "Non toxic and can be used in water tank",
                            "Eco friendly, harmless to workers",
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
                                "Form",
                                "Milky White Liquid"
                            ],
                            [
                                "Specific Gravity",
                                "1.03 +- 0.02"
                            ],
                            [
                                "pH",
                                "7 - 9"
                            ],
                            [
                                "Chloride",
                                "NIL (as per BS : 5075 , Part - 1)"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Application">
                <Paragraph content="Substrate must be sound, clean, free from loose particles or contamination, and preferably wire brushed. The surface to receive the coating is to be checked first; if there are any cracks, they must be repaired with cement mortar admixed with Visto Super Crete. Undulation and depressions are to be filled and leveled to obtain an even surface. The prepared surface must be thoroughly wetted with water, and it must be ensured that there is no standing water on the surface before application of the coating." />

                <Table
                    items={{
                        headings: [
                            "Material",
                            "Coating",
                            "Mortar",
                            "Repair",
                        ],
                        rows: [
                            [
                                "Vista Super Crete",
                                "1",
                                "1",
                                "1",
                            ],
                            [
                                "Cement",
                                "2",
                                "2",
                                "2",
                            ],
                            [
                                "Fine Sand",
                                "-",
                                "2",
                                "3",
                            ],
                            [
                                "Consumption",
                                "700 gm/ m2 for two coats",
                                "600 gm/Ltr of mortar",
                                "460 gm/Ltr of mortar",
                            ],
                        ]
                    }}
                />
            </TitleWithContent>

            <TitleWithContent title="Curing">
                <Paragraph content="After application of the final coat of Visto Super Crete, initial air drying shall be done for 2 to 6 hours. During this period, no water should be used for curing. Over the coated surface, water is to be sprinkled after 6 to 10 hours. Mild curing is to be done after 24 hours of application. After 72 hours, curing is to be done vigorously and finally kept submerged in water for seven days. Good results can be obtained in curing if carried on for a further period of time." />
            </TitleWithContent>

            <TitleWithContent title="Shelf Life">
                <Paragraph content="12 months from the date of manufacture in unopened conditions. To be stored in a cool and dry place away from direct sunlight." />
            </TitleWithContent>

            <TitleWithContent title="Handling Precautions">
                <Paragraph content="Visto Super Crete is non-toxic, but prolonged skin contact should be avoided. In case of contact with eyes, wash with plenty of clean water and seek medical advice. Cleaning of tools is to be done with water." />
            </TitleWithContent>

            <TitleWithContent title="Note">
                <CustomLists
                    items={[
                        [
                            "The contents of the technical data sheet are for general information and guideline only. Results shown here are generated from our laboratory or from our site experiences. This behaviour may change as per prevailing condition at the time of applicaiton.",
                        ],
                        [
                            "VISIA maintains a team of technical trainded professional to provide full support in regards to any of our products",
                        ]
                    ]}
                />
            </TitleWithContent>
           
        </>
    )
}

export default VistaSuperCrete