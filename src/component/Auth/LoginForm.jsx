import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const handleOnSubmit = (values) => {
    console.log(values);
  };
  const Navigator = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center ">
      <Typography variant="h5" className="text-center mb-4">
        Login
      </Typography>

      <Formik onSubmit={handleOnSubmit} initialValues={initialValues}>
        {() => (
          <Form className="w-full max-w-md space-y-4">
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              error={Boolean(<ErrorMessage name="email" />)}
              helperText={<ErrorMessage name="email" component="span" className="text-red-600" />}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              margin="normal"
              error={Boolean(<ErrorMessage name="password" />)}
              helperText={<ErrorMessage name="password" component="span" className="text-red-600" />}
            />
            <Button sx={{mt:2, padding:"1rem"}} type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sx={{mt:3}}>
        Don't have an account?
        <Button size="small" onClick={()=>Navigator("/account/register")}>register</Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
