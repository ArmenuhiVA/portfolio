"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "First Name", value: "Armenuhi" },
      { id: 2, type: "Last Name", value: "Vardanyan" },
      { id: 3, type: "Date of birth", value: "20/02/1993" },
      { id: 4, type: "Nationality", value: "Armenian" },
      { id: 5, type: "Freelance", value: "Available" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "City", value: "Yerevan" },
      { id: 7, type: "Phone", value: "+374 55 51 15 52" },
      { id: 8, type: "Email", value: "armenuhivardanyan55@gmail.com" },
      { id: 9, type: "Langages", value: "Armenian, English, Russian" },
    ],
  },
];

// const counters = [
//   {
//     id: 1,
//     title: 'years of <span className="block">experience</span>',
//     value: "12",
//   },
//   {
//     id: 2,
//     title: 'completed <span className="block">projects</span>',
//     value: "97",
//   },
//   {
//     id: 3,
//     title: 'happy <span className="block">customers</span>',
//     value: "81",
//   },
//   { id: 4, title: 'awards <br/><span className="block">won</span>', value: "53" },
// ];

const experiences = [
  {
    id: 1,
    date: "2024- Present",
    title: "Technical Product Manager/Scrum Master",
    company: "AMCA Arbitration and Mediation Center of Armenia",
    desc: `
    Develop and articulate the product vision, strategy, and roadmap in alignment with the company's goals and market needs.
    Collaborate with stakeholders, customers, and cross-functional teams to gather and prioritize product requirements.
    Understand the technical aspects of the product, including architecture, design, and implementation details, to effectively communicate with engineering teams.
    Work closely with engineering teams throughout the product development lifecycle, including planning, design, development, testing, and release.
  `
  },
  {
    id: 2,
    date: "2023 - Present",
    title: "Product Manager",
    company: "Fast Bank",
    desc: `Managing the process of automation and suggesting effective programming solutions to improve financial statements.
    Checking and ensuring the quality of the automated systems, especially in financial statements, and finding bugs if there are any. Organizing and overseeing the timely delivery of the automated systems.
    Managing and coordinating developers and clients to ensure smooth communication and efficient collaboration.
    Overseeing the project management process, including planning, budgeting, and resource allocation, to ensure successful completion of projects.
    Continuously analyzing and monitoring market trends and customer needs to identify opportunities for new product development and improvement.
    Collaborating with cross-functional teams, including sales, marketing, and customer service, to ensure successful product launches and optimal customer satisfaction.`,
  },
  {
    id: 3,
    date: "2020.08 - 2023.01",
    title: "Information Security Specialist",
    company: "Softconstruct Development Office",
    desc: `Coordinating and managing the development of information security solutions for clients.
    Ensuring the timely delivery and quality of the information security systems.
    Analyzing and monitoring market trends to identify opportunities for new information security product development.
    Collaborating with clients to understand their needs and providing effective solutions to meet their requirements.
    Managing and coordinating the development team to ensure smooth communication and efficient collaboration.
    Overseeing the project management process, including planning, budgeting, and resource allocation, to ensure successful completion of projects.`,
  },
  {
    id: 4,
    date: "2020.04 - 2020.08",
    title: "Business Process Manager",
    company: "Softconstruct Development Office",
    desc:`Coordinating and managing the development of business process management solutions for clients.
    Ensuring the timely delivery and quality of the business process management systems.
    Analyzing and monitoring market trends to identify opportunities for new business process management product development. Collaborating with clients to understand their needs and providing effective solutions to meet their requirements.
    Managing and coordinating the development team to ensure smooth communication and efficient collaboration.
    Overseeing the project management process, including planning, budgeting, and resource allocation, to ensure successful completion of projects.`,
  },
  {
    id: 5,
    date: "2019.08 - 2020.04",
    title: "Risk Manager",
    company: "Softconstruct Development Office",
    desc: `Develop and implement risk management strategies and policies in accordance with industry regulations and best practices.
    Identify, assess, and monitor potential risks associated with the organization's operations, financial activities, and market conditions.
    Develop and maintain risk management frameworks, methodologies, and tools to enhance risk identification, measurement, and reporting capabilities.
    Conduct assessments to define and analyze possible risks for products such as Sportsbook and online games.
    Evaluate and forecast potential losses while determining solutions to minimize or eliminate risks.
    Provide guidance and mentorship to team members of the risk management team, fostering a culture of continuous learning and professional development.`
  },
  { 
    id: 6,
    date: "2015.08 - 2019.08",
    title: "Retail Banking Service Manager",
    company: "Artsakhbank",
    desc: `Recruiting, training, supervising, and appraising banking staff. 
    Assessing and reviewing financial circumstances to identify opportunities for improvement and growth.
    Developing a network of local business contacts to promote the bank's services.
    Managing budgets and meeting targets while maintaining statistical and financial records.
    Dealing with customer complaints and resolving issues effectively. Managing the process of automating banking processes and suggesting effective programming solutions.
    Checking and ensuring the quality of the automated systems, and finding bugs if there are any.
    Organizing and overseeing the timely delivery of the automated systems.
    Managing and coordinating developers and clients to ensure smooth communication and efficient collaboration.`
  },
  {
    id: 7,
    date: "2012.08 - 2012.09",
    title: "Trader-Manager",
    company: "TeleTrade Armenia",
    desc: `Performing various administrative functions related to financial trading.
    Analyzing financial markets to identify profitable trading opportunities.
    Organizing training sessions for traders to improve their skills and knowledge.`
  }
];

