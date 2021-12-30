import React from "react";
import SideBar from "../components/Sidebar";
import Footer from "@components/Footer";


export default function Trees() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Juletrær</h1>
        <h2>Flott gran. Levert på døra.</h2>
        <Footer></Footer>
      </div>
    </div>
  );
}
