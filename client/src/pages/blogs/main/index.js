import React, { Component } from 'react';
import NavigationHelper from "../../../components/universal/navigation/navnav.js";
import BlogsMainHelper from "../../../components/blogs/main/index.js";

const BlogsMainPage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <BlogsMainHelper props={props} />
        </div>
    );
}

export default BlogsMainPage;