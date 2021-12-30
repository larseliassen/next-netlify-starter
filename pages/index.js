import SideBar from "../components/Sidebar";
import Logo from "@components/Logo";
import Footer from "@components/Footer";

export default function Home() {

  return (
    
      <div id="App">

        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
  
        <div id="page-wrap">
          <Logo></Logo>
          <Footer></Footer>
        </div>
        
      </div>
    );
}
