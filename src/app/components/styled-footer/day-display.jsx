"use client";

import { useState, useEffect } from "react";

const DayDisplay = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    setDay(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        timeZone: "Asia/Colombo",
      })
    );
  }, []);

  return day;
};

export default DayDisplay;
