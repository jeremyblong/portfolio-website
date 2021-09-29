import React, { Component } from 'react';
import myself from "../../assets/images/me.jpeg";
import { Link } from "react-router-dom";


class HomepageHelperCustom extends Component {
    render() {
        return (
            <div className="home">
            <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
                <div className="color-block d-none d-lg-block" />
                <div className="row home-details-container align-items-center">
                <div className="col-lg-4 bg position-fixed d-none d-lg-block" />
                <div style={{ paddingTop: "150px" }} className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                    <div>
                    <img src={myself} className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my picture" />
                    <h1 className="text-uppercase poppins-font">I'm Jeremy Blong - I'm a <span>Full-Stack JS Developer</span></h1>
                    <p className="open-sans-font">I'm a Full-Stack JavaScript MERN (MongoDB, Node, Express, React/React-Native) &amp; developer with immense knowledge in front and back end &amp; development of software applications. I have built everything in my portfolio on my own from start to finish - bottom up. I can craft ANY application desired and am able to consistently build eloquent software websites and apps...</p>
                    <Link className="button" to="/about">
                        <span className="button-text">more about me</span>
                        <span className="button-icon fa fa-arrow-right" />
                    </Link>
                    </div>
                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default HomepageHelperCustom
