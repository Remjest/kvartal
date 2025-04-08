import React, { } from "react";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import Body from "./components/views/Body";

import { setClientMode, setSectionPadding } from "./redux-state/reduces/initial"
import { useDispatch, useSelector } from "react-redux";


function App() {

  const clientMode = useSelector(state => (state.initial.clientMode));
  const sectionPadding = useSelector(state => (state.initial.sectionPadding));
  const dispatch = useDispatch();
  window.onresize = recalcWindowSize;
  window.onload = recalcWindowSize;

  function recalcWindowSize() {
    let newClientMode = 'desktop';
    let newSectionPadding;
    if (window.innerWidth <= 992) newClientMode = 'mobile';
    if (clientMode !== newClientMode) {
      dispatch(setClientMode(newClientMode));
      // console.log(newClientMode);
    }
    if (window.innerWidth <= 720) newSectionPadding = '20px';
    else if (window.innerWidth <= 1120) newSectionPadding = '50px';
    else newSectionPadding = '100px';
    if (sectionPadding !== newSectionPadding) {
      dispatch(setSectionPadding(newSectionPadding));
      console.log(newSectionPadding);
    }
  };

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
