import React from "react";
import WeekdayCards from "./WeekdayCards";

export default {
  component: WeekdayCards,
  title: "Components/WeekdayCards",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <WeekdayCards />;
