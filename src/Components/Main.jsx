/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Main({ doctorData, setDoctordata }) {
  const navigate = useNavigate();

  // delete doctor details functionality
  const deletDoctorDetails = (id) => {
    const remainingDoctors = doctorData.filter((docInfo, idx) => idx !== id);
    setDoctordata(remainingDoctors);
  };

  //edit button handler
  const handleEdit = (id) => {
    navigate(`/edit/doc/${id}`);
  };

  const handleStatusChange = (id, event) => {
    // get the object and change the status info
    doctorData[id].status = event.target.value;
    setDoctordata([...doctorData]);
  };

  return (
    <div className="main">
      <div className=" grid justify-end p-2">
        <button
          className="btn btn-primary w-24"
          onClick={() => navigate("/add/doc")}
        >
          Add Doctor
        </button>
      </div>
      {doctorData && (
        <>
          {doctorData?.map((docInfo, idx) => (
            <div
              key={idx}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{docInfo.doc_name}</h2>
                <p>{docInfo.hospital_name}</p>
                <p>{docInfo.specialization}</p>
                <select
                  className="select select-bordered select-sm w-36 max-w-xs"
                  onChange={(e) => handleStatusChange(idx, e)}
                >
                  {docInfo.status == "Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                  {docInfo.status == "Not Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                </select>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(idx)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => deletDoctorDetails(idx)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
