import React, { useState } from "react";
import LeftSection from "./Left";
import RightSection from "./Right";
import BottomSection from "./Bottom";

const MainPage = () => {
  const [mainImage, setMainImage] = useState(require("./images/black.jpg"));

  return (
    <>
      <LeftSection mainImage={mainImage} setMainImage={setMainImage} />
      <RightSection setMainImage={setMainImage} />
      <BottomSection />
    </>
  );
};

export default MainPage;
