import React from "react";
import image1 from "../images/npng-logo(1).png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Contectus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonclick, setButtonclick] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !message || !phone) {
      alert("Please fill all the fields");
      return;
    }
  
    setButtonclick(true);
  
    const data = {
      name,
      email,
      message,
      phone,
      service,
    };
    try {
      const response = await axios.post("https://for-zohomailer.onrender.com/contact", data);
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setButtonclick(false);
    } catch (error) {
      alert("Network error. Please try again later.");
      setButtonclick(false);
    }
  };
  
  return (
    <>
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
            <div className="navbar-nav ms-auto py-0 px-4">
            <Link to="/"> <a  className="nav-item nav-link">
                Home
              </a></Link>
              <Link to="/about"><a className="nav-item nav-link ">
                About
              </a></Link>
              <Link to="/services"><a  className="nav-item nav-link">
              Courses
              </a></Link>
              <Link to="/contectus">
              <a className="nav-item nav-link active">
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
        <div className="container text-center py-5">
          <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Contact Us
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/"><a>Home</a></Link>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li> */}
            <li className="breadcrumb-item active text-primary">Contact Us</li>
          </ol>
        </div>
      </div>
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 className="text-primary mb-4">Contact Us</h4>
            <h1 className="display-5 mb-4">Get In Touch With Us</h1>
            <p className="mb-0">
              Whether you're a prospective student, a current learner, a
              business partner, or a member of the media, we're here to help.
              Reach out to us with your questions, comments, or requests. We
              look forward to connecting with you!
            </p>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <h2 className="display-5 mb-4">Our Contact Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="off"
                        value={name}
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        autoComplete="off"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        value={phone}
                        autoComplete="off"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label>Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                     <select className="form-select" id="service" value={service} onChange={(e) => setService(e.target.value)}>
                        <option selected>Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Video Editing">Video Editing</option>
                      </select>
                      <label>Select Service</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <label>Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button disabled={buttonclick} className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-light d-flex align-items-center justify-content-center mb-3">
                  <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <div className="ms-4">
                  <h4>Addresses</h4>
                  <p className="mb-0">
                    No 18, 2nd St, Balakrishnapuram, Adambakkam, Chennai,
                    Ramapuram, Tamil Nadu 600088
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-light d-flex align-items-center justify-content-center mb-3">
                  <i className="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <div className="ms-4">
                  <h4>Mobile</h4>
                  <p className="mb-0">
                    <a href="tel:+917200168369">+91 7200168369</a>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-light d-flex align-items-center justify-content-center mb-3">
                  <i className="fa fa-envelope-open fa-2x text-primary"></i>
                </div>
                <div className="ms-4">
                  <h4>Email</h4>
                  <p className="mb-0">
                    <a href="mailto:hello@npng.in">hello@npng.in</a>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-4">
                  <div className="bg-light d-flex align-items-center justify-content-center">
                    <i className="fas fa-share fa-2x text-primary"></i>
                  </div>
                </div>
                <div className="d-flex">
                  <a
                    className="btn btn-lg-square btn-primary rounded-circle me-2"
                    href="https://www.facebook.com/profile.php?id=61551830191994&mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-lg-square btn-primary rounded-circle mx-2"
                    href="https://www.instagram.com/npng_in?utm_source=qr&r=nametag"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-primary rounded-circle mx-2"
                    href="https://www.linkedin.com/company/npngoffical/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded h-100">
                <iframe
                  className="rounded w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9777035283552!2d80.20440347479934!3d12.994654299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675c03f98cd9%3A0x317064829d81114d!2s2nd%20St%2C%20Ramapuram%2C%20Balakrishnapuram%2C%20Adambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600088!5e0!3m2!1sen!2sin!4v1710786747211!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
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

export default Contectus;
