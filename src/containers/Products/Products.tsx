import CardWithImage from "@/components/elements/Card/CardThreeDImage"

const ProductsPage = () => {
  return (
    <>
      <div id="hero-navbar" className="bg-purple-900 pt-20 ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h1 className="text-white text-5xl font-extrabold animate-pulse">Our Products</h1>
              <div className="py-2 flex justify-center gap-4">
                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                  data-page="./pages/index_content.html"><a>Home</a> </div>
                <i className="ri-donut-chart-fill text-xl text-white hover:animate-spin "></i>
                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "
                  data-page="./pages/index_content.html"> <a>Products</a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="px-8 bg-white lg:px-32 text-black ">
        <div className="py-20">
          <p className="title-text-size text-purple-900 transition-all ease-in">Our Products</p>
          <p className="text-sm pt-2"> (SHOTCRETE ACCELERATOR-ALKALI FREE) </p>
          <div className="divider divider-primary"></div>
        </div>


        <section className="pb-10 py-20">
          <div className=" bg-white">
            <div className="pb-10">
              <p className="title-text-size text-purple-900">Waterproofing Chemical</p>
              <div className="custom__divider pb-4">
                <h1></h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:w-104">


              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle='Vista IWA'
                cardContent='Vista - IWA Dr. Vista 108 IWA is a unique
              multipurpose advanced technology Integral Waterproofing compound. Dr. Vista 108 IWA+ is made
              from specially formulated cement friendly surface active agents, corrosion inhibit additive
              and polymers.It is used as an additive for cement concrete, mortar & plasters while
              constructing the building. The presence of this integral compound resists and reverses the
              normal tendency of hardened concrete to absorb water by capillary action and makes the
              concrete totally sealed against penetration of water.'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle='Vista No. 2'
                cardContent='VISTA NO - 2 is an extra fast setting waterproof /
                plugging compound liquid.'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista No. 3'
                cardContent='A multipurpose quick setting for cement mortar &
                concrete additive in liquid form when added to concrete, results in quick setting or rapid
                hardening of the same.'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista SBR Latex Plus'
                cardContent='Dr. Vista SBR Latex Plus is a milky-white, styrene-
                butadiene co-polymer latex liquid, developed to improve the waterproofing, bonding, physical
                properties and integrity of cementitious mortars, screeds and concretes.It reduces the
                mixing time through high dispersion of the polymer. Dr. Vista SBR Latex Plus improves
                durability, compressive, tensile and flexural properties of modified mixes.It is suitable
                for horizontal or vertical applications, both internally and externally. Meets the
                requirements of BS 6319 part II:1983 & ASTM C 190-85 standards.'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Super Crete'
                cardContent='Polyurethane coatings are flexible and provide
                excellent
                waterproofing for a
                variety of surfaces, including roofs, balconies, and concrete structures. They are known for
                their
                durability and resistance to UV radiation'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Flex Seal +'
                cardContent='Roof waterproofing systems are protective measures
                applied to roofs
                to
                prevent
                water infiltration and damage. These systems typically involve the application of waterproof
                membranes,
                coatings, or sealants to create a barrier against rain, snow, and moisture.'
              />













            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className=" bg-white">
            <div className="pb-10">
              <p className="title-text-size text-purple-900">Concreting Aids</p>
              <div className="custom__divider pb-4">
                <h1></h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:w-104">

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Power Silica Fume'
                cardContent='This method involves the use of cement-based
                coatings or additives
                to create
                a
                waterproof barrier. It is often used for concrete structures and can be applied to both the
                positive and
                negative sides of walls.'
              />

              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Seal IT'
                cardContent='Bituminous coatings, such as asphalt or coal tar,
                are used for
                waterproofing
                flat roofs and foundations. These materials are applied in liquid form and then solidify to
                create a
                durable
                waterproof layer.'
              />





            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className=" bg-white">
            <div className="pb-10">
              <p className="title-text-size text-purple-900">Concrete Admixture</p>
              <div className="custom__divider pb-4">
                <h1></h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:w-104">
              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Superplast HS'
                cardContent='This method involves the use of cement-based
                coatings or additives
                to create
                a
                waterproof barrier. It is often used for concrete structures and can be applied to both the
                positive and
                negative sides of walls.'
              />
              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle='Vista Superplast HS 1000'
                cardContent='Liquid-applied waterproofing membranes are flexible
                coatings that
                can be
                applied directly onto surfaces such as roofs, walls, and foundations. They are often used
                for
                their ease
                of
                application and ability to conform to irregular shapes.'
              />
              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista AFA'
                cardContent='Bituminous coatings, such as asphalt or coal tar,
                are used for
                waterproofing
                flat roofs and foundations. These materials are applied in liquid form and then solidify to
                create a
                durable
                waterproof layer.'
              />
              <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle='  Vista Shot X'
                cardContent='Bituminous coatings, such as asphalt or coal tar,
                are used for
                waterproofing
                flat roofs and foundations. These materials are applied in liquid form and then solidify to
                create a
                durable
                waterproof layer.'
              />





            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className=" bg-white">
            <div className="pb-10">
              <p className="title-text-size text-purple-900">Crystallizing</p>
              <div className="custom__divider pb-4">
                <h1></h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:w-104">

            <CardWithImage
                imageUrl='../src/assets/dummy-img.jpg'
                cardTitle=' Vista Crystal Plus'
                cardContent='This method involves the use of cement-based
                coatings or additives
                to create
                a
                waterproof barrier. It is often used for concrete structures and can be applied to both the
                positive and
                negative sides of walls.'
              />


              
            </div>
          </div>
        </section>





      </div>

    </>
  )
}

export default ProductsPage