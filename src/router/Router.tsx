import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import {HomePage} from "../pages/";

const Router: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;