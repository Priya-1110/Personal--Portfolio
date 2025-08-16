import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import projImg0 from "../assets/img/aws-certified-solutions-architect-associate.png";
import projImg1 from "../assets/img/b_cloud.png";
import projImg2 from "../assets/img/b_storage2.png";
import projImg3 from "../assets/img/b_compute.png";
import projImg5 from "../assets/img/i_web.jpeg";
import projImg7 from "../assets/img/b_network.png";
import projImg8 from "../assets/img/b_data.png";
import projImg9 from "../assets/img/b_ibm.png";
import projImg10 from "../assets/img/b_ai.jpg";
import projImg11 from "../assets/img/c_aws.png";
import projImg12 from "../assets/img/c_go.png";
import projImg13 from "../assets/img/c_js.png";
import projImg16 from "../assets/img/c_linux.png";
import projImg17 from "../assets/img/c_ps.png";
import projImg18 from "../assets/img/c_python.png";
import projImg19 from "../assets/img/c_sql1.png";
import projImg21 from "../assets/img/c_cn.png";
import projImg22 from "../assets/img/c_coursera.png";
import projImg23 from "../assets/img/i_android.jpeg";
import projImg24 from "../assets/img/i_smt.jpeg";
import projImg25 from "../assets/img/i_web.jpeg";

