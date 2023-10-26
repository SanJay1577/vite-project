import "./App.css";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/Topbar";
// import Main from "./Components/Main";
// import SideBar from "./Components/SideBar";
// import TopBar from "./Components/Topbar";
import WorkSpace from "./Components/WorkSpace";

function App() {
  return (
    <div className="app">
      <WorkSpace>
        <TopBar>Top bar</TopBar>
        <SideBar>Side bar</SideBar>
        <Main> Main bar</Main>
      </WorkSpace>
    </div>
  );
}

export default App;
