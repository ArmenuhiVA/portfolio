"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import SectionTitle from "./SectionTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socials = [
  { id: 1, icon: "fa fa-facebook", link: "https://www.facebook.com/armenuhi.vardanyan.armeni" },
  { id: 2, icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/armenuhi-vardanyan-8758b81a2/" },
  { id: 3, icon: "fa fa-github", link: "https://github.com/ArmenuhiVA" },
  // { id: 4, icon: "fa fa-dribbble", link: "#" },
];

const Contact = () => {
  const { dark } = useContext(TunisContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setError(true);
      toast.error("All fields are required.")
      console.log(error)
      clearError();
    } else {
      emailjs
        .send(
          "service_1ivk91c", // service id
          "template_cmkzznm", // template id
          mailData,
          "o4_DlgJTIBIY5LXg6" // public api
        )
        .then(
          (response) => {
            console.log(response)
            setError(false);
            toast.success("Email sent successfully!");
            clearError();
            setMailData({
              name: "",
              email: "",
              message: "",
              subject: "",
            });
          },
          (err) => {
            console.log(err.text);
            toast.error("Failed to send the email. Please try again later.");
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <SectionContainer id="contact">
      <div className="w-full">
        <ToastContainer position="top-center"/>
        <SectionTitle
          bigTitle={"contact"}
          colorTitle={"touch"}
          normalTitle={"get in"}
        />
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex down-lg:flex-col">
            <div className="w-1/3 down-lg:w-full px-16 xs:px-0">
              <h3 className="text-fs-26 xs:text-fs-21 mb-16 font-semibold uppercase">
                don't be shy !
              </h3>
              <p className="mb-16 font-Open-sans text-fs-15 xs:text-fs-14">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-envelope-open absolute left-0 top-10 text-fs-33 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  mail me
                </span>
                <a href="mailto:armenuhivardanyan55@gmail.com">armenuhivardanyan55@gmail.com</a>
              </div>
              <div className="relative font-Open-sans font-semibold pl-50 pt-5 leading-lh-21 text-fs-15 xs:text-fs-14 mb-16">
                <i className="fa fa-phone-square absolute left-0 top-10 text-fs-39 text-accent" />
                <span className="block opacity-80 uppercase font-normal">
                  call me
                </span>
                <a href="tel:+37455511552">+374 55 51 15 52</a>
              </div>
              <ul className="-ml-5 pt-4 mb-48">
                {socials.map((social) => (
                  <li key={social.id} className="inline-block">
                    <a
                      href={social.link}
                      target="_blank"
                      className={`social-item inline-block h-40 w-40 leading-lh-42 text-center text-${dark ? "white" : "black-6"
                        } transition duration-300 text-fs-17 mx-6 bg-${dark ? "black-2" : "light-grey hover:text-white"
                        } rounded-full`}
                    >
                      <i className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-2/3 down-lg:w-full px-16 down-lg:px-0">
              <form
                id="contactform"
                className="contactform"
                onSubmit={(e) => onSubmit(e)}
              >
                <div className="flex flex-wrap font-normal">
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      placeholder="YOUR EMAIL"
                    />
                  </div>
                  <div className="from-sm:w-1/3 down-sm:w-full px-16 xs:px-0">
                    <input
                      autoComplete="off"
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } py-11 px-26 mb-30 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      type="text"
                      name="subject"
                      onChange={(e) => onChange(e)}
                      value={subject}
                      placeholder="YOUR SUBJECT"
                    />
                  </div>
                  <div className="w-full px-16 xs:px-0">
                    <textarea
                      className={`w-full ${dark ? "bg-black-3" : ""
                        } text-fs-15 text-${dark ? "white" : "black-6"
                        } border border-solid border-${dark ? "black" : "grey"
                        } h-160 py-11 px-26 rounded-30 outline-0 transition duration-300 placeholder:text-placeholder field-form`}
                      placeholder="YOUR MESSAGE"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="w-full px-16 xs:px-0 mt-30">
                    <button
                      type="submit"
                      className="button cursor-pointer group overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                      onClick={
                        (e) => {
                        e.preventDefault();
                        onSubmit(e);
                      }
                    }
                    >
                      <span
                        className={`relative z-20 ${dark
                          ? "text-white"
                          : "text-black-6 group-hover:text-white transition-all duration-300"
                          }`}
                      >
                        send message
                      </span>
                      <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-send bg-accent" />
                    </button>
                  </div>
                  <div className="w-full px-16 xs:px-0">
                    <span
                      id="message"
                      className="output_message h-0 text-center leading-lh-46 rounded-30 text-white block [&.success]:h-46 [&.success]:bg-success [&.error]:h-46 [&.error]:bg-error mt-30 mb-60"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
