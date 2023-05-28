import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRoute from "./AppRoute";

function App() {
  return (
    <BrowserRouter basename="/">
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
