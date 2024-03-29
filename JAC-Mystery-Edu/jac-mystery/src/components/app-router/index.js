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
        <Route exact path={'/'} element={<HomePage/>} />
        <Route exact path={'/book'} element={<BookPage/>} />
        <Route exact path={'/art'} element={<ArtPage/>} />
        <Route exact path={'/video'} element={<VideoPage/>} />
        <Route exact path={'/contact'} element={<ContactPage/>} />
        <Route exact path={'/about'} element={<AboutPage/>} />
    </Routes>
);

export default PageSwitch;