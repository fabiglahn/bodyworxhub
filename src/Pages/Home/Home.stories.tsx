import React from "react";
import Home from "./Home";

export default {
  component: Home,
  title: "Pages/Home",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <Home />;
