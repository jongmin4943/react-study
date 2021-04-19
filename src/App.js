/* eslint-disable */

import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { Route } from "react-router";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className='App'>
      <ListPage />
    </div>
  );
}

export default App;
