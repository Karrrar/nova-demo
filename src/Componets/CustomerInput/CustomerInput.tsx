import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CustomerInput() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      thirdName: "",
      fourthName: "",
      familyName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is Required")
        .min(3, "First Name Name most be more than 3 characters"),
      secondName: Yup.string()
        .required("Second Name is Required")
        .min(3, "Second Name most be more than 3 characters"),
      thirdName: Yup.string()
        .required("Third Name is Required")
        .min(3, "Third Name most be more than 3 characters"),
      fourthName: Yup.string().required("Fourth Name is Required"),
      familyName: Yup.string().required("Family Name is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form data-testid="customer-input-form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="firstName"
                className="form-contorl"
                placeholder="First Name"
                data-testid="firstName"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="col">
              <input
                type="text"
                name="secondName"
                className="form-contorl"
                placeholder="Second Name"
                data-testid="secondName"
                {...formik.getFieldProps("secondName")}
              />
              {formik.touched.secondName && formik.errors.secondName ? (
                <div>{formik.errors.secondName}</div>
              ) : null}
            </div>
            <div className="col">
              <input
                type="text"
                name="thirdName"
                className="form-contorl"
                placeholder="Third Name"
                data-testid="thirdName"
                {...formik.getFieldProps("thirdName")}
              />
              {formik.touched.thirdName && formik.errors.thirdName ? (
                <div>{formik.errors.thirdName}</div>
              ) : null}
            </div>
            <div className="col">
              <input
                type="text"
                name="fourthName"
                className="form-contorl"
                placeholder="Fourth Name"
                data-testid="fourthName"
                {...formik.getFieldProps("fourthName")}
              />
              {formik.touched.fourthName && formik.errors.fourthName ? (
                <div>{formik.errors.fourthName}</div>
              ) : null}
            </div>
            <div className="col">
              <input
                type="text"
                name="familyName"
                className="form-contorl"
                placeholder="Family Name"
                data-testid="familyName"
                {...formik.getFieldProps("familyName")}
              />
              {formik.touched.familyName && formik.errors.familyName ? (
                <div>{formik.errors.familyName}</div>
              ) : null}
            </div>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
