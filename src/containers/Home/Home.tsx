import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent';
import CardWithImage from '../../components/elements/Card/CardThreeDImage';
import ImageWithContentLeft from '@/components/elements/ImageWithContent/ImageWithContentLeft';
import { Carousel } from '@/components/elements/Carousel/Carousel';
import CardBasic from '@/components/elements/Card/CardBasic';
import { InputBox } from '@/components/elements/Input/Input';
const Home = () => {
  return (
    <>

      <Carousel />
      <TitleWithContent title='About Us'>
        <ImageWithContentLeft
          title='Quality and Intigrity'
          imageUrl='../src/assets/dummy-img.jpg'
          content='Established in 2018, Sheel Waterproofing has been at the forefront of the waterproofing industry for over a decade. Founded by Mr. Shankar Karki, our company began with a vision to provide effective and reliable waterproofing solutions to protect properties from water damage. With a team of skilled professionals and a commitment to innovation, we have grown into a trusted name in the industry. Our journey continues as we strive to ensure dry and secure properties for all our valued clients.'
        />
      </TitleWithContent>

      <section id='cards' className=' pt-10 flex justify-center gap-10 flex-wrap text-white'>
        <CardBasic
          cardTitle='10 +'
          cardDescription='Years of Experience' />
        <CardBasic
          cardTitle='500 +'
          cardDescription='Project Completed' />
        <CardBasic
          cardTitle='500 +'
          cardDescription='Satisfied Clients' />
        <CardBasic
          cardTitle='50 +'
          cardDescription='Active Workers' />
      </section>

      <TitleWithContent title='Our Services'>
        <div className="flex flex-wrap justify-center gap-12 lg:w-104">
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Cementitious Waterproofing'
            cardContent='This method involves the use of cement-based coatings or additives to create a waterproof barrier. It is often used for concrete structures and can be applied to both the positive and negative sides of walls.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Liquid Waterproofing Membrane'
            cardContent='Liquid-applied waterproofing membranes are flexible coatings that can be applied directly onto surfaces such as roofs, walls, and foundations. They are often used for their ease of application and ability to conform to irregular shapes.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Bituminous Coating Waterproofing'
            cardContent='Bituminous coatings, such as asphalt or coal tar, are used for waterproofing flat roofs and foundations. These materials are applied in liquid form and then solidify to create a durable waterproof layer.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Sheet Membranes'
            cardContent='Sheet membranes, typically made of materials like bitumen, PVC, or rubber, are applied to surfaces by rolling out sheets and sealing the seams. They are commonly used for roofing and below-grade waterproofing.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Polyurethane Waterproofing'
            cardContent='Polyurethane coatings are flexible and provide excellent waterproofing for a variety of surfaces, including roofs, balconies, and concrete structures. They are known for their durability and resistance to UV radiation..'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Roof Waterproofing Systems'
            cardContent='Roof waterproofing systems are protective measures applied to roofs to prevent water infiltration and damage. These systems typically involve the application of waterproof membranes, coatings, or sealants to create a barrier against rain, snow, and moisture.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Injection Waterproofing'
            cardContent='This method involves injecting specialized materials, like polyurethane or epoxy, into cracks and voids in structures to seal them and prevent water infiltration.'
          />
          <CardWithImage
            imageUrl='../src/assets/dummy-img.jpg'
            cardTitle='Geomembranes'
            cardContent='Geomembranes are synthetic liners made from materials like PVC, HDPE, or EPDM. They are used in applications such as lining ponds, landfills, and artificial lakes to prevent water seepage.'
          />
        </div>
      </TitleWithContent>

      <section className='bg-purple-900 text-white py-20'>
        <ImageWithContentLeft
          imageUrl='../src/assets/dummy-img.jpg'
          title="Words From our CEO"
          content="Dear Valued Customers, Welcome to Sheel Waterproofing, where excellence meets waterproofing expertise! As the CEO, I'm proud to lead a team dedicated to providing cutting-edge solutions for your waterproofing needs.
      


        Our commitment to quality, innovation, and customer satisfaction is unmatched. Explore our website to discover how Sheel Waterproofing can protect your investments and ensure a watertight future for your projects.
      
      
        Best regards,
      
        Shankar Karki
      
        CEO, Sheel Waterproofing Nepal Pvt. Ltd."
        />
      </section>

      <section>
        <TitleWithContent title='Contact Us'>
          <></>

          <div className='grid grid-cols-11'>
            <div className='lg:col-span-5'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.071834163048!2d85.2975386!3d27.6841746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196a27a33541%3A0x6f2ba68dd5c4ed69!2sYuki%20Enterprises%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1705600583898!5m2!1sen!2snp"
                width="100%" height="380" style={{ border: '0' }} allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='lg:col-start-7 col-span-5'>
              <p className=" title-text-size text-purple-900 text-center pb-4">Enquire Now</p>
              <form id="contact-form" action="https://formspree.io/f/xrgneoqj" method="post" className="flex flex-col gap-4">
                
                <input id="name-input" type="text" placeholder="Name"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full" />
                <input id="email-input" type="email" name="email" placeholder="Email"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full" required />
                <input id="phone-input" type="tel" name="phone" pattern="[0-9]{10}" placeholder="Phone Number"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full" />
                <input id="message-input" type="text" name="message" placeholder="Message"
                  className="bg-white input input-bordered input-lg focus:border-purple-900 hover:border-purple-900 w-full" />
                <button type="submit" className="bg-purple-900 btn btn-neutral font-bold">Send Message</button>
              </form>
            </div>
          </div>
        </TitleWithContent>
      </section >
    </>
  )
}

export default Home