import React from "react";

const Project = ({ ...props }) => {
  return (
    <div className="project__data">
      <div className="project__wrap">
        <a target="_blank" href={props.link}>
          <img src={props.img} className="project__image" alt={props.title} />
          <div className="project__image__overlap">
          <i className="uil uil-eye project__eye"></i>
          </div>
        </a>
        
      </div>
      <div className="project__title">
        <h3 className="project__name">{props.name}</h3>
        <a href={props.github} target="_blank">
          <i className="uil uil-github"></i>
        </a>
      </div>
      <span className="project__subtitle">{props.skills}</span>
    </div>
  );
};

export default Project;
