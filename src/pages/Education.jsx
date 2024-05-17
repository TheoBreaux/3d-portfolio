import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import CTA from "../components/CTA";

const Education = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Education
        </span>
      </h1>
      <div className="mt-1 flex flex-col gap-3 text-slate-500">
        <p>
          During the COVID-19 pandemic, I transitioned from the hospitality and
          entertainment industries to the tech field. I began with the Google
          Data Analytics Specialization on Coursera, where I discovered my
          passion for programming through the R Programming language. This
          interest propelled me into learning JavaScript, HTML, and CSS,
          deepening my commitment to software development. Currently, I am
          pursuing a second bachelor's degree in Software Engineering at Western
          Governors University. I also hold a B.A. in Marketing/Advertising from
          Lake Forest College.
        </p>
      </div>

      <div className="py-1" id="education">
        <div className="flex">
          <VerticalTimeline>
            {education.map((education) => (
              <VerticalTimelineElement key={education.name}>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {education.institution}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.location}
                  </p>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.certification}
                  </p>
                </div>
                {/* <ul className="my-5 list-disc ml-5 space-y-2">
                  {education.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-small"
                    >
                      {point}
                    </li>
                  ))}
                </ul> */}
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

export default Education;
