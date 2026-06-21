import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SendAlt2 } from "@boxicons/react";
import { TbBrandFiverr, TbBrandWhatsapp } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const contactMethods = [
  {
    Icon: HiOutlineMail,
    title: "Email",
    subtitle: "ui0886342@gmail.com",
    link: "mailto:ui0886342@gmail.com",
  },
  {
    Icon: TbBrandWhatsapp,
    title: "WhatsApp",
    subtitle: "+92-304-6497461",
    link: "https://api.whatsapp.com/send?phone=923046497461&text=Hello, Leo's Human!",
  },
  {
    Icon: TbBrandFiverr,
    title: "Fiverr",
    subtitle: "umair_iqbal01",
    link: "https://www.fiverr.com/umair_iqbal01",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const fieldClasses =
  "w-full bg-bg-card border border-border rounded-[10px] px-4 py-3.5 font-dm text-sm text-heading outline-none transition-colors duration-300 focus:border-violet";

function Field({ label, type, name, placeholder, isTextarea }) {
  return (
    <div className="mb-4.5">
      <label className="block font-dm text-xs font-semibold text-text mb-2 tracking-wide">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          rows="6"
          placeholder={placeholder}
          required
          className={`${fieldClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          className={fieldClasses}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_jzqu0zs", "template_guhzs2q", form.current, {
        publicKey: "yRxlh8Cj94A4eZ6uJ",
      })
      .then(
        () => {
          setStatus("sent");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  const btnLabel = {
    idle: "Send Message",
    sending: "Sending...",
    sent: "Message Sent ✓",
    error: "Failed — Try Again",
  }[status];

  // Button background depends on async status — must stay dynamic/inline
  const btnBg =
    status === "sent" ? "#22c55e" : status === "error" ? "#ef4444" : undefined;

  return (
    <section id="contact" className="py-25 px-6 relative overflow-hidden">
      <div className="absolute top-[10%] -left-[10%] w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)] blur-[70px] pointer-events-none" />

      <div className="max-w-275 mx-auto relative z-1">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="font-dm text-[13px] font-medium tracking-[0.15em] text-lime uppercase">
            Get In Touch
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(28px,4vw,42px)] mt-2.5 tracking-[-1px]">
            Let's Build Something
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md-2:grid-cols-[0.85fr_1.15fr] gap-12">

          {/* Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            variants={fadeUp}
          >
            <h3 className="font-syne font-bold text-base mb-5">Talk to me</h3>

            <div className="flex flex-col gap-3">
              {contactMethods.map(({ Icon, title, subtitle, link }) => (
                <a
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-bg-card border border-border rounded-xl px-4.5 py-4 no-underline transition-all duration-300 hover:border-violet hover:translate-x-1"
                >
                  <div className="w-10.5 h-10.5 rounded-[10px] bg-lime-dim flex items-center justify-center shrink-0">
                    <Icon className="text-xl text-lime" />
                  </div>
                  <div>
                    <span className="block font-syne font-bold text-sm text-heading">
                      {title}
                    </span>
                    <span className="block font-dm text-xs text-text mt-0.5">
                      {subtitle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            variants={fadeUp}
          >
            <h3 className="font-syne font-bold text-base mb-5">
              Write me your project
            </h3>

            <form ref={form} onSubmit={sendEmail}>
              <Field label="Name" type="text" name="name" placeholder="Your name" />
              <Field label="Email" type="email" name="email" placeholder="your@email.com" />
              <Field label="Project" name="project" placeholder="Tell me about your project" isTextarea />

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={btnBg ? { background: btnBg } : undefined}
                className={`flex items-center justify-center gap-2.5 w-full font-syne font-bold text-sm px-6 py-3.75 rounded-[10px] border-none text-bg transition-colors duration-300 ${
                  status === "sending" ? "cursor-wait" : "cursor-pointer"
                } ${!btnBg ? "bg-lime" : ""}`}
              >
                {btnLabel}
                {status === "idle" && <SendAlt2 rotate={315} size={16} fill="#070711" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}