import colorSharp2 from "../assets/img/banner-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const certifications = [
        {
      title: 'Coursera',
      description: "Google Cloud Fundamentals: Core Infrastructure",
      imgUrl: projImg22,
      url1: 'https://drive.google.com/file/d/1Y0flUV1UMg33Q_oPMZ3TRMaWP0Kws2Le/view?usp=sharing',
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      description: "Amazon Web Services (AWS)",
      imgUrl: projImg11,
      url1: 'https://drive.google.com/file/d/1ivOR1VX7Drkx2szLDKGBKX0LcsB4SgX2/view?usp=drive_link',
    },
    {
      title: 'Go Lang',
      description: "HackerRank",
      imgUrl: projImg12,
      url1: 'https://drive.google.com/file/d/1-n3QMusyH3aqODrFB2gPrDpdzInmEA0C/view?usp=sharing',
    },
    {
      title: 'MySQL ',
      description: "HackerRank",
      imgUrl: projImg19,
      url1: 'https://drive.google.com/file/d/1-zWOM1OapULZIrn9Ww_5tf6MIARgSN5D/view?usp=drive_link',
    },
    {
      title: 'Problem Solving In Python',
      description: "HackerRank",
      imgUrl: projImg17,
      url1: 'https://drive.google.com/file/d/1-yOzVl_qW4IMc1CBQsj-WKOLau5Pb7Qj/view?usp=sharing',
    },
    {
      title: 'Python',
      description: "HackerRank",
      imgUrl: projImg18,
      url1: 'https://drive.google.com/file/d/1-sV5I4A0Qu3ljRz_oKt1h9yKXRX28YGy/view?usp=sharing',
    },
        {
      title: 'HackerRank',
      description: "Javascript Basic",
      imgUrl: projImg13,
      url1: 'https://drive.google.com/file/d/1-jMaJFvI3OJfzg5NvLkww5Z4IULf7b5k/view',
    },
    {
      title: 'Linux Tutorial',
      description: "Great Learning",
      imgUrl: projImg16,
      url1: 'https://drive.google.com/file/d/1-nXQxWybFxBTlnlG6pzAFWTB7n9snal3/view?usp=sharing',
    },
    {
      title: 'Computer Networking',
      description: "Great Learning",
      imgUrl: projImg21,
      url1: 'https://drive.google.com/file/d/1A5Hby8NXArrLdNrstYg1gPH-xhkmddVo/view',
    },
  ];

  const projects = [
    {
      title: "AWS Solutions Architect Associate",
      imgUrl: projImg0,
      url1: 'https://www.credly.com/badges/118a4807-d2e4-4c41-97cc-37a47b8d3e19/linked_in_profile',
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      imgUrl: projImg1,
      url1: 'https://www.credly.com/badges/f9089f0a-5d16-456c-999a-f2e4242c25ef/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Storage",      
      imgUrl: projImg2,
      url1: 'https://www.credly.com/badges/a87de0c3-0aed-4cd6-b83d-2a98de057af7/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Compute", 
      imgUrl: projImg3,
      url1:'https://www.credly.com/badges/118a4807-d2e4-4c41-97cc-37a47b8d3e19/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Networking",
      imgUrl: projImg7,
      url1:'https://www.credly.com/badges/c6d85302-c810-4670-b7a2-d4d4d245cf47/linked_in_profile',
    },
    {
      title: "AWS Educate Getting Started with Databases",
      imgUrl: projImg8,
      url1:'https://www.credly.com/badges/6ca2b3b2-14e3-49b2-b7ce-b178bb81a795/linked_in_profile',
    },
    {
      title: "Introduction to Generative AI",
      imgUrl: projImg10,
      url1:'https://www.cloudskillsboost.google/public_profiles/e60dae19-9420-434b-bf90-7b88f3d49b5c/badges/5647596?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: "Python for Data Science",
      imgUrl: projImg9,
      url1:'https://www.credly.com/badges/d2a6e07b-7bab-41e7-92d8-e11149f7bad7/linked_in_profile',
    },
  ];

  const internships = [
    {
      title: 'Android App Development',
      description: 'During my internship, I learned key aspects of Android development:Java/Kotlin basics, Android Studio setup, App components, intents, Services, broadcast receivers, UI design, event handling, SMS, calls, audio, Bluetooth, Storage management.This internship provided me with practical skills and a strong foundation in Android development.',
      imgUrl: projImg23,
      url1: 'https://drive.google.com/file/d/1C8PdxN55Q4ECAjSr-H1sHtk2WkIdWyFg/view?usp=drivesdk',
    },
    {
      title: 'Web Designing',
      description: `Throughout my internship, I gained expertise in web development with AngularJS, HTML, CSS, and JavaScript. I utilized these skills to design the front-end of the company's Transport Management System project, improving both user interface and functionality. This experience deepened my understanding of web technologies and their practical applications in real-world projects.`,
      imgUrl: projImg25,
      url1: 'https://drive.google.com/file/d/1COXJglGYKOuaV8jQ-lMI1WiQ1PBC3J-f/view?usp=drivesdk',
    },
    {
      title: 'SMD Line Production',
      description: 'Throughout the internship, I developed a deep understanding of SMD production processes, including solder paste application, pick-and-place operations, and reflow soldering techniques.Working closely with industry professionals, I gained expertise in operating and maintaining SMD assembly lines, ensuring the efficient production of electronic components.',
      imgUrl: projImg24,
      url1: 'https://drive.google.com/file/d/1CNO7pgZrUQT0PX0jPGjkkfVa-SiuILjk/view?usp=drivesdk',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Credentials</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Badges</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Internships</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {certifications.map((certification, index) => (
                          <EducationCard key={index} {...certification} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {internships.map((internship, index) => (
                          <Col md={12} key={index} className="mb-4">
                            <div className="internship-card" style={{ display: 'flex', alignItems: 'center', background: '#2a2a72', borderRadius: '15px', padding: '20px', color: '#fff' }}>
                              <div className="intern-image" style={{ flex: '0 0 30%', marginRight: '20px' }}>
                                <img src={internship.imgUrl} alt={internship.title + ' Image'} style={{ width: '100%', borderRadius: '10px' }} />
                              </div>
                              <div className="intern-content" style={{ flex: '1', position: 'relative' }}>
                                <div className="intern-description" style={{ display: 'block' }}>
                                  {internship.description}
                                </div>
                                <div className="intern-title" style={{ display: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                  {internship.title}
                                </div>
                                <a href={internship.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00aaff', textDecoration: 'none' }}>View More</a>
                              </div>
                            </div>
                            <style>
                              {`
                                .internship-card .intern-content:hover .intern-description {
                                  display: none;
                                }
                                .internship-card .intern-content:hover .intern-title {
                                  display: block;
                                }
                                .internship-card .intern-content .intern-description {
                                  transition: opacity 0.3s ease;
                                }
                                .internship-card .intern-content:hover .intern-description {
                                  opacity: 0;
                                }
                              `}
                            </style>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration" />
    </section>
  )
}