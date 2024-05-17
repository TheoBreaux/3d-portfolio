import JavaScriptIcon from "../assets/icons/javascript.svg";
import GitHubIcon from "../assets/icons/github.svg";
import HtmlIcon from "../assets/icons/html.svg";
import CssIcon from "../assets/icons/css.svg";
import NodeIcon from "../assets/icons/nodejs.svg";
import ReactIcon from "../assets/icons/react.svg";
import ReactNativeIcon from "../assets/icons/reactnative.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import PostgreSQLIcon from "../assets/icons/postgresql.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Theo
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Front-end Engineer based in Los Angeles, with a passion for crafting
          fun and creative user-friendly mobile and web applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={JavaScriptIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={HtmlIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={CssIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={NodeIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={ReactIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={ReactNativeIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={GitHubIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={ReduxIcon} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={PostgreSQLIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16" id="experience">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I bring a myriad of experience from multiple industries and a fresh
            perspective to front-end development. Please see how diverse my work
            experience lends it self to being a well-rounded developer.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-small"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
