import React from 'react';
import NavigationHelper from "../../components/universal/navigation/navnav.js";
import PortfolioHelper from "../../components/portfolio/index.js";

const PortfolioPage = (props) => {
    return (
        <div>
            <NavigationHelper props={props} />
            <PortfolioHelper props={props} />
        </div>
    );
}

export default PortfolioPage;