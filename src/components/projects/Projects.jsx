import React from "react";
import Project from "./Project";
import restoran from "../../assets/restoran.png";
import social from "../../assets/social.png";
import realtor from "../../assets/realtor.png";
import auth from "../../assets/auth.png";
import video from "../../assets/video.png";
import qkart from "../../assets/qkart.png";
import gaming from "../../assets/gaming.png";
import airbnb from "../../assets/air.png";
import hashtag from "../../assets/hashtag.png"
import xflix from "../../assets/xflix.png"
import cinehub from "../../assets/cinehub.png"
import "./projects.css";
const project = [
  {
    id: 1,
    name: "Airbnb",
    img: airbnb,
    link: "https://airbnb-clone-12.vercel.app/",
    skills: "Next Js,TypeScript,MongoDb,TailwindCss",
    github: "https://github.com/manohar12-max/airclone/tree/main",
  },
  {
    id: 2,
    name: "Qkart",
    img: qkart,
    link: "https://qkart-e-shop.netlify.app/",
    skills: "ReactJs,Material UI,MongoDb",
    github:
      "https://github.com/manohar12-max/crio-2898manohar-ME_QKART_FRONTEND_V2",
  },
 
  {
    id: 3,
    name: "Social-app",
    img: social,
    link: "https://social-app-clone-beta.vercel.app",
    skills: "Reactjs,Vite,Chakra UI,Firebase",
    github: "https://github.com/manohar12-max/instagram-clone/tree/main",
  },
  {
    id: 4,
    name: "Realtor",
    img: realtor,
    link: "https://realtor-clone-react.vercel.app/",
    skills: "Reactjs,Vite,TailwindCss,Firebase",
    github: "https://github.com/manohar12-max/realtor-clone-react/tree/main",
  },
  {
    id: 5,
    name: "Xflix-Video-Share",
    img: xflix,
    link: "https://xflix.vercel.app/",
    skills: "ReactJs,Material UI,MongoDb",
    github:
      "https://github.com/manohar12-max/xflix",
  },

  {
    id: 6,
    name: "Next-Auth",
    img: auth,
    link: "https://next-auth-02.vercel.app/",
    skills: "Next Js,TailwindCss,",
    github: "https://github.com/manohar12-max/next-auth/tree/main",
  },
  {
    id: 7,
    name: "Video-Clone",
    img: video,
    link: "https://video-clone-khaki.vercel.app/",
    skills: "ReactJs,TailwindCSS,Rapid API",
    github: "https://github.com/manohar12-max/video-clone/tree/master",
  },

  {
    id: 8,
    name: "Gaming-Lists",
    img: gaming,
    link: "https://gaming-list.vercel.app/",
    skills: "ReactJs,TailwindCSS,Rapid API",
    github: "https://github.com/manohar12-max/gaming-list/tree/main",
  },
  {
    id: 9,
    name: "#Hashtag-marketing",
    img: hashtag,
    link: "https://hashtag-digital-marketing-page.vercel.app/",
    skills: "HTML,CSS",
    github: "https://github.com/manohar12-max/Hashtag-digital-marketing-page/blob/main/js/main.js",
  },
  {
    id: 10,
    name: "Restaurant",
    img: restoran,
    link: "https://restoran-landing-page.vercel.app/",
    skills: "HTML,CSS",
    github: "https://github.com/manohar12-max/Restoran-landingpage",
  },
  {
    id: 11,
    name: "CineHub",
    img: cinehub,
    link: "https://cinehub-7chl.vercel.app/",
    skills: "NextJs,TypeScript,Tailwind Css,MongoDb",
    github:
      "https://github.com/manohar12-max/cinehub",
  },
];
const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My projects</span>
      <div className="projects__container container grid">
        {project.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
