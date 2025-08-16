import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselProjects.css";
import deepspacex from "../assets/img/DeepSpaceX.png";
import projImg1 from "../assets/img/CDOS1.png";
import projImg2 from "../assets/img/cpp.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/scp.png";
//import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/bg1.jpg";

function CarouselProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Display 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }, // Fall back to 1 slide on small screens
      },
    ],
  };

  const projects = [
    {
      img: projImg1,
      title: "Personal Finance Tracker",
      link: "https://github.com/Priya-1110/Personal-finance-tracker",
    },
    {
      img: deepspacex,
      title: "DeepSpaceX",
      link: "https://deep-space-x.vercel.app/",
    },
    {
      img: projImg2,
      title: "Vintage Car Auction Platform",
      link: "https://github.com/Priya-1110/Auction_Platform",
    },
    {
      img: projImg3,
      title: "Blockchain",
      link: "https://youtu.be/dkE5tJlaEMo?si=S732Bc38yCtWiRaY",
    },
    {
      img: projImg4,
      title: "SAVINGS & INVESTMENT PLANNER",
      link: "hhttps://github.com/Priya-1110/inventorysavingstrackerapi",
    },
  ];

  return (
    <section className="projects-carousel" style={{ backgroundImage: `url(${colorSharp2})` }}>
      <div className="container">
        <h2>Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CarouselProjects;