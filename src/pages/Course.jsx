import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/npng-logo(1).png'
const course = () => {
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
            <div className="navbar-nav ms-auto py-0">
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
        <div className="container text-center py-5" style={{maxWidth:900}}>
            <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Courses</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link><a>Home</a></Link></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-primary">Courses</li>
                </ol>
        </div>
    </div>
    <div className="content_course" id="course_content">
        <h1 className="display-5 text-dark mb-4 text-center wow fadeInUp" data-wow-delay="0.3s">NPNG ONLINE TRAINING COURSES
        </h1>
        <div className="container-fluid FAQ bg-light overflow-hidden py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button rounded-top" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Frontend Development
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <div>
                                            <p> Welcome to NPNG Institute, your premier destination for mastering
                                                frontend development. Frontend development is the process of creating
                                                the visible parts of a website or web application thatusers interact
                                                with directly. It involves using technologies such as HTML, CSS, and
                                                JavaScript to build user interfaces and ensure seamless functionality
                                                across various devices and browsers.</p>
                                            <p> HTML (Hypertext Markup Language) serves as the foundation of web
                                                development, providing the structure and content of web pages. It
                                                defines the layout of elements such as text, images, and multimedia,
                                                enabling developers to create well-organized and accessible websites.
                                            </p>
                                            <p> CSS (Cascading Style Sheets) is used to style HTML elements and enhance
                                                the visual appearance of web pages. With CSS, developers can customize
                                                colors, fonts, spacing, and layout, ensuring a consistent and visually
                                                appealing design across different devices.</p>
                                            <p>JavaScript is a dynamic programming language that adds interactivity and
                                                functionality to web pages. It allows developers to create interactive
                                                features such as animations, form validation, and dynamic content
                                                updates, enhancing user engagement and experience.</p>
                                            <p>Bootstrap is a popular front-end framework that simplifies the process of
                                                building responsive and mobile-friendly websites. It provides
                                                pre-designed components, layouts, and CSS styles, allowing developers to
                                                create professional-looking web interfaces quickly and efficiently.</p>
                                            <p>ReactJS is a powerful JavaScript library for building user interfaces,
                                                developed by Facebook. It allows developers to create reusable UI
                                                components and manage the state of web applications efficiently. With
                                                its component-based architecture and virtual DOM (Document Object
                                                Model), ReactJS facilitates the development of scalable and maintainable
                                                web applications.</p>
                                            <p>At NPNG Institute, our frontend development courses cover all these
                                                essential technologies, empowering you to become a proficient frontend
                                                developer. Whether you're a beginner or an experienced coder, our
                                                expert-led programs provide hands-on training and real-world projects to
                                                help you master the fundamentals and advance your skills in frontend
                                                development.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingcTwo">
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
                                            <p>Backend development is the foundation of web applications, responsible
                                                for handling server-side operations and database management. It
                                                involves using technologies such as Java, MySQL, and Spring Boot to
                                                build robust and scalable backend systems.</p>
                                            <p>Java is a versatile programming language widely used in backend
                                                development for its platform independence and strong community
                                                support. With Java, developers can create server-side applications,
                                                implement business logic, and handle complex computations efficiently.
                                            </p>
                                            <p>MySQL is a popular open-source relational database management system
                                                (RDBMS) used for storing and retrieving data in backend
                                                applications. It offers features such as data integrity, transactions,
                                                and scalability, making it an ideal choice for managing structured data
                                                in
                                                web applications.</p>
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
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <div>
                                            <p>Web development encompasses a range of skills and technologies essential
                                                for creating websites and web applications that deliver exceptional user
                                                experiences.</p>
                                            <p>Adobe Creative Suite is a suite of software tools used by web developers
                                                for graphic design, video editing, and web development. Programs like
                                                Photoshop, Illustrator, and XD are invaluable for
                                                creating visually stunning designs and prototypes.</p>
                                            <p>Figma is a collaborative interface design tool that enables web
                                                developers to create, prototype, and collaborate on designs in
                                                real-time. It streamlines the design process and facilitates seamless
                                                communication between designers and developers.</p>
                                            <p>HTML (Hypertext Markup Language) is the foundation of web development,
                                                used to structure the content of web pages. It defines the layout and
                                                organization of elements such as text, images, and multimedia, providing
                                                the structure for websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingcFoue">
                                    <button className="accordion-button collapsed rounded-top" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        Full Stack Development
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFoue"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <div>
                                            <p> Full-stack development involves working on both the frontend and backend
                                                components of web applications, covering a wide range of technologies
                                                and skills.</p>

                                            <p> HTML, CSS, and JavaScript form the foundation of frontend development,
                                                allowing developers to create visually appealing and interactive user
                                                interfaces. HTML provides the structure, CSS handles the styling, and
                                                JavaScript adds interactivity and functionality to web pages.</p>
                                            <p>
                                                Bootstrap is a frontend framework that simplifies the process of
                                                building responsive and mobile-friendly websites. It provides
                                                pre-designed components and layouts, enabling developers to create
                                                professional-looking interfaces quickly and efficiently.</p>

                                            <p> ReactJS is a JavaScript library for building user interfaces, known for
                                                its component-based architecture and virtual DOM. It allows developers
                                                to create reusable UI components and manage the state of web
                                                applications efficiently, enhancing productivity and scalability.</p>
                                            <p> Node.js is a server-side JavaScript runtime environment that enables
                                                developers to build scalable and high-performance backend systems. It
                                                uses an event-driven, non-blocking I/O model, making it ideal for
                                                building real-time web applications.
                                                real-world projects to help you master the intricacies of full-stack
                                                development.</p>

                                            <p>MongoDB is a popular NoSQL database used for storing and retrieving data
                                                in backend applications. It offers flexibility, scalability, and high
                                                performance, making it well-suited for handling large volumes of data in
                                                modern web applications.
                                                pages.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 mb-4">
                                <h2 className="accordion-header" id="headingcFive">
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
                                            <p>Effective communication is essential for success in the field of web
                                                development, and at NPNG, we're here to help you sharpen your
                                                communication skills and become a confident and effective communicator.
                                            </p>

                                            <p>Our communication development courses cover a wide range of topics,
                                                including verbal and written communication, interpersonal skills, public
                                                speaking, and professional etiquette. Whether you're communicating with
                                                colleagues, clients, or stakeholders, our courses will provide you with
                                                the tools and techniques you need to convey your ideas clearly,
                                                confidently, and persuasively.</p>

                                            <p>Through interactive workshops, role-playing exercises, and real-world
                                                simulations, we'll help you develop the ability to communicate
                                                effectively in any situation. You'll learn how to structure your
                                                thoughts, tailor your message to your audience, and deliver
                                                presentations that captivate and inspire.</p>

                                            <p>At NPNG, we understand that communication is not just about what you say,
                                                but how you say it. That's why our courses also focus on non-verbal
                                                communication, active listening, and empathy, helping you build stronger
                                                relationships and foster a positive and collaborative work environment.
                                            </p>

                                            <p>Whether you're a beginner looking to improve your communication skills or
                                                an experienced developer looking to take your communication to the next
                                                level, NPNG Institute has the resources and expertise to help you
                                                succeed. Join us and unlock your potential to become a confident and
                                                effective communicator in the dynamic and fast-paced world of web
                                                development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed rounded-top" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseSix">
                                        Aptitute
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body my-2">
                                        <div>
                                            <p>Aptitude development encompasses a range of skills and attributes essential for success in the field of web development.</p>

                                            <p>At NPNG, we understand that technical skills alone are not enough to thrive in the fast-paced and ever-evolving world of web development. That's why we 
                                                offer comprehensive aptitude development programs designed to equip aspiring web developers with the mindset, soft skills, and problem-solving abilities 
                                                needed to excel in their careers.</p>
                                            <p>Our aptitude development courses cover a wide range of topics, including critical thinking, problem-solving, creativity, communication, teamwork, and time management. These skills are crucial for effectively collaborating with colleagues, communicating with clients, and tackling complex challenges in web development projects.</p>

                                            <p>Through hands-on exercises, real-world projects, and expert guidance, we help our students cultivate a growth mindset and develop the confidence to tackle any challenge that comes their way. We believe that by investing in aptitude development, web developers can unlock their full potential and achieve  greater success in their careers.</p>
                                            
                                            <p>Whether you're a beginner looking to enter the field of web development or an experienced developer looking to sharpen your skills, NPNG Institute has the resources and expertise to help you reach your goals. Join us and embark on a journey of personal and professional growth as you become a skilled and confident web developer.</p>
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
                    <span className="text-white"><a href="https://www.npng.in/"><i className="fas fa-copyright text-light me-2"></i><span className="text-light">{new Date().getFullYear()} </span>Npng</a>, All
                        right reserved.</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default course