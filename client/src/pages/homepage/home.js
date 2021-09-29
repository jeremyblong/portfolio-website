import React, { Component } from 'react';
import NavigationHelper from "../../components/universal/navigation/navnav.js";
import HomepageHelperCustom from "../../components/homepage/home.js";

const HomepagePage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <HomepageHelperCustom props={props} />
        </div>
    );
}

export default HomepagePage;
