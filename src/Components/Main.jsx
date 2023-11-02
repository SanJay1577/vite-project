/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddDoctor from "./AddDoctor";
import EditDoctor from "./EditDoctor";

// eslint-disable-next-line react/prop-types
export default function Main() {
  const data = [
    {
      doc_name: "Prashanth",
      hospital_name: "Kaveri",
      specialization: "Surgery",
      status: "Available",
    },

    {
      doc_name: "Nikhil",
      hospital_name: "Apollo",
      specialization: "Ortho",
      status: "Not Available",
    },
  ];
  const [doctorData, setDoctordata] = useState(data);
  const [showForm, setShowForm] = useState(true);
  const [editId, setEditId] = useState("");

  // delete doctor details functionality
  const deletDoctorDetails = (id) => {
    const remainingDoctors = doctorData.filter((docInfo, idx) => idx !== id);
    setDoctordata(remainingDoctors);
  };

  //edit button handler
  const handleEdit = (id) => {
    setShowForm(false);
    setEditId(id);
  };

  const handleStatusChange = (id, event) => {
    // get the object and change the status info
    doctorData[id].status = event.target.value;
    setDoctordata([...doctorData]);
  };

  return (
    <div className="main">
      {showForm === true ? (
        <AddDoctor doctorData={doctorData} setDoctordata={setDoctordata} />
      ) : (
        <EditDoctor
          doctorData={doctorData}
          setDoctordata={setDoctordata}
          showForm={showForm}
          setShowForm={setShowForm}
          editId={editId}
        />
      )}

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
