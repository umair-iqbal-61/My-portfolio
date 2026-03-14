import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SendAlt2 } from "@boxicons/react"
import ContactCard from "./ContactCard"
import { TbBrandFiverr, TbBrandWhatsapp } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import InputContact from "./InputContact"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jzqu0zs', 'template_guhzs2q', form.current, {
        publicKey: 'yRxlh8Cj94A4eZ6uJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section className="px-5 py-10 md:px-10 lg:px-0 md:pt-14 md-2:pt-22 pb-8" id="contact">
      <h2 className="text-4xl text-center">Get in touch</h2>
      <span className="block text-[14px] mb-16 text-center">Contact Me</span>

      <div className="grid grid-cols-[1fr] md-2:grid-cols-[repeat(2,max-content)] justify-center gap-12 lg:gap-24 pb-12">
        <div>
          <h3 className="text-center text-[16px] font-medium mb-6">Talk to me</h3>

          <div className="grid grid-cols-[1fr] md:grid-cols-[300px] justify-center md-2:justify-normal gap-4">
            <ContactCard
              icon={
                <HiOutlineMail className="text-[32px] text-heading mb-1" />
              }
              title="Email" subtitle="ui0886342@gmail.com" link="mailto:ui0886342@gmail.com" />

            <ContactCard
              icon={
                <TbBrandWhatsapp className="text-[32px] text-heading mb-1" />
              }
              title="WhatsApp"
              subtitle="+92-304-6497461" link="https://api.whatsapp.com/send?phone=923046497461&text=Hello, Leo's Human!" />

            <ContactCard
              icon={
                <TbBrandFiverr className="text-[32px] text-heading mb-1" />
              }
              title="Fiverr" subtitle="umair_iqbal01" link="https://www.fiverr.com/umair_iqbal01"
            />
          </div>
        </div>

        <div>
          <h3 className="text-center text-[16px] font-medium mb-6">Write me your project</h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:w-90 my-0 mx-auto"
          >
            <InputContact
              label="Name"
              type="text"
              name="name"
              placeholder="Insert your name"
            />

            <InputContact
              label="Email"
              type="email"
              name="email"
              placeholder="Insert your email"
            />

            <div className="relative mb-8 h-44">
              <label className="absolute -top-3 left-5 text-[13px] bg-background p-1 z-10">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="absolute top-0 left-0 w-full h-full resize-none text-text border-2 border-solid border-[rgba(0,0,0,0.3)] bg-none outline-none rounded-xl p-6 z-1"
              ></textarea>
            </div>

            <button className="flex gap-2.5 px-7 lg:px-8 py-4 lg:py-5 bg-heading hover:bg-button cursor-pointer text-white rounded-2xl mt-10">
              Send Message
              <SendAlt2 rotate={315} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact