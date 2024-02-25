import CardWithImage from '@/components/elements/Card/CardThreeDImage'
import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent'
import { useState } from 'react';

interface ProductProps {
  linkUrl: string;
  imageUrl: string;
  cardTitle: string;
  cardContent: string;
}



const Products: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = ({ product }: { product: ProductProps }) => {
    return product.cardTitle.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const products = [
    {
      linkUrl: '/products/vista-iwa',
      imageUrl: "../src/assets/dummy-img.jpg",
      cardTitle: "Vista IWA",
      cardContent: "Vista - IWA Dr. Vista 108 IWA is a unique multipurpose advanced technology Integral Waterproofing compound.Dr.Vista 108 IWA + is made from specially formulated cement friendly surface active agents, corrosion inhibit additive and polymers.It is used as an additive for cement concrete, mortar & plasters while constructing the building.The presence of this integral compound resists and reverses thenormal tendency of hardened concrete to absorb water by capillary action and makes the concrete totally sealed against penetration of water."
    },

    {
      linkUrl: '/products/vista-iwa',
      imageUrl: "../src/assets/dummy-img.jpg",
      cardTitle: "Vista abc",
      cardContent: "Vista - IWA Dr. Vista 108 IWA is a unique multipurpose advanced technology Integral Waterproofing compound.Dr.Vista 108 IWA + is made from specially formulated cement friendly surface active agents, corrosion inhibit additive and polymers.It is used as an additive for cement concrete, mortar & plasters while constructing the building.The presence of this integral compound resists and reverses thenormal tendency of hardened concrete to absorb water by capillary action and makes the concrete totally sealed against penetration of water."
    },

  ]











  return (
    <>
      <TitleWithContent title="Waterproofing Chemical">
        <div className="flex flex-wrap justify-center gap-12 lg:w-104">

          {products.filter((product:ProductProps)=>{
            return filteredProducts({product})
           
          }).map(product=>{
            return (
              <CardWithImage key={product.linkUrl}
              linkUrl={product.linkUrl}
              imageUrl={product.imageUrl}
              cardTitle={product.cardTitle}
              cardContent={product.cardContent}
              />
            )
          })}


          {/* <CardWithImage
            linkUrl='/products/vista-iwa'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle="Vista IWA"
            cardContent="Vista - IWA Dr. Vista 108 IWA is a unique
              multipurpose advanced technology Integral Waterproofing compound. Dr. Vista 108 IWA+ is made
              from specially formulated cement friendly surface active agents, corrosion inhibit additive
              and polymers.It is used as an additive for cement concrete, mortar & plasters while
              constructing the building. The presence of this integral compound resists and reverses the
              normal tendency of hardened concrete to absorb water by capillary action and makes the
              concrete totally sealed against penetration of water."
          />


          <CardWithImage
            linkUrl='/products/vista-no-2'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle="Vista No. 2"
            cardContent="VISTA NO - 2 is an extra fast setting waterproof /
                plugging compound liquid."
          />

          <CardWithImage
            linkUrl='/products/vista-no-3'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista No. 3"
            cardContent="A multipurpose quick setting for cement mortar &
                concrete additive in liquid form when added to concrete, results in quick setting or rapid
                hardening of the same."
          />

          <CardWithImage
            linkUrl='/products/vista-sbr-latex-plus'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista SBR Latex Plus"
            cardContent="Dr. Vista SBR Latex Plus is a milky-white, styrene-
                butadiene co-polymer latex liquid, developed to improve the waterproofing, bonding, physical
                properties and integrity of cementitious mortars, screeds and concretes.It reduces the
                mixing time through high dispersion of the polymer. Dr. Vista SBR Latex Plus improves
                durability, compressive, tensile and flexural properties of modified mixes.It is suitable
                for horizontal or vertical applications, both internally and externally. Meets the
                requirements of BS 6319 part II:1983 & ASTM C 190-85 standards."
          />

          <CardWithImage
            linkUrl='/products/vista-super-crete'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Super Crete"
            cardContent="Polyurethane coatings are flexible and provide
                excellent
                waterproofing for a
                variety of surfaces, including roofs, balconies, and concrete structures. They are known for
                their
                durability and resistance to UV radiation"
          />

          <CardWithImage
            linkUrl='/products/vista-flex-seal-plus'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Flex Seal +"
            cardContent="Roof waterproofing systems are protective measures
                applied to roofs
                to
                prevent
                water infiltration and damage. These systems typically involve the application of waterproof
                membranes,
                coatings, or sealants to create a barrier against rain, snow, and moisture."
          />

        </div>
      </TitleWithContent>
      <TitleWithContent title="Concreting Aids">
        <div className="flex flex-wrap justify-center gap-12 lg:w-104">

          <CardWithImage
            linkUrl='/products/vista-power-silica-fume'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Power Silica Fume"
            cardContent="This method involves the use of cement-based coatings or additives to create a waterproof barrier. It is often used for concrete structures and can be applied to both the positive and negative sides of walls."
          />

          <CardWithImage
            linkUrl='/products/vista-flex-seal-it'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Seal IT"
            cardContent="Bituminous coatings, such as asphalt or coal tar, are used for waterproofing flat roofs and foundations. These materials are applied in liquid form and then solidify to create a durable waterproof layer."
          />

        </div>
      </TitleWithContent>

      <TitleWithContent title="Concrete Admixture">
        <div className="flex flex-wrap justify-center gap-12 lg:w-104">

          <CardWithImage
            linkUrl='/products/vista-superplast-hs'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Superplast HS"
            cardContent="This method involves the use of cement-based
                coatings or additives
                to create
                a
                waterproof barrier. It is often used for concrete structures and can be applied to both the
                positive and
                negative sides of walls."
          />

          <CardWithImage
            linkUrl='/products/vista-superplast-hs-1000'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle="Vista Superplast HS 1000"
            cardContent="Liquid-applied waterproofing membranes are flexible
                coatings that
                can be
                applied directly onto surfaces such as roofs, walls, and foundations. They are often used
                for
                their ease
                of
                application and ability to conform to irregular shapes."
          />

          <CardWithImage
            linkUrl='/products/vista-afa-super'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista AFA"
            cardContent="Bituminous coatings, such as asphalt or coal tar,
                are used for
                waterproofing
                flat roofs and foundations. These materials are applied in liquid form and then solidify to
                create a
                durable
                waterproof layer."
          />
          33

          <CardWithImage
            linkUrl='/products/vista-shot-x'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle="  Vista Shot X"
            cardContent="Bituminous coatings, such as asphalt or coal tar,
                are used for
                waterproofing
                flat roofs and foundations. These materials are applied in liquid form and then solidify to
                create a
                durable
                waterproof layer."
          />

        </div>
      </TitleWithContent>

      <TitleWithContent title="Crystallizing">
        <div className="flex flex-wrap justify-center gap-12 lg:w-104">


          <CardWithImage
            linkUrl='/products/vista-crystal-plus'
            imageUrl="../src/assets/dummy-img.jpg"
            cardTitle=" Vista Crystal Plus"
            cardContent="This method involves the use of cement-based coatings or additives to create a waterproof barrier. It is often used for concrete structures and can be applied to both the positive and negative sides of walls."
          /> */}


        </div>
      </TitleWithContent>
    </>
  )
}

export default Products