import React from "react";
import { Tabs } from "react-bootstrap";

const CoverImg = () => {
  return (
    <>
      <img
        src="https://i.ibb.co/KsJrVkT/CoverImg.png"
        class="img-fluid"
        alt="..."
      />
      <Tabs id="controlled-tab-example" className="mx-4 tab-y-spacing"></Tabs>
    </>
  );
};

export default CoverImg;
