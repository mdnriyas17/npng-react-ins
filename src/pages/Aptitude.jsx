import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/npng-logo(1).png";
const Aptitude = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar zindex navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0 position-fixed top-0">
          <Link to="/">
            <a className="navbar-brand p-0">
              <img src={image1} alt="Logo" />
            </a>
          </Link>
          <h1 className="heading" style={{color:"black", fontWeight:"bold", fontSize:"30px"}}>NPNG</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 px-4">
              <Link to="/">
                {" "}
                <a className="nav-item nav-link active">Home</a>
              </Link>
              <Link to="/about">
                <a className="nav-item nav-link ">About</a>
              </Link>
              <Link to="/services">
                <a className="nav-item nav-link">Courses</a>
              </Link>
              <Link to="/contectus">
                <a className="nav-item nav-link">Contact Us</a>
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
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Our Courses
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li> */}
            <li className="breadcrumb-item active text-primary">
            Courses
            </li>
          </ol>
        </div>
      </div>
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 className="mb-1 text-primary"></h4>
            <h1 className="display-5 mb-4">Aptitude</h1>
            <p className="mb-0">
            Aptitude development encompasses a range of skills and attributes essential for success in the field of web development.
<hr/>
At NPNG, we understand that technical skills alone are not enough to thrive in the fast-paced and ever-evolving world of web development. That's why we offer comprehensive aptitude development programs designed to equip aspiring web developers with the mindset, soft skills, and problem-solving abilities needed to excel in their careers.
<hr/>
Our aptitude development courses cover a wide range of topics, including critical thinking, problem-solving, creativity, communication, teamwork, and time management. These skills are crucial for effectively collaborating with colleagues, communicating with clients, and tackling complex challenges in web development projects.
<hr/>
Through hands-on exercises, real-world projects, and expert guidance, we help our students cultivate a growth mindset and develop the confidence to tackle any challenge that comes their way. We believe that by investing in aptitude development, web developers can unlock their full potential and achieve greater success in their careers.
<hr/>
Whether you're a beginner looking to enter the field of web development or an experienced developer looking to sharpen your skills, NPNG Institute has the resources and expertise to help you reach your goals. Join us and embark on a journey of personal and professional growth as you become a skilled and confident web developer.
            </p>
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
                <Link to="/">
                  {" "}
                  <a> Home</a>
                </Link>
                <Link to="/about">
                  {" "}
                  <a> About Us</a>
                </Link>
                <Link to="/services">
                  {" "}
                  <a> Courses</a>
                </Link>
                <Link to="/contectus">
                  {" "}
                  <a> Contact Us</a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Courses</h4>
                <Link to="/frontend">
                  {" "}
                  <a> Frontend Development</a>
                </Link>
                <Link to="/backend">
                  {" "}
                  <a> Backend Development</a>
                </Link>
                <Link to="/fullstack">
                  {" "}
                  <a> Full Stack Development</a>
                </Link>
                <Link to="/webdevelopment">
                  {" "}
                  <a> Web Development</a>
                </Link>
                <Link to="/comminication">
                  {" "}
                  <a> Communication</a>
                </Link>
                <Link to="/aptitude">{" "} <a > Aptitude</a></Link>

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

export default Aptitude;
