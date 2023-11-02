/* eslint-disable react/prop-types */
import { useState } from "react";

const AddDoctor = ({ doctorData, setDoctordata }) => {
  const [docName, setDocName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [specialization, setSpecilazation] = useState("");

  const addNewDoctorDetails = () => {
    const newDoctorDetails = {
      doc_name: docName,
      hospital_name: hospitalName,
      specialization,
      status: "Available",
    };
    setDoctordata([...doctorData, newDoctorDetails]);
  };

  return (
    <div className="grid grid-rows-4 justify-center gap-3 ">
      <input
        type="text"
        placeholder="Enter Doctor Name"
        className="input input-bordered w-80"
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Hospital"
        className="input input-bordered w-80"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Specilization"
        className="input input-bordered w-80"
        value={specialization}
        onChange={(e) => setSpecilazation(e.target.value)}
      />
      <button
        className="btn btn-accent w-24 justify-self-center"
        onClick={addNewDoctorDetails}
      >
        Add
      </button>
    </div>
  );
};

export default AddDoctor;
