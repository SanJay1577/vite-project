/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { addNewDoctor } from "../helpers/helper";
import { useFormik } from "formik";
import { docSchema } from "../helpers/schema";

const AddDoctor = ({ doctorData, setDoctordata }) => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        doc_name: "",
        hospital_name: "",
        specialization: "",
        status: "Available",
      },
      validationSchema: docSchema,
      onSubmit: (newDoctor) => {
        addNewDoctorDetails(newDoctor);
      },
    });

  const addNewDoctorDetails = (newDoctorDetails) => {
    addNewDoctor(newDoctorDetails).then((data) => {
      if (data) {
        setDoctordata([...doctorData, newDoctorDetails]);
        navigate("/");
      } else {
        console.log("sorry cannot add new doctor");
      }
    });
  };

  return (
    <div className="w-full">
      <form
        className="grid grid-rows-4 justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Doctor Name"
          className="input input-bordered w-80"
          value={values.doc_name}
          onBlur={handleBlur}
          name="doc_name"
          onChange={handleChange}
        />
        {touched.doc_name && errors.doc_name ? (
          <div className="text-red-400">{errors.doc_name}</div>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Enter Hospital"
          className="input input-bordered w-80"
          value={values.hospital_name}
          name="hospital_name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.hospital_name && errors.hospital_name ? (
          <div className="text-red-400">{errors.hospital_name}</div>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Enter Specilization"
          className="input input-bordered w-80"
          value={values.specialization}
          name="specialization"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.specialization && errors.specialization ? (
          <div className="text-red-400">{errors.specialization}</div>
        ) : (
          ""
        )}

        <button
          className="btn btn-accent w-24 justify-self-center"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
