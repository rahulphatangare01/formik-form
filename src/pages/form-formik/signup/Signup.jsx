import React from "react";
import {  Formik, Form, Field } from "formik";
import "./Signup.css";
import { signupValidation } from "../../../validations/validation";
const initialValues = {
  name: "",
  email: "",
  mobileNo: "",
  password: "",
};
function Signup() {
  return (
    <>
      <div class="container  mt-5">
        <div className="box">
          <h4 className="text-center mb-5 mt-5">Sign up </h4>

          <Formik
            initialValues={initialValues}
            validationSchema={signupValidation}
          >
            {({ errors }) => (
              <Form class="row w-50 demo mx-auto g-3 mt-5">
                <div class="col-md-6">
                  <label for="inputEmail" class="form-label">
                    {" "}
                    Name
                  </label>
                  <Field type="text" class="form-control" name="name"></Field>

                  {errors.name && <small>{errors.name}</small>}
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Email
                  </label>

                  <Field type="email" class="form-control" name="email"></Field>

                  {errors.email && <small>{errors.email}</small>}
                </div>
                <div class="col-6">
                  <label for="inputAddress" class="form-label">
                    Phone Number
                  </label>

                  <Field
                    type="number"
                    class="form-control"
                    name="mobileNo"
                  ></Field>

                  {errors.mobileNo && <small>{errors.mobileNo}</small>}
                </div>
                <div class="col-6">
                  <label for="inputAddress" class="form-label">
                    Password{" "}
                  </label>

                  <Field
                    type="password"
                    class="form-control"
                    name="password"
                  ></Field>

                  {errors.password && <small>{errors.password}</small>}
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Add Site
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Signup;
