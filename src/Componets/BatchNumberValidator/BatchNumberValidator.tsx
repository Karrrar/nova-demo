import React, { useState } from "react";
import { useFormik } from "formik";

export default function BatchNumberValidator() {
  const [valid, setValid] = useState({ valid: "" });
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      setValid({ valid: values.search });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} data-testid="search-form">
        <input
          type="text"
          name="search"
          id="search"
          data-testid="searchInput"
          onChange={formik.handleChange}
          value={formik.values.search}
          className="form-controler"
          placeholder="Search"
          onBlur={formik.handleBlur}
        />
        <button
          type="submit"
          className="btn btn-outline-success"
          data-testid="searchBtn"
        >
          Search
        </button>
        {validBox(valid.valid)}
      </form>
    </div>
  );
}

function validBox(isValid: string) {
  if (isValid == "") return;
  if (isValid == "valid")
    return (
      <div className="alert alert-success" data-testid="valid">
        Valid
      </div>
    );
  else
    return (
      <div className="alert alert-danger" data-testid="invalid">
        Not Valid
      </div>
    );
}
