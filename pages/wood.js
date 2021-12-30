import SideBar from "../components/Sidebar";
import Footer from "@components/Footer";


export default function Wood() {

  return (
    
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
  
        <div id="page-wrap">
          <h1>Knusk tørr ved</h1>
          <h2>1300kr per pall. Levert på døra.</h2>
          <img className="wood-hero" src="ved.jpg"></img>
          <Footer></Footer>
        </div>
      </div>
    );
}
