import React from "react";
import { useFormik, FormikBag } from "formik";
import * as Yup from "yup";

export default function ProductInput() {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productNumber: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .required("Product Name is Required")
        .min(3, "Product Name must be 3 characters or more"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} data-testid="product-input-form">
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="productName"
                id="productName"
                className="form-contorl"
                placeholder="Product Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                data-testid="productName"
              />
              {formik.touched.productName && formik.errors.productName ? (
                <div>{formik.errors.productName}</div>
              ) : null}
              <div className="col">
                <input
                  type="text"
                  name="productNumber"
                  id="productNumber"
                  className="form-contorl"
                  placeholder="Product Number"
                  onChange={formik.handleChange}
                />
                {formik.errors.productNumber ? (
                  <div>{formik.errors.productNumber}</div>
                ) : null}
              </div>
              <div className="col">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-contorl"
                  placeholder="Expire Date"
                />
              </div>
            </div>
            <div className="col">
              <input
                type="text"
                name=""
                id=""
                className="form-contorl"
                placeholder="Fourth Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name=""
                id=""
                className="form-contorl"
                placeholder="Family Name"
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
