import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectNavbar from "./ProjectNavbar";
import "./projects.css";
import MainPage from "./MainPage";
import GenerateOtp from "./GenerateOtp/GenerateOtp";
import ChangeColor from "./ChangeColor/ChangeColor";
import Volume from "./Volume/Volume";
import DayNightMode from "./DayNight/DayNightMode";
import DigitalClock from "./DigitalClock/DigitalClock";
import Calculator from "./Calculator/Calculator";
import TodoList from "./TodoList/TodoList";
import AgeCalculator from "./AgeCalculator/AgeCalculator";

const Projects = () => {
  return (
    <>
      <BrowserRouter>
        <div className="projects">
          <div className="project-navbar">
            <ProjectNavbar />
          </div>
          <div className="project-area"  >
            <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<GenerateOtp />} path="/generateotp" />
              <Route element={<ChangeColor/>} path='/changecolor'/>
              <Route element={<Volume/>} path='/volume'/>
              <Route element={<DayNightMode/>} path='/daynight'/>
              <Route element={<DigitalClock/>} path='/digitalclock'/>
              <Route element={<Calculator/>} path='/calculator'/>
              <Route element={<AgeCalculator/>} path='/agecalculator'/>
              <Route element={<TodoList/>} path='/todolist'/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Projects;