const educations = [
  {
    id: 0,
    date: "2023-2024",
    title: "Computer Science, JavaScript, React JS, Node JS ",
    unv: "Heroco IT SCHOOL",
    // desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 1,
    date: "2015",
    title: "Master Degree",
    unv: "Public Administration Academy of The Republic of Armenia",
    // desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 2,
    date: "2013",
    title: "Bachelor Degree",
    unv: "Yerevan MFB Financial Academy",
    // desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    id: 3,
    date: "2011",
    title: "Bachelor Degree",
    unv: "Financial and Banking Center Foundation",
    // desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
];

const skills = [
  { id: 1, name: "html", value: "99" },
  { id: 2, name: "javascript", value: "89" },
  { id: 3, name: "css", value: "70" },
  { id: 3, name: "scss", value: "70" },
  { id: 3, name: "tailwind css", value: "70" },
  { id: 4, name: "react.js", value: "86" },
  { id: 5, name: "redux-toolkit", value: "95" },
  { id: 6, name: "next.js", value: "80" },
  { id: 7, name: "node.js", value: "65" },
  { id: 8, name: "MySQL", value: "45" },
  { id: 9, name: "Product Manager", value: "99" },
  { id: 10, name: "Scrum Master", value: "99" },


];

const About = () => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        <SectionTitle
          bigTitle={"resume"}
          colorTitle={"me"}
          normalTitle={"about"}
        />
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 font-semibold">
                personal infos
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/dark-img-mobile.jpg"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <a
                className="button group mt-30 overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold  bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
                href="#"
              >
                <a
                  className={`relative z-20 text-${dark
                    ? "white"
                    : "black-6 group-hover:text-white transition-all duration-300"
                    }`}
                  download
                  href="/AV.pdf"
                >
                  download cv
                </a>
                <span className="absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full  text-fs-19 fa fa-download text-white bg-accent" />
              </a>
            </div>

            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {/* {counters.map((counter) => (
                  <div className="w-1/2 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${dark ? "black-3" : "grey"
                        } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48  font-semibold text-center">
            my skills
          </h3>
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                    }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          <hr
            className={`border-t border-solid border-t-${dark ? "black-3" : "grey"
              } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 font-semibold text-center">
            experience &amp; education
          </h3>
          <div className="flex down-sm:flex-col from-sm:mb-40">
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                      } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${dark ? "white" : "black-6"
                        } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                        } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                    </h5>
                    <p
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    >
                      <h5 className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                          } before:left-7 before:top-9 before:opacity-80`}>
                      {experience.company}
                    </h5>
                    <p
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    ></p>
                      <ul>
                        {experience.desc.trim().split('\n').map((line, index) => (
                        <li key={index}>{line.trim()}<br /></li>
          ))}
                      </ul>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${dark ? "black-4" : "grey"
                      } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${dark ? "white" : "black-6"
                        } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${dark ? "black-3" : "light-grey"
                        } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${dark ? "white" : "black-6"
                          } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${dark ? "text-light-grey" : ""
                        } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
