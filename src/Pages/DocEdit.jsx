/* eslint-disable react/prop-types */
// import React from "react";

import { useParams } from "react-router-dom";
import EditDoctor from "../Components/EditDoctor";
import WorkSpace from "../Components/WorkSpace";

const DocEdit = ({ doctorData, setDoctordata }) => {
  const { id } = useParams();
  return (
    <WorkSpace>
      <EditDoctor
        doctorData={doctorData}
        setDoctordata={setDoctordata}
        editId={id}
      />
    </WorkSpace>
  );
};

export default DocEdit;
