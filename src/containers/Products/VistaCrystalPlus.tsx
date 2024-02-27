import CustomLists from '@/components/elements/CustomLists/CustomLists'
import ImageWithContentLeft from '@/components/elements/ImageWithContent/ImageWithContentLeft'
import Paragraph from '@/components/elements/Paragraph/Paragraph'
import Table from '@/components/elements/Table/Table'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent'
const VistaCrystalPlus = () => {
    return (
        <>


            <TitleBar title='Vista Crystal Plus' 
            linkTitle="Products"
            linkTo="/products"/>
            <ImageWithContentLeft
                title='Description'
                imageUrl="../../../src/assets/dummy-img.jpg"
                content='Vista Crystal Plus is a Crystallline waterproofing admixture that protects and waterproofs concrete structures by crystallisation. The active chemicals react with moisturea dn by prodict of cement hydrate in the concrete resulting in crystalline formation within the pores and capillary atracts fo concrete thus waterprooging the structure against penetration of water and other liquids from any direction. Crystal Plus gives strong and lasting waterproofing protection from harsh environmental conditions, Crystal Plus, crystalline admixture offers a waterproofing solution by turning concrete into a water barrier. When combined with waterm the chemicals react to form millions fo needle-like crystals with the concrete. These crystals grow and fill the capillary pores and micro-cracks, blocking the passage of water.'
            />

            <TitleWithContent title='Features'>
                <CustomLists
                    items={[
                        [
                            "Crystalline cementitious metarial",
                            "Integral addition",
                        ],
                        [
                            "Reduces concrete permeability",
                            "Reduces concrete breathe",
                        ]
                    ]}
                />

            </TitleWithContent>


            <TitleWithContent title='Benefits'>
                <CustomLists
                    items={[
                        [
                            "Reduces penetration of water and other liquids",
                            "Seals hairline cracks",
                        ],
                        [
                            "Resists positive and negative side hydrostatic pressure",
                            "Protects against sewage and industrial wastes",
                        ]
                    ]}
                />

            </TitleWithContent>


            <TitleWithContent title='Application'>
                <CustomLists
                    items={[
                        [
                            "Foundation",
                            "Sewage and water treatment plants",
                            "Tanks",
                            "Underground vaults",
                            "Tunnel and subway systems"
                        ],
                        [
                            "Water reservoirs Secondary containment",
                            "Structures",
                            "Below-grade parking structures",
                            "Precast components Swimming pools",
                        ]
                    ]}
                />

            </TitleWithContent>

            <TitleWithContent title='Advantages'>
                <CustomLists
                    items={[
                        [
                            "Reduction in water penetration",
                            "Improving the durability",
                        ],
                        [
                            "'Self healing' concrete",
                            "Extending the longevity",
                        ]
                    ]}
                />

                <TitleWithContent title="Technical Data">

                    <Table
                        items={
                            {
                                headings: [],
                                rows: [
                                    [
                                        "Form",
                                        "Powder",
                                    ],
                                    [
                                        "Color",
                                        "Grey"
                                    ],
                                    [
                                        "Density of dry mortar",
                                        "0.97 ± 0.1 Kg/l"
                                    ],
                                    [
                                        "Maximum chloride content",
                                        "Chloride-free"
                                    ],
                                ]
                            }
                        }

                    />

                </TitleWithContent>





            </TitleWithContent>

            <TitleWithContent title="Consumption">
                <Paragraph content="0.8 - 1.0 kg per 100 kg of cement" />
            </TitleWithContent>


            <TitleWithContent title="Packing">
                <Paragraph content="Available in 20 kg bag" />
            </TitleWithContent>


            <TitleWithContent title="Storage">
                <Paragraph content="Store in cool dry place under shed away from heat." />
            </TitleWithContent>


            <TitleWithContent title="Shelf Life">
                <Paragraph content="6 months in original unopened sealed condition" />
            </TitleWithContent>



        </>
    )
}

export default VistaCrystalPlus