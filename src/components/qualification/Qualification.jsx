import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
    const [toggle,setToggle]=useState(true)
 
  return (
    <section className="section qualification" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
          onClick={()=>{setToggle(true)}}
          className={`${toggle && `qualification__active`} qualification__button button--flex`}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          {/* <div
          onClick={()=>{setToggle(false)}}
           className={`${!toggle && `qualification__active`} qualification__button button--flex`}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div> */}
        </div>
        <div className="qualification__sections">
          <div className={`${toggle && "qualification__content-active"} qualification__content `}>
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Crio </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 Present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">Electrical Engineer</h3>
                <span className="qualification__subtitle">VIMEET </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

             
            </div>
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">SS Jr College</h3>
                <span className="qualification__subtitle">HSC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">Mahatma School Of Academics & Sports</h3>
                <span className="qualification__subtitle">SSC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2014
                </div>
              </div>

             
            </div>
          </div>


          {/* <div className={`${!toggle && "qualification__content-active"} qualification__content `}>
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Crio </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 Present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">Electrical Engineer</h3>
                <span className="qualification__subtitle">VIMEET </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

             
            </div>
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Crio </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 Present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="">
                <h3 className="qualification__title">Electrical Engineer</h3>
                <span className="qualification__subtitle">VIMEET </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

             
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
