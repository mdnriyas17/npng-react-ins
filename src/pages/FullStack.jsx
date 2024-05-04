import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/npng-logo(1).png";
const FullStack = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar zindex navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0 position-fixed top-0">
          <Link to="/">
            <a className="navbar-brand p-0">
              <img src={image1} alt="Logo" />
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
            <div className="navbar-nav ms-auto py-0 px-4">
              <Link to="/">
                {" "}
                <a className="nav-item nav-link active">Home</a>
              </Link>
              <Link to="/about">
                <a className="nav-item nav-link ">About</a>
              </Link>
              <Link to="/services">
                <a className="nav-item nav-link">Services</a>
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
            Our Services
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
              Full-Stack Development
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
            <h1 className="display-5 mb-4">Full-Stack Development</h1>
            <p className="mb-0">
            Full-stack development involves working on both the frontend and backend components of web applications, covering a wide range of technologies and skills.
<hr/>
HTML, CSS, and JavaScript form the foundation of frontend development, allowing developers to create visually appealing and interactive user interfaces. HTML provides the structure, CSS handles the styling, and JavaScript adds interactivity and functionality to web pages.
<hr/>
Bootstrap is a frontend framework that simplifies the process of building responsive and mobile-friendly websites. It provides pre-designed components and layouts, enabling developers to create professional-looking interfaces quickly and efficiently.
<hr/>
ReactJS is a JavaScript library for building user interfaces, known for its component-based architecture and virtual DOM. It allows developers to create reusable UI components and manage the state of web applications efficiently, enhancing productivity and scalability.
<hr/>
Node.js is a server-side JavaScript runtime environment that enables developers to build scalable and high-performance backend systems. It uses an event-driven, non-blocking I/O model, making it ideal for building real-time web applications. real-world projects to help you master the intricacies of full-stack development.
<hr/>
MongoDB is a popular NoSQL database used for storing and retrieving data in backend applications. It offers flexibility, scalability, and high performance, making it well-suited for handling large volumes of data in modern web applications. pages.
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
                  <a> Services</a>
                </Link>
                <Link to="/contectus">
                  {" "}
                  <a> Contact Us</a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Services</h4>
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
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Contact Info</h4>
                <a href="">
                  <i className="fa fa-map-marker-alt me-2"></i> No 18, 2nd St,
                  Balakrishnapuram, Adambakkam, Chennai, Ramapuram, Tamil Nadu
                  600088
                </a>
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
                  <span className="text-light">2023 </span>Npng
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

export default FullStack;
