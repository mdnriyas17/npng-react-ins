import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/npng-logo(1).png";
import imagesty1 from "../img/sty-1.png";
import imageabout from "../images/about2.jpg";
import bannerimage from "../images/banner.jpg";
import imagefullstack from "../images/fullstack.jpg";
import imaagefront from "../images/frontend.jpg";
import imagebackend from "../images/backend.jpg";
import imageweb from "../images/web.jpg";
import imagecommunication from "../images/comminication.jpg";
import imageaptitude from "../images/aptitute.jpg";
const Services = () => {
  return <>
    <div className="container-fluid p-0">
        <nav className="navbar zindex navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0 position-fixed top-0">
           <Link to="/">
           <a  className="navbar-brand p-0">
                <img src={image1} alt="Logo"/>
            </a>
           </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 px-4">
                <Link to="/"> <a  className="nav-item nav-link active">
                Home
              </a></Link>
              <Link to="/about"><a className="nav-item nav-link ">
                About
              </a></Link>
              <Link to="/services"><a  className="nav-item nav-link">
                Services
              </a></Link>
              <Link to="/contectus">
              <a className="nav-item nav-link">
                Contact Us
              </a>
              </Link>
                </div>
            </div>
        </nav>
    </div>

      <div className="container-fluid bg-breadcrumb">
        <ul className="breadcrumb-animation">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div className="container text-center py-5" style={{maxWidth: 900}}>
            <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Services</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link to="/"><a>Home</a></Link></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-primary">Service</li>
                </ol>
        </div>
    </div>
    <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 className="mb-1 text-primary">Our Service</h4>
            <h1 className="display-5 mb-4">What We Can Do For You</h1>
            <p className="mb-0">
              At NPNG, we offer a comprehensive range of services designed to
              empower individuals and businesses in their pursuit of excellence
              in web development. From personalized training programs to
              tailored consulting services, we're committed to providing the
              support and expertise you need to succeed in today's digital
              landscape.
            </p>
          </div>
          <div className="row g-4 flex_cont ">
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imagefullstack} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Full Stack Development</h4>
                  <p className="mb-4">
                    Whether you're starting your journey or leveling up your
                    skills, our expert-led programs provide the tools and
                    knowledge you need to succeed in the fast-paced world of
                    full-stack development.
                  </p>
                 <Link to="/course">  <a
                    
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imaagefront} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Frontend Development</h4>
                  <p className="mb-4">
                    Dive into the realm of web development with NPNG Institute.
                    Our curated courses in frontend development encompass HTML,
                    CSS, JavaScript, Bootstrap, and ReactJS.{" "}
                  </p>
                 <Link to="/course">
                 <a
                    
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imagebackend} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Backend Development</h4>
                  <p className="mb-4">
                    Explore our comprehensive courses covering Java, MySQL, and
                    Spring Boot. Gain the skills and knowledge to build robust,
                    scalable backend systems that power dynamic web
                    applications.{" "}
                  </p>
                 <Link to="/course">
                 <a
                    
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imageweb} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Web Development</h4>
                  <p className="mb-4 text-left">
                    Your gateway to comprehensive web development training.
                    Explore our courses covering Adobe tools, Figma, HTML, CSS,
                    and JavaScript. Learn to craft stunning, user-friendly
                    websites and applications from scratch.{" "}
                  </p>
                 <Link to="/course">
                 <a
                    
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                 </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imagecommunication} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Comminication</h4>
                  <p className="mb-4 text-left">
                    Our communication development courses cover a wide range of
                    topics, including verbal and written communication,
                    interpersonal skills, public speaking, and professional
                    etiquette.
                  </p>
                  <Link to="/course">
                  <a
                   
                   className="btn btn-light rounded-pill text-primary py-2 px-4"
                 >
                   Read More
                 </a>
                 </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center rounded p-4">
                <div className="service-icon d-inline-block bg-light rounded mb-4">
                  <div className="service_icon">
                    <img src={imageaptitude} alt="" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Aptitute</h4>
                  <p className="mb-4 text-left">
                    Our aptitude development courses cover a wide range of
                    topics, including critical thinking, problem-solving,
                    creativity, communication, teamwork, and time management
                  </p>
                 <Link to="/course">  <a
                    
                    className="btn btn-light rounded-pill text-primary py-2 px-4"
                  >
                    Read More
                  </a>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="container-fluid FAQ bg-light overflow-hidden py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button rounded-top" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseTOne">
                                    Frontend Development
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p> Welcome to NPNG Institute, your premier destination for mastering frontend
                                            development. Frontend development is the process of creating the visible
                                            parts of a website or web application thatusers interact with directly. It
                                            involves using technologies such as HTML, CSS, and JavaScript to build user
                                            interfaces and ensure seamless functionality across various devices and
                                            browsers.</p>
                                        <p> HTML (Hypertext Markup Language) serves as the foundation of web
                                            development, providing the structure and content of web pages. It defines
                                            the layout of elements such as text, images, and multimedia, enabling
                                            developers to create well-organized and accessible websites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed rounded-top" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Backend Development
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p>Backend development is the foundation of web applications, responsible for
                                            handling server-side operations and database management. It
                                            involves using technologies such as Java, MySQL, and Spring Boot to build
                                            robust and scalable backend systems.</p>
                                        <p>Java is a versatile programming language widely used in backend development
                                            for its platform independence and strong community
                                            support. With Java, developers can create server-side applications,
                                            implement business logic, and handle complex computations efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed rounded-top" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Web Development
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p>Web development encompasses a range of skills and technologies essential for
                                            creating websites and web applications that deliver exceptional user
                                            experiences.</p>
                                        <p>Adobe Creative Suite is a suite of software tools used by web developers for
                                            graphic design, video editing, and web development. Programs like Photoshop,
                                            Illustrator, and XD are invaluable for
                                            creating visually stunning designs and prototypes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed rounded-top" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    Full Stack Development
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p> Full-stack development involves working on both the frontend and backend
                                            components of web applications, covering a wide range of technologies and
                                            skills.</p>

                                        <p> HTML, CSS, and JavaScript form the foundation of frontend development,
                                            allowing developers to create visually appealing and interactive user
                                            interfaces. HTML provides the structure, CSS handles the styling, and
                                            JavaScript adds interactivity and functionality to web pages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed rounded-top" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    Comminication
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p> Enhance your communication skills with NPNG's Development classNamees. From
                                            effective team collaboration to
                                            clear client communication, our courses empower web developers to excel in
                                            all aspects of professional
                                            communication. </p>
                                        <p>Learn to articulate ideas, give impactful presentations, and collaborate
                                            seamlessly with
                                            develop the communication skills essential for success in the tech industry.
                                            colleagues and clients. Our expert-led programs combine theory with
                                            practical exercises to ensure you</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed rounded-top" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                    aria-controls="collapseSix">
                                    Aptitude
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body my-2">
                                    <div>
                                        <p>Elevate your coding prowess with NPNG's Aptitude Development classNamees. Unlock
                                            your potential through
                                            hands-on learning, problem-solving challenges, and expert guidance. From
                                            mastering algorithms to honing
                                            critical thinking skills, our comprehensive programs prepare you for success
                                            in the ever-evolving tech
                                            industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                    <div className="FAQ-img RotateMoveRight rounded">
                        <img src="img/about-1.png" className="img-fluid w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="footer-item d-flex flex-column">
                        <h4 className="mb-4 text-dark">Quick Links</h4>
                <Link to="/"> <a > Home</a></Link>
                <Link to="/about"> <a > About Us</a></Link>
                <Link to="/services"> <a > Services</a></Link>
                <Link to="/contectus"> <a > Contact Us</a></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="footer-item d-flex flex-column">
                        <h4 className="mb-4 text-dark">Services</h4>
                        <Link to="/course"> <a > Frontend Development</a></Link>
                <Link to="/course"> <a > Backend Development</a></Link>
                <Link to="/course"> <a > Full Stack Development</a></Link>
                <Link to="/course"> <a > Web Development</a></Link>
                <Link to="/course"> <a > Communication</a></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="footer-item d-flex flex-column">
                        <h4 className="mb-4 text-dark">Contact Info</h4>
                        <a href=""><i className="fa fa-map-marker-alt me-2"></i> No 18, 2nd St, Balakrishnapuram,
                            Adambakkam, Chennai, Ramapuram, Tamil Nadu 600088</a>
                        <a href="mailto:hello@npng.in"><i className="fas fa-envelope me-2"></i> hello@npng.in</a>
                        <a href="tel:+917200168369"><i className="fas fa-phone me-2"></i> +91 7200168369</a>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-share fa-2x text-secondary me-2"></i>
                            <a className="btn-square btn btn-primary rounded-circle mx-1"
                                href="https://www.facebook.com/profile.php?id=61551830191994&mibextid=ZbWKwL"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a className="btn-square btn btn-primary rounded-circle mx-1"
                                href="https://www.instagram.com/npng_in?utm_source=qr&r=nametag"><i
                                    className="fab fa-instagram"></i></a>
                            <a className="btn-square btn btn-primary rounded-circle mx-1" href="https://www.linkedin.com/company/npngoffical/"><i
                                    className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-md-6 text-center text-md-start mb-md-0">
                    <span className="text-white"><a href="https://www.npng.in/"><i className="fas fa-copyright text-light me-2"></i><span className="text-light">2023 </span>Npng</a>, All
                        right reserved.</span>
                </div>

            </div>
        </div>
    </div>
  </>;
};

export default Services;
