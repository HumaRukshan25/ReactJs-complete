import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiNavbar from "./ApiNavbar";
import "./apistyle.css";
import Shopping from "./Shopping/Shopping";
import HomeApi from "./HomeApi";
import SearchMovies from "./SearchMovies/SearchMovies";
import SearchEmoji from "./SearchEmojis/SearchEmoji";
import QRCodeGenerator from "./QRCodeGenerator/QRCodeGenerator";

const ApiApp = () => {
  return (
    <>
      <div className="apiapp">
        <BrowserRouter>
          <div className="apinavbar">
            <ApiNavbar />
          </div>
          <div className="webpage">
            <Routes>
              <Route element={<HomeApi/>} path='/'/>
              <Route element={<Shopping />} path="/shopping" />
              <Route element={<SearchMovies/>}path="/searchmovies"/>
              <Route element={<SearchEmoji/>} path='/searchemoji'/>
              <Route element={<QRCodeGenerator/>} path='/qrcodegenerator'/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default ApiApp;
