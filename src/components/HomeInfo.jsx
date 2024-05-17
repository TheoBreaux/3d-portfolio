import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-light sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderCountent = {
  1: (
    <h1 className="font-light sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Theo Breaux</span>👋🏾
      <br />A Front-end Engineer in Los Angeles!
    </h1>
  ),
  2: (
    <InfoBox
      text="Explore my portfolio showcasing my passion for crafting fun and creative user-friendly mobile and web applications."
      link="/projects"
      btnText="View portfolio"
    />
  ),
  3: (
    <InfoBox
      text="I bring a myriad of experience from various industries and a fresh perspective to front-end development."
      link="/about#experience"
      btnText="Learn about my experience"
    />
  ),
  4: (
    <InfoBox
      text="With a foundational education in front-end development, I'm ready to apply my skills and knowledge to contribute innovative solutions."
      link="/education"
      btnText="View my education"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderCountent[currentStage] || null;
};

export default HomeInfo;
