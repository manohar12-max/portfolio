import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-nodejs-plain"></i>
            <div className="">
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data"> 
          <i class="devicon-express-original"></i>
            <div className="">
              <h3 className="skills__name">ExpressJs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-mongodb-plain"></i>
            <div className="">
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="uil uil-award-alt"></i>
            <div className="">
              <h3 className="skills__name">Restful API</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">          
          <i class="devicon-firebase-plain"></i>
            <div className="">
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
