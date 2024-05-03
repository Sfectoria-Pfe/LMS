import React from "react";
import AboutUs from "../Components/AboutUs";
import Carrousel from "../Components/Carrousel";
import Courses from "../Components/Courses";
import Programs from "../Components/Programs";

import Teachers from "../Components/Teachers";
import Sessions from "../Components/Sessions";

export default function Home() {
  return (
    <div>
      <Carrousel />
      <AboutUs />
      <Sessions/>
      <Programs />
      <Courses />
      <Teachers />
    </div>
  );
}
