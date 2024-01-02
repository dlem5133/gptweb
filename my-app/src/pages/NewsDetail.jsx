import React, { useEffect } from "react";
import News from "../components/Home/News";
const NewsDetail = ({ openModal, closeModal }) => {


  return (
      <News openModal={openModal} closeModal={closeModal} />
  );
};

export default NewsDetail;
