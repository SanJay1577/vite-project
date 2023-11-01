import Main from "./Main";
import SideBar from "./SideBar.jsx";
import TopBar from "./Topbar.jsx";

// eslint-disable-next-line react/prop-types
export default function WorkSpace() {
  return (
    <div className="flex flex-col w-full border-opacity-50 h-screen">
      <div className="grid h-20 card rounded-box place-items-center m-1">
        <TopBar />
      </div>

      <div className="flex flex-nowrap rounded-box place-items-center h-screen">
        <div className="grid flex-grow h-full w-1/6 m-1">
          <SideBar />
        </div>
        <div className="grid h-full w-5/6 m-1">
          <Main />
        </div>
      </div>
    </div>
  );
}
