import React, { Fragment, useState } from "react";
import { Document, Page } from 'react-pdf';
import pdf from "../../assets/images/combinepdf.pdf";
import "./styles.css";
import Modal from 'react-modal';
import pdfscreen from "../../assets/images/pdfscreen.png";
import socialcodes from "../../assets/images/socialcodes.png";
import essential from "../../assets/images/essential.png";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "85vh"
    },
};


const PortfolioHelper = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [modalIsOpen, setIsOpen] = React.useState(false);


    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    console.log(pageNumber, numPages);
    return (
        <div className="portfolio">
            <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
            <h1>my <span>portfolio</span></h1>
            <span className="title-bg">works</span>
            </section>
            {/* Page Title Ends */}
            {/* Main Content Starts */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container mx-auto">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <button onClick={() => {
                            setPageNumber(pageNumber - 1);
                        }} className="btn btn-light">Go to previous page</button>
                        <button onClick={() => {
                            setPageNumber(pageNumber + 1);
                        }} className="btn btn-light">Go to next page</button>
                        <Document
                            className="pdf-view"
                            file={pdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page className="pdf-view" pageNumber={pageNumber} />
                        </Document>
                    </div>
                </div>
            </Modal>
            <section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
            <div id="grid-gallery" className="container grid-gallery">
                {/* Portfolio Grid Starts */}
                <section className="grid-wrap">
                <ul className="row grid">
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure>
                        <iframe width="100%" height="250px" src="https://www.youtube.com/embed/OnCfKU8REy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure>
                        <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Jgl3reHwR6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure>
                        <iframe width="100%" height="250px" src="https://www.youtube.com/embed/BzXP58pB4g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure onClick={() => {
                        console.log("clicked.");
                        setIsOpen(true);
                    }}>
                        <img src={pdfscreen} className="maxed" alt="Portolio Image" />
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure>
                        <a href="https://socialcodes.io/">
                            <img src={socialcodes} className="maxed" alt="Portolio Image" />
                        </a>
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    <li>
                    <figure>
                        <a href="https://essentialpurposesoberliving.herokuapp.com/">
                            <img src={essential} className="maxed" alt="Portolio Image" />
                        </a>
                    </figure>
                    </li>
                    {/* Portfolio Item Ends */}
                    {/* Portfolio Item Starts */}
                    {/* <li>
                    <figure>
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        <div><span>Image Project</span></div>
                    </figure>
                    </li> */}
                    {/* Portfolio Item Ends */}
                </ul>
                </section>
                
                {/* Portfolio Grid Ends */}
                {/* Portfolio Details Starts */}
                <section className="slideshow">
                <ul>
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Youtube Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe After Effects</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.videohive.net</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <div className="videocontainer">
                        <iframe className="youtube-video" src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer" allowFullScreen />
                        </div>
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Slider Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Themeforest</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.themeforest.net</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <div id="slider" className="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                        <ol className="carousel-indicators">
                            <li data-target="#slider" data-slide-to={0} className="active" />
                            <li data-target="#slider" data-slide-to={1} />
                            <li data-target="#slider" data-slide-to={2} />
                        </ol>
                        {/* The slideshow */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                            </div>
                            <div className="carousel-item">
                            <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                            </div>
                            <div className="carousel-item">
                            <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                            </div>
                        </div>
                        </div>
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Local Video Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Videohive</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">Adobe Premium</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <video id="video" className="responsive-video" controls poster="http://via.placeholder.com/895x552.jpg">
                        <source src="path_to_your_video" type="video/mp4" />
                        </video>
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                    {/* Portfolio Item Detail Starts */}
                    <li>
                    <figure>
                        {/* Project Details Starts */}
                        <figcaption>
                        <h3>Image Project</h3>
                        <div className="row open-sans-font">
                            <div className="col-6 mb-2">
                            <i className="fa fa-file-text-o pr-2" /><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Website</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-user-o pr-2" /><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Envato</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-code pr-2" /><span className="project-label">Langages </span>: <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                            </div>
                            <div className="col-6 mb-2">
                            <i className="fa fa-external-link pr-2" /><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">www.envato.com</a></span>
                            </div>
                        </div>
                        </figcaption>
                        {/* Project Details Ends */}
                        {/* Main Project Content Starts */}
                        <img src="http://via.placeholder.com/895x552.jpg" alt="Portolio Image" />
                        {/* Main Project Content Ends */}
                    </figure>
                    </li>
                    {/* Portfolio Item Detail Ends */}
                </ul>
                {/* Portfolio Navigation Starts */}
                <nav>
                    <span className="icon nav-prev"><img src="img/projects/navigation/left-arrow.png" alt="previous" /></span>
                    <span className="icon nav-next"><img src="img/projects/navigation/right-arrow.png" alt="next" /></span>
                    <span className="nav-close"><img src="img/projects/navigation/close-button.png" alt="close" /> </span>
                </nav>
                {/* Portfolio Navigation Ends */}
                </section>
            </div>
            </section>
        </div>
    );
}
export default PortfolioHelper;