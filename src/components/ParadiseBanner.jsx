import React from "react";
import Banner2 from "/banner2.png";

const ParadiseBanner = () => {
  return (
    <section
      className="bg-cover p-[70px] sm:p-28 md:p-32 lg:p-44 xl:p-[215px] 2xl:p-[260px]"
      style={{ backgroundImage: `url(${Banner2})` }}
    ></section>
  );
};

export default ParadiseBanner;
