import React from 'react';
import image1 from "../images/npng-logo(1).png";
import Aboutlogo from "../images/aboutc.jpg";
import featurelogo from "../images/feature.jpg";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>

    {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
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
        <div className="container text-center py-5" >
            <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                <li className="breadcrumb-item"><Link to="/"><a >Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to="#"><a>Pages</a></Link></li>
                    <li className="breadcrumb-item active text-primary">About</li>
                </ol>
        </div>
    </div>

    <div className="container-fluid overflow-hidden py-5 mt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="RotateMoveLeft">
                        <img src={Aboutlogo} className="img-fluid w-100" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 className="mb-4 text-primary">About Us</h1>
            
                    <p className="mb-4 about_text text-md">NPNG we are your trusted partner for all your IT needs. Our expert team specializes
                        in crafting custom website solutions that are both visually stunning and highly functional.
                        Whether you're a small business or a large enterprise, we tailor our services to meet your
                        unique requirements.

                        From responsive web design to seamless e-commerce integration, we have the skills and expertise
                        to bring your online vision to life. Let us elevate your online presence with cutting-edge
                        technology and creative design.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid feature overflow-hidden py-5">
        <div className="container py-5">
            <div className="row g-5">
                
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                    <h1 className="text-primary">Fearutes</h1>
                    <p className="mb-4">At NPNG, we don't just offer courses; we provide an unparalleled learning experience that sets the standard for excellence in web development education. With a commitment to quality, innovation, and student success, NPNG stands as a beacon of excellence in the world of online education.
                    </p>
                    <div className="row  g-4">
                        <div className="col-6">
                            <div className="d-flex">
                                <i className="fas fa-newspaper fa-4x text-secondary"></i>
                                <div className="d-flex flex-column ms-3">
                                    <h2 className="mb-0 fw-bold">5</h2>
                                    <small className="text-dark">Running Batchs</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <i className="fas fa-users fa-4x text-secondary"></i>
                                <div className="d-flex flex-column ms-3">
                                    <h2 className="mb-0 fw-bold">12</h2>
                                    <small className="text-dark">Happy Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <Link to="/cource"><a className="btn btn-primary rounded-pill py-3 px-5">Read More</a></Link>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="feature-img RotateMoveLeft h-100" >
                        <img src={featurelogo} className="img-fluid w-100 h-100" alt=""/>
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
                        <Link to="/frontend"> <a > Frontend Development</a></Link>
                <Link to="/backend"> <a > Backend Development</a></Link>
                <Link to="/fullstack"> <a > Full Stack Development</a></Link>
                <Link to="/webdevelopment"> <a > Web Development</a></Link>
                <Link to="/comminication"> <a > Communication</a></Link>
               
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="footer-item d-flex flex-column">
                        <h4 className="mb-4 text-dark">Contact Info</h4>
                        <a href=""><i className="fa fa-map-marker-alt me-2"></i> No 18, 2nd St, Balakrishnapuram,
                            Adambakkam, Chennai, Ramapuram, Tamil Nadu 600088</a>
                        <a href="mailto:hello@npng.in"><i className="fas fa-envelope me-2"></i> hello@npng.in</a>
                        <a href="tel:+917200168369"><i className="fas fa-phone-alt"></i> +91 7200168369</a>
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




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <script src="../js/main.js"></script>
    </>
  );
}

export default About;
