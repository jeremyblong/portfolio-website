import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomepagePage from "./pages/homepage/home.js";
import "./css/style.css";
import "./css/circle.css";
import "./css/skin.css";
import "./css/revealer.min.css";
import AboutPage from "./pages/about/index.js";
import PortfolioPage from "./pages/portfolio/index.js";
import { pdfjs } from 'react-pdf';
import BlogsMainPage from "./pages/blogs/main/index.js";
import ContactPage from "./pages/contact/index.js";
import BlogIndividualPage from "./pages/blogs/individual/index.js";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


class App extends Component {
constructor (props) {
    super(props);

    this.state = {

    }
}
componentDidMount() {
    
}
render () {
    console.log("this.state :", this.state);
        return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={HomepagePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/blogs/homepage" component={BlogsMainPage} />
                <Route exact path="/blogs/individual/:id" component={BlogIndividualPage} />
            </BrowserRouter>
        </div>
        );
    }
}

export default App;
