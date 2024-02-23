
const Contact = () => {
  return (
    <section id="contact-section">
      <div className="bg-slate-200 py-10">
        <div className="px-8 lg:px-32">

          <p className=" title-text-size text-purple-900">Contact Us</p>
          <div className="custom__divider pb-16">
            <h1></h1>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-center md:items-center gap-4  px-8 lg:px-32 ">
          <div id="map" className="md:w-1/2 pb-10 lg:pb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.071834163048!2d85.2975386!3d27.6841746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196a27a33541%3A0x6f2ba68dd5c4ed69!2sYuki%20Enterprises%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1705600583898!5m2!1sen!2snp"
              width="100%" height="380" style={{border: "0"}} allowFullScreen={true} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="md:w-1/2">
            <div>
              <p className=" title-text-size text-purple-900 text-center pb-4">Enquire Now</p>
            </div>
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
      </div>
    </section>
  )
}

export default Contact