import React from "react";
import Common from "./Common";
import web from "./img/img1.webp"
const Home = () => {
  return (
    <>
     <Common
      heading="grow up your business with "
      title="we are the team of telented web developer"
      btn="get started"
      company="Ashish.com"
      imgSrc={web}
     />
    </>
  );
};

export default Home;
