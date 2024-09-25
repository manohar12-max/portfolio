import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="devicon-html5-plain"></i>
            <div className="">
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="devicon-css3-plain"></i>
            <div className="">
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="devicon-javascript-plain"></i>
            <div className="">
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-bootstrap-plain"></i>

            <div className="">
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="uil uil-react"></i>
            <div className="">
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">  
          <i class="devicon-typescript-plain"></i> 
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> */}
            <div className="">
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            
          <i class="devicon-nextjs-plain"></i>
          
            {/* 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line.svg" />
           */}
            <div className="">
              <h3 className="skills__name">Next Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            
          <i class="devicon-materialui-plain"></i>
          
            <div className="">
              <h3 className="skills__name">Material UI</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            
          <i class="devicon-tailwindcss-original"></i>
          
            <div className="">
              <h3 className="skills__name">TailwindCss</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
           
          <i class="devicon-redux-original"></i>
          
            <div className="">
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
