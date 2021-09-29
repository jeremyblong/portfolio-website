import React, { Component } from 'react';
import NavigationHelper from "../../components/universal/navigation/navnav.js";
import AboutHelper from "../../components/about/index.js";

const AboutPage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <AboutHelper props={props} />
        </div>
    );
}

export default AboutPage;