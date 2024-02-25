import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const InjectionWaterproofing = () => {
    return (
        <>

            <TitleBar title="Injection WaterProofing" />

            <ImageWithContentLeft
                title="Description"
                imageUrl="./src/assets/dummy-img.jpg"
                content="Injection is a procedure of pumping cement-based, polyurethane-based, epoxy-based or acrylate-based material into damaged or cracked structures to securely seal leaks, repair compromised structures and make them watertight again for the long term. Injection waterproofing represents a sophisticated approach to combating water infiltration in concrete structures. Unlike traditional methods that rely on surface coatings or membranes, injection waterproofing penetrates the very heart of the structure, addressing vulnerabilities at their source. By injecting specialized waterproofing materials directly into cracks, voids, and porous areas, this technique creates a seamless barrier that fortifies the structure against water penetration, mitigating the risk of leaks, moisture damage, and structural decay."
            />

            <TitleWithContent title="Application of waterproofing by injection – when and where should it be applied?">
                <CustomLists
                    items={[
                        [
                            "If there is moisture in the room, it means that the protective coating on the outside is broken. It would be ideal to fix the shortcomings of waterproofing from the outside, but, unfortunately, this is not always possible for economic and other reasons. This method of combating penetrating moisture is mainly used in the underground part of buildings (below level 0), when there is no access to the place from the outside."
                        ],
                        [
                            "For example, when it comes to a building in the center of Moscow, where there is a leak in the basement, but due to the fact that there are other buildings nearby, communications, or a road pass, it is impossible to dig out one side or the other, and the defect should be eliminated. Waterproofing by injection is also used in private homes, where the owner of the house cannot or does not want to dig out the building from the outside."
                        ]
                    ]}
                />

            </TitleWithContent>

            <TitleWithContent title="The injection waterproofing method is suitable for eliminating leaks in strucWithContent>tures made of concrete or brick:">
                <CustomLists
                    items={[
                        [
                            "Foundations",
                            "Basements",
                            "Ground floors",
                            "Walls",
                            "Tanks",
                            "Swimming pools",
                            "Places where communications are entered",


                        ],
                        [
                            "Cold seams",
                            "Expansion joints",
                            "Cracks",
                            "Interstory floors",
                            "Pits",
                            "Roofing floors",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Work Sequence">
                <CustomLists
                    items={[
                        [
                            "First of all, you need to make a markup to install packers. After that, we drill holes about 4 inches deep on one side of the crack or seam and at an angle, so that when the hole crosses the crack, it does so in the center. For example, on an 8-inch-thick wall, we drill so that the hole intersects 4 inches inside the wall. We drill approximately every 5sm from one end of the seam to the other, and then we install injection ports or packers, they can be plastic or metal.",
                            "Then we use a high-pressure pump to pump water and acid, this cleans the injection area and squeezes out the existing moisture from the pores of the base of the building.",



                        ],
                        [
                            "Next, an injection compound, polyurethane, is injected into the installed ports under pressure. As polyurethane mixes with moisture, inside the wall and in the pores of the material, it begins to expand into foam rubber, and the mixed product (polyurethane foam) begins to penetrate into all pores and voids, expand and seal it. The injection should be performed from one end of the injected surface and continue every 5 sm to the other end. As a result, all voids and weak areas will be filled with polyurethane injection composition from groundwater. If we are talking about a crack in the basement, then its upper part is visible from the outside, and with proper injection, you will see that foam rubber oozes out of it, in fact, the seal passes right through it. This is good protection from groundwater.",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Waterproofing of cold concreting joints or cut-off waterproofing by injection:">
                <CustomLists
                    items={[
                        [
                            "First, an indent is made.",
                            "Then this fine is sealed with a special expanding sealant or repair compound so that the injection resin goes inside (into the thickness of the wall) and does not come out in a weak cold seam back.",



                        ],
                        [
                            "The rest of the process is identical to the injection into the body described above.",
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Injection waterproofing of the foundation">
                <Paragraph content="When moisture appears in your house, the cause of which is a problem in the waterproofing of the foundation, the most correct method to solve this problem is to dig out the building from the outside and restore the protective waterproofing. If for some reason it is impossible to do this, then it is necessary to perform waterproofing work from the inside. To date, this is the most highly effective repair method used to eliminate leaks in basements and foundations from the inside." />
            </TitleWithContent>

            <TitleWithContent title="Injection waterproofing of foundations and walls with polyurethane">
                <Paragraph content="This type of injection is perhaps the most common method used to repair water intake leaks in general, due to its versatility. It is used exclusively to stop leaks in concrete structures, foundations, subway tunnels, and mines." />
            </TitleWithContent>

            <TitleWithContent title="Waterproofing of the foundation by injection method">
                <Paragraph content="Polyurethane injection involves the injection of activated polyurethane resin under pressure through packers hammered into holes drilled in the concrete. The injected resin passes through the entire thickness of the foundation wall or slab (usually 8 inches), expands, and solidifies in the cavity, thereby eliminating cavities and voids, and preventing water from entering your basement. The polyurethane injection waterproofing system is the introduction of a compound into concrete, by drilling and injection under pressure, of a double-component polyurethane resin using specialized equipment, thus filling voids and cavities inside. It is a safe and environmentally friendly solution to stop the penetration of water through foundations, basements, elevator shafts, walls, and concrete joints.
                
                In the ever-evolving landscape of construction and infrastructure, injection waterproofing emerges as a beacon of innovation, offering a formidable defense against water infiltration and structural decay. Through the fusion of advanced materials, precise application techniques, and unwavering commitment to excellence, injection waterproofing stands as a testament to human ingenuity and resilience. As custodians of the built environment, let us embrace the transformative power of injection waterproofing, forging structures that stand as bastions of durability, sustainability, and enduring strength."/>
            </TitleWithContent>


        </>
    )
}

export default InjectionWaterproofing