import React, { Component } from 'react'
import file from "../../assets/resume_1.0.docx";

class AboutHelper extends Component {
    render() {
        return (
            <div className="about">
                <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>ABOUT <span>ME</span></h1>
                <span className="title-bg">Resume</span>
                </section>
                {/* Page Title Ends */}
                {/* Main Content Starts */}
                <section className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    <div className="row">
                    {/* Personal Info Starts */}
                    <div className="col-12 col-lg-5 col-xl-6">
                        <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                        </div>
                        <div className="col-12 d-block d-sm-none">
                            <img src="http://via.placeholder.com/300x300.jpg" className="img-fluid main-img-mobile" alt="my picture" />
                        </div>
                        <div className="col-6">
                            <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">first name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Jeremy</span> </li>
                            <li> <span className="title">last name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Blong</span> </li>
                            <li> <span className="title">Age :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">27 Years</span> </li>
                            <li> <span className="title">Nationality :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">American/caucasian</span> </li>
                            <li> <span className="title">Freelance :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span> </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">Address :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Charlotte, NC 28204</span> </li>
                            <li> <span className="title">phone :</span> <a href="tel:9808006253" className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+1 (980)-800-6253</a> </li>
                            <li> <span className="title">Email :</span> <a href="mailto:blongjeremy@gmail.com" className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">blongjeremy@gmail.com</a> </li>
                            <li> <span className="title">Skype :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">N/A</span> </li>
                            <li> <span className="title">langages :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">English</span> </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-3">
                            <a className="button" href={file}>
                            <span className="button-text">Download CV</span>
                            <span className="button-icon fa fa-download" />
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* Personal Info Ends */}
                    {/* Boxes Starts */}
                    <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                        <div className="row">
                        <div className="col-6">
                            <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">5</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">16</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box-stats">
                            <h3 className="poppins-font position-relative">11</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">Happy<span className="d-block"> freelance customers</span></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box-stats">
                            <h3 className="poppins-font position-relative">4</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">react-native <span className="d-block">mobile apps built - solo</span></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Boxes Ends */}
                    </div>
                    <hr className="separator" />
                    {/* Skills Starts */}
                    <div className="row">
                    <div className="col-12">
                        <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills (confidence scale)</h3>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p100">
                        <span>100%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p100">
                        <span>100%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p95">
                        <span>95%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p97">
                        <span>97%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Mongo-DB</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p100">
                        <span>100%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Node.JS</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p30">
                        <span>30%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Graph-QL</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p93">
                        <span>93%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Express.JS</h6>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                        <div className="c100 p100">
                        <span>100%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                        </div>
                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">react/react-native</h6>
                    </div>
                    </div>
                    {/* Skills Ends */}
                    <hr className="separator mt-1" />
                    {/* Experience & Education Starts */}
                    <div className="row">
                    <div className="col-12">
                        <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&amp;</span> Education</h3>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                        <div className="resume-box">
                        <ul>
                            <li>
                            <div className="icon">
                                <i className="fa fa-briefcase" />
                            </div>
                            <span className="time open-sans-font text-uppercase">JAN 2020 - MAY 2020</span>
                            <h5 className="poppins-font text-uppercase">Full-Stack Engineer <span className="place open-sans-font">Shimbly</span></h5>
                            <p className="open-sans-font">Worked as a full-stack software engineer building an AI/ML real estate platform primarily with React.JS</p>
                            </li>
                            <li>
                            <div className="icon">
                                <i className="fa fa-briefcase" />
                            </div>
                            <span className="time open-sans-font text-uppercase">2017 - CURRENT</span>
                            <h5 className="poppins-font text-uppercase">Freelancing as Software Dev <span className="place open-sans-font">We Code With Clarity</span></h5>
                            <p className="open-sans-font">Started freelancing and working as a software dev for various businesses and startup companies looking for web and mobile software to be developed, in which I built.</p>
                            </li>
                            <li>
                            <div className="icon">
                                <i className="fa fa-briefcase" />
                            </div>
                            <span className="time open-sans-font text-uppercase">2015 - 2020</span>
                            <h5 className="poppins-font text-uppercase">Self Taught - Studying Coding <span className="place open-sans-font">Self Taught</span></h5>
                            <p className="open-sans-font">Started studying and teaching myself how to code, went through roughly twenty (20) 40 hour course instructional teaching courses to perfect my craft.</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                        <div className="resume-box">
                        <ul>
                            {/* <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <span className="time open-sans-font text-uppercase">2015</span>
                            <h5 className="poppins-font text-uppercase">Engineering Degree <span className="place open-sans-font">Oxford University</span></h5>
                            <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore</p>
                            </li> */}
                            <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <span className="time open-sans-font text-uppercase">2013 - 2014</span>
                            <h5 className="poppins-font text-uppercase">Associates Degree - Partial <span className="place open-sans-font">Asheville-Buncombe Community College</span></h5>
                            <p className="open-sans-font">Attended for roughly half of the required time for an associates degree - decided to discontinue education to pursue coding/software engineering</p>
                            </li>
                            <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap" />
                            </div>
                            <span className="time open-sans-font text-uppercase">2012</span>
                            <h5 className="poppins-font text-uppercase">High School Graduation <span className="place open-sans-font">Independence high school</span></h5>
                            <p className="open-sans-font">High school graduation prior to transition to AB-Tech Community College</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* Experience & Education Ends */}
                </div>
                </section>
            </div>
        )
    }
}

export default AboutHelper
