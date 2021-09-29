import React, { Component } from 'react';
import NavigationHelper from "../../../components/universal/navigation/navnav.js";
import BlogIndividualHelper from "../../../components/blogs/individual/index.js";

const BlogIndividualPage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <BlogIndividualHelper props={props} />
        </div>
    );
}

export default BlogIndividualPage;