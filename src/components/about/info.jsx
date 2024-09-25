import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award "></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">0 years of working</span>
      </div>
      <div className="about__box">
        <i className="uil uil-briefcase-alt"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">15+ projects</span>
      </div>
    </div>
  );
};

export default Info;
