import CustomLists from '@/components/elements/CustomLists/CustomLists'
import ListWithDescription from '@/components/elements/CustomLists/ListWithDescription'
import ImageWithContentLeft from '@/components/elements/ImageWithContent/ImageWithContentLeft'
import Paragraph from '@/components/elements/Paragraph/Paragraph'
import Table from '@/components/elements/Table/Table'
import TitleBar from '@/components/elements/TitleBar/TitleBar'
import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent'

const VistaSbrLatexPlus = () => {
    return (
        <>

            <TitleBar
                title="Vista SBR Latex Plus"
                subtitle="(PREMIUM SBR BASED POLYMER FOR REPAIR AND WATERPROOFING)"
            />

            <ImageWithContentLeft
                title='Description'
                imageUrl='./src/assets/dummy-img.jpg'
                content='Dr. Vista SBR Latex Plus is a milky-white, styrene- butadiene co-polymer latex liquid, developed to improve the waterproofing, bonding, physical properties and integrity of cementitious mortars, screeds and concretes.It reduces the mixing time through high dispersion of the polymer. Dr. Vista SBR Latex Plus improves durability, compressive, tensile and flexural properties of modified mixes.It is suitable for horizontal or vertical applications, both internally and externally. Meets the requirements of BS 6319 part II:1983 & ASTM C 190-85 standards.'
            />
            <TitleWithContent title='Area of Application'>
                <ListWithDescription
                    items={[
                        {
                            title: "BOND COAT:",
                            content: [
                                "For Bonding New Concrete To Old Concrete, Plaster, Stone/Brick Masonry."
                            ]
                        },
                        {
                            title: "INTERNALLY:",
                            content: [
                                "Basements, Swimming Pools, Sunken/Overhead Water Tank, Sludge Tanks & Ducts, Tunnels, Underpasses Etc."
                            ]
                        },
                        {
                            title: "WATERPROOFING EXTERNALLY:",
                            content: [
                                "Structures Above Ground."
                            ]
                        },
                        {
                            title: "WATERPROOFING SUSPENDED FLOORS:",
                            content: [
                                "Areas, Plant Rooms, Chajjas, Exposed Roofs Before Finished Screed Etc."
                            ]
                        },
                        {
                            title: "OTHER TYPICAL APPLICATIONS:",
                            content: [
                                "Bedding Tiles, Fixing Or Re-Fixing Slip Bricks."
                            ]
                        },
                        {
                            title: "WATERPROOFING SUSPENDED FLOORS:",
                            content: [
                                "Balconies, Wet Areas, Plant Rooms, Chajjas, Exposed Roofs Before Finished Screed Etc."
                            ]
                        },
                        {
                            title: "CONCRETE REPAIR: ",
                            content: [
                                "Spalled Concrete, Repairing Floors, Beams And Pre-Cast Slabs, Chajjas Etc."
                            ]
                        },
                        {
                            title: "REPAIR:",
                            content: [
                                "For Repairing Plaster Or Making Water Proof Plaster Which Is Better Than Normal Plaster."
                            ]
                        },
                        {
                            title: "IMPROVES THE DURABILITY:",
                            content: [
                                "As An Admixture Of Cementitious Systems, It Improves The Durability, Water Proofing And Abrasion Resistance Properties Of Mortars."
                            ]
                        },

                    ]}
                />


            </TitleWithContent>

            <TitleWithContent title='Coverage'>
                <CustomLists
                    items={[
                        [
                            "All coverage rates given are theoretical and subject to actual site conditions. We recommend trial areas are done to establish practical consumption, particularly for primers.",
                            "As a neat bonding agent : 7 - 9 m2 per litre per coat."
                        ],
                        [
                            "As an additive to tile adhesives, bedding mortars, sand renders, plasters and screeds, the dosage may vary from 8-15 % by weight of cement.",
                            "As a waterprooing slurry : 3 - 4 m2 in two coats."
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
                                "Free Flowing Liquid"
                            ],
                            [
                                "Specific gravity @30°C. gms / ml",
                                "1.02 + 0.02"
                            ],
                            [
                                "Non Volatile Matter, %",
                                "42 - 43"
                            ],
                            [
                                "pH value",
                                "8 - 9"
                            ],
                            [
                                "Chemical Resistance",
                                "Resists Mild Acids & Alkalies"
                            ],
                            [
                                "Freeze Thaw Resistance",
                                "Excellent"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>


            <TitleWithContent title="Properties">

                <Table
                    items={{
                        headings: [

                            "SN",
                            "Areas of Application",
                            "MIX (SUPER LATEX : WATER : CEMENT)",
                            "METHOD OF APPLICATION"


                        ],
                        rows: [
                            [
                                "1",
                                "As Bond Coat",
                                "1 : 4 : 7",
                                "Apply a single coat of the mixed quantity of Dr. Vista Sbr Latex Plus. \n\n When coat is tacky, apply the plaster or concrete according to the situation. \n \n Always add cement to the liquid (Dr. Vista SBR Latex Plus : water = 1 : 4)."
                            ],
                            [
                                "2",
                                "As Waterproofing Slurry",
                                "1 : 4 : (6-8)",
                                "Brush apply the 1st coat . While 1st coat is dry, apply 2nd coat (generally give 4-6 hrs between 2 coats). \n\n Overlay the 2nd coat with screed/ plaster for finish/ protection.",
                            ],
                            [
                                "3",
                                "Rebars coating",
                                "1 : 4 : 7",
                                "Rusted rebars must be thoroughly scraped, by mechanical means if required. \n\n Apply a single coat of prepared mix over the rebars. \n\n Apply concrete/mortar when the coat is tacky.",
                            ],
                            [
                                "4",
                                "For Efflorescence-free Plaster",
                                "1 : 4 : 7",
                                "Rusted re-bars must be thoroughly worn out mechanically. \n\n Brush apply a single coat of prepared mix over the re-bars. \n\n Apply concrete/ mortar when the coat is tacky.",
                            ],
                            [
                                "5",
                                "As Crack Repair Plaster . plaster cracks around or more than 5 mm. In gaps between RCC structures and masonry",
                                "1 : 4 : 6",
                                "For Crack Repair: Clean the cracked area properly from all loose impurities. \n\n Wet the crack completely with water. \n\n Apply a single bond coat made as per the mixing ratio mentioned earlier. \n\n Prepare the crack repair plaster as per the ratio mentioned along side. \n\n Fill the crack with the above prepared mortar. \n\n Compact it into the crack fully and finish to level with trowel.",
                            ],
                        ]
                    }}
                />

            </TitleWithContent>













            <TitleWithContent title='How To Use'>
                <Paragraph content='The substrate must be structurally sound, clear and dust free, oil, grease and contaminants must be removed mechanically. Smooth surface must be scrubbed. All excess water must be removed from the surface.' />
            </TitleWithContent>


            <TitleWithContent title='Storage'>
                <Paragraph content='Store in a cool & dry place in unopened condition away from direct sunlight.' />
            </TitleWithContent>












            {/* Remove start */}
            <>
            
            </>
            {/* Remove ends */}



        </>
    )
}

export default VistaSbrLatexPlus