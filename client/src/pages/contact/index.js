import React, { Component } from 'react';
import NavigationHelper from "../../components/universal/navigation/navnav.js";
import ContactHelper from "../../components/contact/index.js";

const ContactPage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <ContactHelper props={props} />
        </div>
    );
}

export default ContactPage;