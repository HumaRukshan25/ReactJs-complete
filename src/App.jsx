import React from "react";
import "./App.css";
import IncDec from "./components/Hooks/UseState/IncDec";
import ChangeContent from "./components/Hooks/UseState/ChangeContent";
import ToggleBtn from "./components/Hooks/UseState/ToggleBtn";
import DayNight from "./components/Hooks/UseState/DayNight";
import TogglePara from "./components/Hooks/UseState/TogglePara";
import ToggleImage from "./components/Hooks/UseState/ToggleImage";
import Forms from "./components/Hooks/UseState/Forms";
import Students from "./components/Hooks/UseState/StudentDetails/Students";
import Mcq from "./components/Hooks/UseState/Mcquestions/Mcq";
import ToggleTable from "./components/Hooks/UseState/StudentDetails/ToggleTable";
import Useref_Example from "./components/Hooks/UseRef/Useref_Example";
import UseRef_Form from "./components/Hooks/UseRef/UseRef_Form";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import UseEffect from "./components/Hooks/UseEffect/UseEffect";
import MuiPage from "./components/MUI_Page/MuiPage";
import CompoA from "./components/Hooks/UseContext/CompoA";
import Header from "./components/ReactRouting/Header";
import Projects from "./components/BasicProjects/Projects";
import ApiApp from "./components/API_FETCH/ApiApp";
import CompA from "./components/PropsDrilling/CompA";
import Parent from "./components/Props/Parent";
import MovieCards from "./components/MovieCards/MovieCards";
import Event from "./components/Events/Event";
import Basic from './components/Basic'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageGallery1 from './components/ImageGallery1/ImageGallery1';
import Cards from './components/Cards/Cards';
import StudentDetails from "./components/Students/StudentDetails";

function App() {
  // console.log('haii');
  return (
    //todo: we can use <> </>  this directly  to group instead of React.Fragment it  works same only
    <React.Fragment>
      <div className="app">
        <h1>welcome </h1>
        <h2>to</h2>
        <h2>reactjs class</h2>
        <p>i am in paragraph</p>
       
        <hr />
        {/* //! 16/08/2024---------------- */}
        {/* <Basic/> */}
        {/* //! 17/08/2024 */}
        {/* <ImageGallery/> */}
        {/* //! assignement 17/08/2024----------- */}
        {/* <ImageGallery1/> */}
        {/* //! 19/08/2024-----monday--------- */}
        {/* <Cards/> */}
        {/* //! 20/08/2024---tuesday and wednesday */}
        {/* <StudentDetails /> */}
        {/* //! 22/08/2024 */}
        {/* <Event/> */}
        {/* //! 23/08/2024 */}
        {/* for propdrilling below (data transfers from one component to another component)*/}
        {/* <CompA/> */}
        {/* using props below (data tranfers from parent to child component*/}
        {/* <Parent/> */}

        {/* //! 24/08/20242 */}
        {/* <MovieCards/> */}

        {/* //! 25/08/2024 */}
        {/* <IncDec /> */}
        {/* <ChangeContent /> */}
        {/* <ToggleBtn /> */}
        {/* //! assignment  on 25/08/2024*/}
        {/* <DayNight /> */}
        {/* //! 27/08/2024 */}
        {/* <TogglePara /> */}
        {/* <ToggleImage/> */}
        {/* <Students/> */}

        {/* //! 29/08/2024 */}
        {/* <ToggleTable/> */}

        {/* //! 30/08/2024/ */}
        {/* <Mcq/> */}
        {/* //! 31/08/2024 */}
        {/* <Forms/> */}
        {/* //! 02/09/2024 */}
        {/* <h2 style={header}>UseRef Hook</h2> */}
        {/* <Useref_Example /> */}
        {/* <UseRef_Form /> */}
        {/* //! 03/08/2024 */}
        {/* <ConditionalRender/> */}

        {/* //! 04/09/2024 */}

        {/* <UseEffect/> */}
        {/* <MuiPage /> */}

        {/* //! 05/09/2024 */}

        {/* <CompoA/> */}

        {/* <Header /> */}

        {/* //! 09/09/2024 */}
        {/* lots of projects are there like //?gentere otp, /??change color,
        //?volume,//?day night mode ,//?digital clock ,//?calculator,
        //?age calculator,//? todolist(assignment)*/}
  {/* <Projects /> */}

        {/* //! 12/09/2024  building home page as well as shopping page and contact done*/}
        {/* //! 13/09/2024   search movies part done */}
        {/* //! assignment given to makesearch emoji api */}
        {/* //! 14/09/2024  QR code generator*/}

        {/* <ApiApp /> */}
      </div>
    </React.Fragment>

    // , we can use comma so that more than one  html element we can use
    // <button> click here</button>
  );
}

export default App;
