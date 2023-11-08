import * as yup from "yup";

export const docSchema = yup.object({
  doc_name: yup
    .string()
    .required("Please fill in doctor name")
    .min(3, "Minimum three words required")
    .max(10, "First or last name is enough"),
  hospital_name: yup.string().required("Please specify hospital name"),
  specialization: yup.string().required("Please specify specilization"),
});
