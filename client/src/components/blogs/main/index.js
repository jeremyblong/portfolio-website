import React, { Component } from 'react'
import { useHistory } from "react-router-dom";


const BlogsMainHelper = (props) => {
    const history = useHistory();
    return (
        <div className="blog">
            <div>
                <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>my <span>blog</span></h1>
                <span className="title-bg">posts</span>
                </section>
                {/* Page Title Ends */}
                {/* Main Content Starts */}
                <section className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    {/* Articles Starts */}
                    <div className="row">
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>How to Own Your Audience by Creating an Email List</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>Top 10 Toolkits for Deep Learning in 2020</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>Everything You Need to Know About Web Accessibility</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>How to Inject Humor &amp; Comedy Into Your Brand</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>Women in Web Design: How To Achieve Success</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Article Starts */}
                    <div onClick={() => {
                        history.push(`/blogs/individual/123348834`);
                    }} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                        <article className="post-container">
                        <div className="post-thumb">
                            <a className="d-block position-relative overflow-hidden">
                            <img src="http://via.placeholder.com/895x552.jpg" className="img-fluid" alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <div className="entry-header" style={{ paddingTop: "10px" }}>
                            <h3><a>Evergreen versus topical content: An overview</a></h3>
                            </div>
                            <div className="entry-content open-sans-font">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                            </p>
                            </div>
                        </div>
                        </article>
                    </div>
                    {/* Article Ends */}
                    {/* Pagination Starts */}
                    {/* <div className="col-12 mt-4">
                        <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                        </ul>
                        </nav>
                    </div> */}
                    {/* Pagination Ends */}
                    </div>
                    {/* Articles Ends */}
                </div>
                </section>
            </div>
        </div>
    )
}

export default BlogsMainHelper;
