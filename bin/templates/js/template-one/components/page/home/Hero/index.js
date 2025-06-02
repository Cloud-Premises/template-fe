import Carousel from "@/components/common/dataDisplay/carousel/Carousel";
import React from "react";

const index = () => {
  const images = [""];

  return (
    <div className="max-w-screen-xl mx-auto m-8 px-4">
      <Carousel slides={images} />
    </div>
  );
};

export default index;
