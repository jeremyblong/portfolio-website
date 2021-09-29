import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationHelper = (props) => {
    return (
        <Fragment>
            <header className="header" id="navbar-collapse-toggle">
                {/* Fixed Navigation Starts */}
                <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
                <li className="icon-box active">
                    <i className="fa fa-home" />
                    <Link to="/">
                    <h2>Home</h2>
                    </Link>
                </li>
                <li className="icon-box">
                    <i className="fa fa-user" />
                    <Link to="/about">
                    <h2>About</h2>
                    </Link>
                </li>
                <li className="icon-box">
                    <i className="fa fa-briefcase" />
                    <Link to="/portfolio">
                    <h2>Portfolio</h2>
                    </Link>
                </li>
                <li className="icon-box">
                    <i className="fa fa-envelope-open" />
                    <Link to="/contact">
                    <h2>Contact</h2>
                    </Link>
                </li>
                <li className="icon-box">
                    <i className="fa fa-comments" />
                    <Link to="/blogs/homepage">
                    <h2>Blogs</h2>
                    </Link>
                </li>
                </ul>
                {/* Fixed Navigation Ends */}
                {/* Mobile Menu Starts */}
                <nav role="navigation" className="d-block d-lg-none">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span />
                    <span />
                    <span />
                    <ul className="list-unstyled" id="menu">
                    <li className="active"><Link to="/"><i className="fa fa-home" /><span>Home</span></Link></li>
                    <li><Link to="/about"><i className="fa fa-user" /><span>About</span></Link></li>
                    <li><Link to="/portfolio"><i className="fa fa-folder-open" /><span>Portfolio</span></Link></li>
                    <li><Link to="/contact"><i className="fa fa-envelope-open" /><span>Contact</span></Link></li>
                    <li><Link to="/blogs/homepage"><i className="fa fa-comments" /><span>Blogs</span></Link></li>
                    </ul>
                </div>
                </nav>
                {/* Mobile Menu Ends */}
            </header>
        </Fragment>
    );
}
export default NavigationHelper;