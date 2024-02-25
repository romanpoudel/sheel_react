import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft"
import TitleBarMin from "@/components/elements/TitleBar/TitleBarMin"
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent"

const About = () => {
  return (
    <>
      <TitleWithContent title="About Us">

      </TitleWithContent>
      <ImageWithContentLeft
        title="Quality and Intigrity"
        imageUrl="../src/assets/dummy-img.jpg"
        content="Established in 2018, Sheel Waterproofing has been at the forefront of the waterproofing industry for over a decade. Founded by Mr. Shankar Karki, our company began with a vision to provide effective and reliable waterproofing solutions to protect properties from water damage. With a team of skilled professionals and a commitment to innovation, we have grown into a trusted name in the industry. Our journey continues as we strive to ensure dry and secure properties for all our valued clients."
      />

    </>
  )
}

export default About