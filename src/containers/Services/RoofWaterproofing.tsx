import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ListWithDescription from "@/components/elements/CustomLists/ListWithDescription"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const RoofWaterproofing = () => {
    return (
        <>

            <TitleBar title="Roof Waterproofing"
                linkTitle="Services"
                linkTo="/services" />
            <ImageWithContentLeft
                title="Description"
                imageUrl="/images/dummy-img.jpg"
                content="Roof waterproofing is the process of protecting a building's roof from water damage by applying materials that prevent water from penetrating the roof surface. Various waterproofing materials, such as asphalt coatings, liquid-applied membranes, and pre-formed sheet membranes, can be applied to existing or new structures, creating a barrier that prevents water from seeping into the building. Additionally, it will support the reduction of heat that is absorbed by the roof. When choosing a roof waterproofing option, it is important to consider different factors such as the climate, type of roof, expected life span, and the intended use of the building."
            />

            <div className="px-8 lg:px-32 pt-4">
                <ListWithDescription
                    items={[
                        {
                            title: "SurfBuilt-up roofing (BUR):",
                            content: [
                                "This traditional roofing system consists of multiple layers of waterproofing material built up on the roof surface. The layers are sealed together to form a waterproof barrier."
                            ]
                        },
                        {
                            title: "Single-ply roofing:",
                            content: [
                                "This is a type of roofing system commonly used for flat or low-slope roofs that consists of a single layer of waterproofing material, such as TPO or PVC. The material is typically heat-welded or glued to create a seamless, waterproof barrier."
                            ]
                        },
                        {
                            title: "Metal roofing:",
                            content: [
                                "Metal roofing systems can be waterproofed by applying a coating or membrane to the surface. The coating or membrane provides a barrier against water penetration and protects the metal from corrosion and other forms of damage."
                            ]
                        },
                        {
                            title: "Spray foam roofing:",
                            content: [
                                "This roofing system consists of a layer of spray foam insulation applied to the roof surface. The foam is then coated with a waterproofing material to create a seamless and waterproof barrier.",
                            ]
                        }

                    ]}
                />

            </div>

            <TitleWithContent title="Importance of Roof Waterproofing">
                <CustomLists
                    items={[
                        [
                            "Roofs of your establishments are the first place to face the brunt of changing weathers and climates. Over time, they develop cracks in them and then starts the problem of water leakage.",
                            "Through these cracks, water gradually creeps in and spread out inside the structure, ruining the aesthetic appeal and weakening the structural strength."
                        ],
                        [
                            "To protect your space from the perils of water leakage, concrete roof waterproofing is a must."
                        ]
                    ]}
                />

            </TitleWithContent>

            <TitleWithContent title="Benefits of Roof Waterproofing">
                <CustomLists
                    items={[
                        [
                            "Improves Structure Durability",
                            "Once water seeps into your walls, it leads to the formation of mould and mildew which, if left untreated, gradually ruins the beauty of your interiors. Waterproofing your roof can help you improve the life of interior work and furniture.",
                            "Reduces Cost of Repairs"
                        ],
                        [
                            "Moisture eats up the strength of your structure if left untreated. Getting an effective roof waterproofing solution will increase its durability.",
                            "Roof waterproofing helps save a good amount of money in the long term by reducing the cost of frequent repairs.",
                            "Improves the Life of Interior Work and Furniture"
                        ]
                    ]}
                />

            </TitleWithContent>

            <TitleWithContent title="Choosing an Effective Solution for Concrete Roof Waterproofing">
                <ListWithDescription

                    items={[
                        {
                            title: "Durability: ",
                            content: [
                                "Brickbat Coba is one of the traditional yet effective waterproofing methods, but it fails to deliver sustainable results in the long run.",
                                "Within a short span, it develops cracks and eventually allows water to enter through it. So, it is not durable and does not offer good elasticity as well.",
                                "Keeping this fact mind, you must choose a waterproofing solution that can provide enough elongation so that it does not get affected by the change in temperatures."
                            ]
                        },
                        {
                            title: "Bonding Strength:",
                            content: [
                                "There is no dearth of choices when it comes to choosing an effective roof waterproofing solution.",
                                "Bonding strength matters because it ensures the solution bonds tightly with the roof in order to provide effective waterproofing."
                            ]
                        },
                        {
                            title: "Drying Time:",
                            content: [
                                "It is crucial because the faster the solution dries, the faster it is ready to protect your roof from the rain.",
                                "Also, there will be lesser dust settlement. So, when you choose a roof waterproofing solution, make sure you keep this thing in mind as well."
                            ]
                        },
                        {
                            title: "UV Resistance:",
                            content: [
                                "The product you choose must be UV resistance so that the membrane does not lose its physical property of providing energy efficiency.",
                            ]
                        },
                        {
                            title: "Brand’s Reputation:",
                            content: [
                                "The brand you choose must have good experience in providing effective waterproofing solutions. It will help you rest assured about getting quality products and expert assistance.",
                                "Apply the polyurethane waterproofing product around pipe penetrations, drains, and other protrusions using a brush or trowel."
                            ]
                        },
                        {
                            title: "Final Words:",
                            content: [
                                "Besides, you may need to consult an experienced contractor who can help you in choosing the right waterproofing solution, based on your requirements.",

                            ]
                        }
                    ]}

                />

                <Paragraph content="You can consider different options for roof waterproofing solutions by sheel waterproofing that offer great bonding strength and ensures uniform film thickness throughout the surface. One of the best things about these solutions is there is no need to break roofs for their application." />

            </TitleWithContent>
        </>
    )
}

export default RoofWaterproofing