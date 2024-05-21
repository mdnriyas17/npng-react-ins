import React from "react";
import image1 from "../images/npng-logo(1).png";
import imagesty1 from "../img/sty-1.png";
import imageabout from "../images/aboutc.jpg";
import bannerimage from "../images/banner.jpg";
import imagefullstack from "../images/fullstack.jpg";
import imaagefront from "../images/frontend.jpg";
import imagebackend from "../images/backend.jpg";
import imageweb from "../images/web.jpg";
import imagecommunication from "../images/comminication.jpg";
import imageaptitude from "../images/aptitute.jpg";
import { Spin } from "antd";
import {Link } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary"  role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

      <div className="container-fluid p-0">
        <nav className="navbar zindex navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0 position-fixed top-0">
        <Link to="/">
           <a  className="navbar-brand p-0">
                <img src={image1} alt="Logo"/>
            </a>
           </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
             <Link to="/"> <a  className="nav-item nav-link active">
                Home
              </a></Link>
              <Link to="/about"><a className="nav-item nav-link ">
                About
              </a></Link>
              <Link to="/services"><a  className="nav-item nav-link">
              Courses
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

      <div className="hero-header overflow-hidden pb-5 px-5">
        <div className="rotate-img">
          <img src={imagesty1} className="img-fluid w-100" alt="" />
          <div className="rotate-sty-2"></div>
        </div>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <h1
              className="display-5 text-dark mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              NPNG ONLINE TRAINING COURSES
            </h1>
            <p className="fs-5 mb-4 wow fadeInUp" data-wow-delay="0.5s">
            NPNG is the best place to learn IT courses in chennai. We having top level of mentors,
practical classes, 100% placement assistance etc., Join our courses Today!!
            </p>
          <Link to="/contectus">
          <a
              
              className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              Get Started
            </a>
          </Link>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <img src={bannerimage} className="img-fluid w-100 h-100" />
          </div>
        </div>
      </div>

      <div className="container-fluid overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="">
                <div className="about_image">
                  <img src={imageabout} className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h4 className="mb-1 text-primary">About Us</h4>
              <h1 className="display-5 mb-4">Get Started Easily With NPNG</h1>
              <p className="mb-4">
                NPNG we are your trusted partner for all your IT needs. Our
                expert team specializes in crafting custom website solutions
                that are both visually stunning and highly functional. Whether
                you're a small business or a large enterprise, we tailor our
                services to meet your unique requirements.
              </p>
              <Link to="/about">
              <a
               className="btn btn-primary rounded-pill py-3 px-5"
             >
               About More
             </a>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 className="mb-1 text-primary">Our Courses</h4>
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
                  <Link to="/fullstack">
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
                 <Link to="/frontend">
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
                 <Link to="/backend">
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
                <Link to="/webdevelopment">

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
                  <h4 className="mb-4">Communication</h4>
                  <p className="mb-4 text-left">
                    Our communication development courses cover a wide range of
                    topics, including verbal and written communication,
                    interpersonal skills, public speaking, and professional
                    etiquette.
                  </p>
                 <Link to="/comminication">
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
                    <img src={imageaptitude} alt="aptitude" />
                  </div>
                </div>
                <div className="service-content">
                  <h4 className="mb-4">Aptitude</h4>
                  <p className="mb-4 text-left">
                    Our aptitude development courses cover a wide range of
                    topics, including critical thinking, problem-solving,
                    creativity, communication, teamwork, and time management
                  </p>
                 <Link to="/aptitude">
                 <a
                   
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

      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Quick Links</h4>
                <Link to="/"> <a > Home</a></Link>
                <Link to="/about"> <a > About Us</a></Link>
                <Link to="/services"> <a > Courses</a></Link>
                <Link to="/contectus"> <a > Contact Us</a></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Courses</h4>
                <Link to="/frontend"> <a > Frontend Development</a></Link>
                <Link to="/backend"> <a > Backend Development</a></Link>
                <Link to="/fullstack"> <a > Full Stack Development</a></Link>
                <Link to="/webdevelopment"> <a > Web Development</a></Link>
                <Link to="/comminication"> <a > Communication</a></Link>
                <Link to="/aptitude"> <a > Aptitude</a></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Contact Info</h4>
                <Link to="/contectus">  <a><i className="fa fa-map-marker-alt me-2"></i> No 18, 2nd St, Balakrishnapuram,
                            Adambakkam, Chennai, Ramapuram, Tamil Nadu 600088</a></Link>
                <a href="mailto:hello@npng.in">
                  <i className="fas fa-envelope me-2"></i> hello@npng.in
                </a>
                <a href="tel:+917200168369">
                  <i className="fas fa-phone-alt"></i> +91 7200168369
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2"></i>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href="https://www.facebook.com/profile.php?id=61551830191994&mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href="https://www.instagram.com/npng_in?utm_source=qr&r=nametag"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href="https://www.linkedin.com/company/npngoffical/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
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
              <span className="text-white">
                <a href="https://www.npng.in/">
                  <i className="fas fa-copyright text-light me-2"></i>
                  <span className="text-light">{new Date().getFullYear()} </span>Npng
                </a>
                , All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

     

    </>
  );
};

export default App;
