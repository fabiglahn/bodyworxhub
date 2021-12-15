import React from "react";
import MondayOnline from "./MondayOnline";

export default {
  component: MondayOnline,
  title: "Pages/MondayOnline",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <MondayOnline />;
