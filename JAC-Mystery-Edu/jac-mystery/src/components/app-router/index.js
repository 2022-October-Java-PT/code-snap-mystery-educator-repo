import React from "react";
import { Routes, Route } from "react-router-dom";
import ArtPage from "../../pages/Art/art";
import BookPage from "../../pages/Book/book";
import VideoPage from "../../pages/Video/video";
import ContactPage from "../../pages/Contact/contact"; 
import HomePage from "../../pages/Home/home";
import AboutPage from "../../pages/About/about"; 

const PageSwitch = () =>(
    <Routes>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/book'} component={BookPage} />
        <Route exact path={'/art'} component={ArtPage} />
        <Route exact path={'/video'} component={VideoPage} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/about'} component={AboutPage} />
    </Routes>
);

export default PageSwitch;