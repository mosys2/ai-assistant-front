import React from "react";
// import HomeStart from './HomeStart'
// import HomeToDo from './HomeToDo'
import dynamic from "next/dynamic";
import { Row } from "antd";

// const HomeStart=dynamic(()=>import('./HomeStart')>)

const Home = () => {
  return (
    <div className="container">
      <Row>
        <div
          className=" mt-11 mb-11 lg:mt-20 lg:mb-20"
          style={{ background: "var(--color-bg-gradient1)" }}
        >
          خانه
        </div>
      </Row>
    </div>
  );
};

export default Home;
