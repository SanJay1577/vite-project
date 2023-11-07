/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DocDash from "./Pages/DocDash";
import DocAdd from "./Pages/DocAdd";
import DocEdit from "./Pages/DocEdit";
import { useEffect, useState } from "react";
import NoPage from "./Pages/NoPage";
import { AppState } from "./Context/AppContext";
import { getAllDoctor } from "./helpers/helper.js";

function App() {
  const [doctorData, setDoctordata] = useState();
  useEffect(() => {
    getAllDoctor().then((data) => {
      setDoctordata(data);
    });
  }, []);

  const { theme } = AppState();
  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DocDash doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
        <Route
          path="/add/doc"
          element={
            <DocAdd doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
        <Route
          path="/edit/doc/:id"
          element={
            <DocEdit doctorData={doctorData} setDoctordata={setDoctordata} />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
