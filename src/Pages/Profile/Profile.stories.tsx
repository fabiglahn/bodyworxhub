import React from "react";
import Profile from "./Profile";

export default {
  component: Profile,
  title: "Pages/Profile",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <Profile />;
