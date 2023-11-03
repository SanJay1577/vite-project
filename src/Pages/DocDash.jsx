/* eslint-disable react/prop-types */
// import React from "react";
import WorkSpace from "../Components/WorkSpace";
import Main from "../Components/Main";

const DocDash = ({ doctorData, setDoctordata }) => {
  return (
    <WorkSpace>
      <Main doctorData={doctorData} setDoctordata={setDoctordata} />
    </WorkSpace>
  );
};

export default DocDash;
