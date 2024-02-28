import CustomLists from "@/components/elements/CustomLists/CustomLists"
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import Paragraph from "@/components/elements/Paragraph/Paragraph"
import Table from "@/components/elements/Table/Table"
import TitleBar from "@/components/elements/TitleBar/TitleBar"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const VistaFlexSealPlus = () => {
    return (
        <>

            <TitleBar title="Vista Flex Seal +"
                subtitle="(2K Acrylic Cementitious Waterproofing Coating)" />

            <ImageWithContentLeft
                imageUrl="/images/dummy-img.jpg"
                title="Description"
                content="Vista Flex Seal+ is cementitious waterproofing coating is ready to use two component- carefully graded aggregates in combination with selected acrylic polymer. Vista Flex Seal is highly recommended to waterproof concrete."
            />

            <TitleWithContent title="Advantages">
                <CustomLists
                    items={[
                        [
                            "Easy to apply by brush",
                            "Exhibits good water proofing character",
                            "No additional water is required to make the slurry",
                            "Pre batched components",
                            "Can be used in hair line crack"
                        ],
                        [
                            "Quick mixing",
                            "Very good adhesion with substrates",
                            "Non Corrosive",
                            "Can be used for potable water contact",
                            "Protects concrete against water penetration, chloride and carbonation"
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Standards">
                <Paragraph content="Available in 5 Kg Pack & 25 Kg Pack" />
            </TitleWithContent>

            <TitleWithContent title="Area of Application">
                <Paragraph content="Dr. Vista 108 IWA+ is recommended for use in Structural Concrete, particularly in:" />
                <CustomLists
                    items={[
                        [
                            "Basements",
                            "Roof slabs and screeds",
                            "Water tanks & water retaining structures",
                            "Swimming pools. Toilets, water retaining structures"
                        ],
                        [
                            "Internal & external plastering",
                            "Bathrooms and balconies sumps and drains repair and renovation",
                            "All masonry surfaces both inside and outside.",
                            "Basements, tunnels, machinery pits, cisterns.reservoirs."
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
                                "Compressive shength at 27°C",
                                "3 days - 2.2 N/mm \n 28 days - 21 N/mm" // Include newline character where needed
                            ],
                            [
                                "Tensile Strength",
                                "4.56N/mm2 after 14 days exposure"
                            ],
                            [
                                "Mixing",
                                "Used as slurry Part A: Part B 1:4 (by weight)"
                            ],
                        ]
                    }}
                />

            </TitleWithContent>

            <TitleWithContent title="Safety and Precautions">

                <CustomLists
                    items={[
                        [
                            "In case of eye contact, wash with plenty of clean water and seek medical advice.",
                            "If swallowed, seek medical attention immediately. Do not induce vomiting",
                            "In case of skin contact, rinse with plenty of clean water, then cleanse with soap and water Do not use solvent to clean the contacted ares"
                        ],
                        [
                            "Avoid contact with skin eyes, and avoid swallowing",
                            "Ensure adequate ventilation and avoid inhalation of vapour.",
                            "Wear suitable protective clothing, gloves and eye protection."
                        ]
                    ]}
                />
            </TitleWithContent>

            <TitleWithContent title="Packing">
                <Paragraph content="Available in 5 Kg Pack & 25 Kg Pack" />
            </TitleWithContent>
            <TitleWithContent title="Storing">
                <Paragraph content="Store in a cool dry place under shed away from heat." />
            </TitleWithContent>






            {/* Remove Starts */}
            <div>

                <div id="hero-navbar" className="bg-purple-900 pt-20 ">
                    <div className="container mx-auto">
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center">
                                <h1 className="text-white text-5xl font-extrabold animate-pulse">Vista Flex Seal +</h1>
                                <div className="py-2 flex justify-center gap-4">
                                    <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                                        data-page="./pages/index_content.html"> <a>Home</a> </div>
                                    <i className="ri-donut-chart-fill text-xl text-white hover:animate-spin "></i>
                                    <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                                        data-page="./pages/index_content.html"> <a>Services</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="px-8 bg-white lg:px-32 text-black ">
                    <div className="py-20">

                        <p className="title-text-size text-purple-900 transition-all ease-in">Vista Flex Seal +</p>
                        <p className="text-sm pt-2">(2K Acrylic Cementitious Waterproofing Coating)</p>
                        <div className="divider divider-primary"></div>
                    </div>


                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-5">
                            <figure>
                                <img className="" src="../src/assets/img/benefits.png" alt="" />
                            </figure>
                        </div>


                        <div className="col-span-12 lg:col-start-7 lg:col-span-6 py-4 ">
                            <p className="title-text-size text-purple-900">Description</p>
                            <div className="custom__divider pb-4">
                                <h1></h1>
                            </div>
                            <p className="text-md text-justify content-text-size ">Vista Flex Seal+ is cementitious waterproofing coating is
                                ready to use two component- carefully graded aggregates in combination with selected acrylic polymer.
                                Vista Flex Seal is highly recommended to waterproof concrete.</p>
                        </div>
                    </div>

                    <div className="py-4">
                        <p className="title-text-size text-purple-900 ">Advantages</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <div className="grid grid-cols-11 text-justify ">
                            <div className=" col-span-11 lg:col-start-1 lg:col-span-5 ">
                                <ul className="list-disc pl-4 content-text-size">
                                    <li className="py-2 ">Easy to apply by brush</li>
                                    <li className="py-2">Exhibits good water proofing character</li>
                                    <li className="py-2">No additional water is required to make the slurry</li>
                                    <li className="py-2">Pre batched components</li>
                                    <li className="py-2">Can be used in hair line crack</li>

                                </ul>
                            </div>
                            <div className="col-span-11 lg:col-start-7">
                                <ul className="list-disc pl-4 content-text-size">
                                    <li className="py-2">Quick mixing</li>
                                    <li className="py-2">Very good adhesion with substrates</li>
                                    <li className="py-2">Protects concrete against water penetration, chloride and carbonation</li>
                                    <li className="py-2">Non Corrosive</li>
                                    <li className="py-2">Can be used for potable water contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="py-4">
                        <p className="title-text-size text-purple-900">Standards</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <p className="content-text-size text-justify">Available in 5 Kg Pack & 25 Kg Pack</p>
                    </div>

                    <div className="py-4">
                        <p className="title-text-size text-purple-900">Area Of Application</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <p className="content-text-size pb-4"> Dr. Vista 108 IWA+ is recommended for use in Structural Concrete,
                            particularly in:</p>
                        <div className="grid grid-cols-11 text-justify ">
                            <div className=" col-span-11 lg:col-start-1 lg:col-span-5 ">
                                <ul className="list-disc pl-4 content-text-size">
                                    <li className="py-2">Basements</li>
                                    <li className="py-2">Roof slabs and screeds</li>
                                    <li className="py-2">Water tanks & water retaining structures</li>
                                    <li className="py-2">Swimming pools. Toilets, water retaining structures</li>
                                </ul>
                            </div>
                            <div className="col-span-11 lg:col-start-7">
                                <ul className="list-disc pl-4 content-text-size">
                                    <li className="py-2">Internal & external plastering</li>
                                    <li className="py-2">Bathrooms and balconies sumps and drains repair and renovation</li>
                                    <li className="py-2">All masonry surfaces both inside and outside.</li>
                                    <li className="py-2">Basements, tunnels, machinery pits, cisterns.reservoirs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="py-4">
                        <p className="title-text-size text-purple-900 ">Properties</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table z-0 content-text-size text-justify">

                                <tbody>
                                    <tr className="hover:bg-purple-900 hover:text-white">

                                        <td>Compressive shength at 27°C</td>

                                        <td>3 days - 2.2 N/mm
                                            <br />
                                            28 days - 21 N/mm
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-purple-900 hover:text-white">

                                        <td>Tensile Strength</td>
                                        <td>4.56N/mm2 after 14 days exposure</td>
                                    </tr>
                                    <tr className="hover:bg-purple-900 hover:text-white">
                                        <td>Mixing</td>
                                        <td>Used as slurry Part A: Part B 1:4 (by weight)</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="py-4">
                        <p className="title-text-size text-purple-900 ">Safety and Precaution</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <div className="grid grid-cols-11 text-justify ">
                            <div className=" col-span-11 lg:col-start-1 lg:col-span-5 ">
                                <ul className="list-disc pl-4 content-text-size">
                                    <li className="py-2">In case of eye contact, wash with plenty of clean water and seek medical advice.
                                    </li>
                                    <li className="py-2">If swallowed, seek medical attention immediately. Do not induce vomiting</li>
                                    <li className="py-2">In case of skin contact, rinse with plenty of clean water, then cleanse with soap and water Do not use solvent to clean the contacted ares</li>
                                </ul>
                            </div>
                            <div className="col-span-11 lg:col-start-7">
                                <ul className="list-disc pl-4 content-text-size">

                                    <li className="py-2 ">Avoid contact with skin eyes, and avoid swallowing</li>
                                    <li className="py-2">Ensure adequate ventilation and avoid inhalation of vapour.</li>
                                    <li className="py-2">Wear suitable protective clothing, gloves and eye protection.</li>

                                </ul>

                            </div>
                        </div>
                    </div>



                    <div className="py-4">
                        <p className="title-text-size text-purple-900">Packing</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <p className="content-text-size text-justify">Available in 5 Kg Pack & 25 Kg Pack</p>
                    </div>

                    <div className="py-4">
                        <p className="title-text-size text-purple-900">Storing</p>
                        <div className="custom__divider pb-4">
                            <h1></h1>
                        </div>
                        <p className="content-text-size pb-10 text-justify">Store in a cool dry place under shed away from heat.</p>
                    </div>
                </div>
            </div>
            {/* Remove ends */}
        </>
    )
}

export default VistaFlexSealPlus