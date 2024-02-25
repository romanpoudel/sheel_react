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













            {/* Remove start */}

            <div id="hero-navbar" className="bg-purple-900 pt-20">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center">
                            <h1 className="text-white text-5xl font-extrabold">DR. VISTA AFA SUPER</h1>
                            <div className="py-2 flex justify-center gap-4">
                                <a href="./index_content.html" className="text-white text-lg hover:text-blue-400">Home</a>
                                <i className="ri-donut-chart-fill text-xl text-white hover:animate-spin "></i>
                                <a href="#" className="text-white text-lg hover:text-blue-400">Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-8 bg-white lg:px-32 text-black ">
                <div className="py-20">

                    <p className="title-text-size text-purple-900 transition-all ease-in ">DR. VISTA AFA SUPER</p>
                    <p className="text-sm pt-2">(SHOTCRETE ACCELERATOR-ALKALI FREE)</p>
                    <div className="divider divider-primary"></div>
                </div>


                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5">
                        <figure>
                            <img className="" src="../src/assets/img/benefits.png" alt="" />
                        </figure>
                    </div>


                    <div className="col-span-12 lg:col-start-7 lg:col-span-6 py-4">
                        <p className="title-text-size text-purple-900">Description</p>
                        <div className="custom__divider pb-4"> <h1></h1> </div>
                        <p className="text-md text-justify content-text-size">Dr Vista AFA Super is an alkali free accelerator especially used for wet shotcrete applications. It starts up a sudden drop of slump and a thixotropic effect at the time of spraying. The reaction with cement particles is immediate. Dr Vista AFA Super can be used in combination with Dr Vista superplasticizers.</p>
                    </div>
                </div>





                <div className="py-4">
                    <p className="title-text-size text-purple-900 ">Advantages</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <div className="grid grid-cols-12 text-justify ">
                        <div className=" col-span-12 lg:col-start-1 lg:col-span-12 ">
                            <ul className="list-disc pl-4 content-text-size">
                                <li className="py-2">Dr Vista AFA Super is an alkali free accelerator especially used for wet shotcrete applications. It starts up a sudden drop of slump and a thixotropic effect at the time of spraying. The reaction with cement particles is immediate. Dr Vista AFA Super can be used in combination with Dr Vista superplasticizers.</li>
                                <li className="py-2">Speeds up the work and contributes to good water tightness of the sprayed concrete lining.</li>
                                <li className="py-2">Improves overhead spray and reduces rebound.</li>
                                <li className="py-2">Does not contain any chloride which causes corrosion of steel.</li>
                                <li className="py-2">Develops earlyhigh strength.</li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div className="py-4">
                    <p className="title-text-size text-purple-900">Area Of Application</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <div className="grid grid-cols-12 text-justify ">
                        <div className=" col-span-12 lg:col-start-1 lg:col-span-6 ">
                            <ul className="list-disc pl-4 content-text-size">
                                <li className="py-2">Mines</li>
                                <li className="py-2">Shotcrete</li>
                                <li className="py-2">Protection of shafts</li>
                            </ul>
                        </div>
                        <div className="col-span-12 lg:col-start-7">
                            <ul className="list-disc pl-4 content-text-size">
                                <li className="py-2">Tunnels, shafts</li>
                                <li className="py-2">Rock & Slope Stabilisation</li>
                                <li className="py-2">Tank linings</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="py-4">
                    <p className="title-text-size text-purple-900 ">Properties</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <div className="overflow-x-auto">
                        <table className="table z-0 content-text-size text-justify">

                            <tbody>
                                <tr className="hover:bg-purple-900 hover:text-white">

                                    <td>Appearence / Color</td>
                                    <td>Off White Liquid</td>
                                </tr>
                                <tr className="hover:bg-purple-900 hover:text-white">

                                    <td>Relative Density</td>
                                    <td>1.44 ± 0.03</td>
                                </tr>
                                <tr className="hover:bg-purple-900 hover:text-white">
                                    <td>pH Value</td>
                                    <td>2.5 ± 0.5</td>
                                </tr>
                                <tr className="hover:bg-purple-900 hover:text-white">
                                    <td>Chloride Content</td>
                                    <td> 0.1%</td>
                                </tr>
                                <tr className="hover:bg-purple-900 hover:text-white">
                                    <td>Alkali Content</td>
                                    <td>1%/B</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="py-4">
                    <p className="title-text-size text-purple-900">Compactibility</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <p className="content-text-size text-justify">Vista Superplast HS can be used with all types of cement except High Alumina Cement.It is compatible with other typers of vista ad mixture when added seperately to the mix. Site trails should be carried out to optimize dosages.</p>
                </div>


                <div className="py-4">
                    <p className="title-text-size text-purple-900">Application Instructions</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <p className="content-text-size text-justify">Dr Vista AFA Super is dosed at the shotcrete gun nozzle in the wet shotcreting process. The mix is prepared as per design calculations and availability of aggregate, cement, water and water reducing agents. The liquid mix is shot through the nozzle. At the end of the nozzle, Dr Vista AFA Super is dosed through a separate line.
                        <br />
                        <br />
                        Addition of Dr Vista AFA Super immediately accelerates the setting in shotcrete application and effectively reduces rebound losses. Moreover Dr Vista AFA Super also helps to build up an even layer on the surface with or without steel reinforcement.
                        <br />
                        <br />
                        All testing should be aligned to EFNARC European Specification for Sprayed Concrete (1996) to evaluate the best performing mix design against economical considerations.</p>
                </div>



                <div className="py-4">
                    <p className="title-text-size text-purple-900">Precautions</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <p className="content-text-size">Health & Safety Instruction:</p>
                    <p className="content-text-size">Dr Vista AFA Super is non toxic, non flammable and non hazardous. However any contact with human body must we washed with plenty of water.</p>
                </div>

                <div className="py-4">
                    <p className="title-text-size text-purple-900">Storage</p>
                    <div className="custom__divider pb-4"> <h1></h1> </div>
                    <p className="content-text-size pb-10">Store in a cool dry place under shed away from heat.</p>
                </div>
            </div>




            {/* Remove ends */}
        </>
    )
}

export default VistaAfaSuper