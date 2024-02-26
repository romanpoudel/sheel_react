import CardBasic from "@/components/elements/Card/CardBasic";
import { Carousel } from "@/components/elements/Carousel/Carousel";
import ImageWithContentLeft from "@/components/elements/ImageWithContent/ImageWithContentLeft";
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent";
import Products from "../Products/Products";
import Services from "../Services/Services";
import About from "../About/About";
import WordsFromCeo from "./WordsFromCeo";
const Home = () => {
  return (
    <>
      <Carousel />
      <About />

      <section
        id="cards"
        className=" pt-10 flex justify-center gap-10 flex-wrap text-white"
      >
        <CardBasic cardTitle="10 +" cardDescription="Years of Experience" />
        <CardBasic cardTitle="500 +" cardDescription="Project Completed" />
        <CardBasic cardTitle="500 +" cardDescription="Satisfied Clients" />
        <CardBasic cardTitle="50 +" cardDescription="Active Workers" />
      </section>

      <Services />

      <div className="mb-2">
        <Products />
      </div>

      <section className="bg-purple-900 text-white py-20">

        <WordsFromCeo/>

      </section>

      <section>
        <TitleWithContent title="Contact Us">
          <></>

          <div className="grid grid-cols-11">
            <div className="lg:col-span-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.071834163048!2d85.2975386!3d27.6841746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196a27a33541%3A0x6f2ba68dd5c4ed69!2sYuki%20Enterprises%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1705600583898!5m2!1sen!2snp"
                width="100%"
                height="380"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="lg:col-start-7 col-span-5">
              <p className=" title-text-size text-purple-900 text-center pb-4">
                Enquire Now
              </p>
              <form
                id="contact-form"
                action="https://formspree.io/f/xrgneoqj"
                method="post"
                className="flex flex-col gap-4"
              >
                <input
                  id="name-input"
                  type="text"
                  placeholder="Name"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full"
                />
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full"
                  required
                />
                <input
                  id="phone-input"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  className="bg-white input input-bordered focus:border-purple-900 hover:border-purple-900 w-full"
                />
                <input
                  id="message-input"
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="bg-white input input-bordered input-lg focus:border-purple-900 hover:border-purple-900 w-full"
                />
                <button
                  type="submit"
                  className="bg-purple-900 btn btn-neutral font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </TitleWithContent>
      </section>
    </>
  );
};

export default Home;
