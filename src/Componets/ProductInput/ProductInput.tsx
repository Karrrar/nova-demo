import React from "react";
import {
  useFormik,
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  getIn,
} from "formik";
import * as Yup from "yup";

const ArrayErrors = ({ errors }: any) =>
  typeof errors.batchNumbers === "string" ? (
    <div>{errors.batchNumbers}</div>
  ) : null;

export default function ProductInput() {
  return (
    <Formik
      initialValues={{
        productName: "",
        productNumber: "",
        productDescription: "",
        batchNumbers: [],
      }}
      validationSchema={Yup.object({
        productName: Yup.string()
          .required("Product Name is Required")
          .min(3, "Product Name must be 3 characters or more"),
        // To do add error message
        batchNumbers: Yup.array()
          .of(
            Yup.object().shape({
              experiationDate: Yup.string().required("Invalid Date"),
            })
          )
          .required("You need at less 1 batch number"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
      render={({ values, errors }) => (
        <Form data-testid="product-input-form">
          <div className="form-group">
            <div className="row">
              <div className="col">
                <div className="input-group">
                  <div className="input-group-append">
                    <div className="input-group-text">Product Name</div>
                  </div>
                  <Field
                    className="form-control"
                    placeholder="ex. Blue Pen"
                    name="productName"
                    type="text"
                    data-testid="productName"
                  />
                </div>
                <ErrorMessage name="productName" />
              </div>
              <div className="col">
                <div className="input-group">
                  <div className="input-group-append">
                    <div className="input-group-text">Product Name</div>
                  </div>
                  <Field
                    className="form-control"
                    placeholder="ex. 340302"
                    name="productNumber"
                    type="text"
                    data-testid="productNumber"
                  />
                  <ErrorMessage name="productNumber" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group">
                  <div className="input-group-append">
                    <div className="input-group-text">Product Description </div>
                  </div>
                  <Field
                    as="textarea"
                    className="form-control"
                    placeholder="ex. this is the best product ever"
                    name="productDescription"
                    type="multitext"
                    data-testid="productDescription"
                  />
                  <ErrorMessage name="productDescription" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FieldArray
                  name="batchNumbers"
                  render={(arrayHelpers) => (
                    <div>
                      {/* <ArrayErrors name="batchNumbers" /> */}
                      {values.batchNumbers && values.batchNumbers.length > 0 ? (
                        <div>
                          {values.batchNumbers.map((batchNumber, index) => (
                            <div className="input-group" key={index}>
                              <Field
                                data-testid="expritionDate"
                                className="form-control"
                                placeholder="Experation Date"
                                name={`batchNumbers[${index}].experiationDate`}
                              />
                              <ErrorMessage
                                name={`batchNumbers[${index}].experiationDate`}
                              />
                              <Field
                                className="form-control"
                                placeholder="Batch Number"
                                name={`batchNumbers.${index}.batchNumber`}
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn-danger"
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </button>
                              </div>
                              {/* {typeof errors.batchNumbers === "string"
                                ? errors.batchNumbers[index]
                                : null} */}
                            </div>
                          ))}
                          {/* change the 3 to the index or somthing else */}
                          <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => arrayHelpers.insert(3, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          data-testid="add-batchnumber-button"
                          className="btn btn-warning btn-md"
                          type="button"
                          onClick={() => arrayHelpers.push({})}
                        >
                          {/* show this when user has removed all friends from the list */}
                          Add a BatchNumber
                        </button>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <ArrayErrors errors={errors} />
          <button className="btn btn-info btn-lg" type="submit">
            Save
          </button>
        </Form>
      )}
    />
  );
}
