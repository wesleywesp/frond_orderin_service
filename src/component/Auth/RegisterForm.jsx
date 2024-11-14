import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleRegister = (values) => {
      dispatch(registerUser({ userData: values, navigator })); // Passe o navigator diretamente
  };
 
  return (
    <div className="flex flex-col items-center justify-center ">
      <Typography variant="h5" className="text-center mb-4">
        Login
      </Typography>

      <Formik onSubmit={handleRegister} initialValues={initialValues}>
        {() => (
          <Form className="w-full max-w-md space-y-4">
            <Field
              as={TextField}
              name="fullName"
              label="full name"
              fullWidth
              variant="outlined"
              margin="normal"
              error={Boolean(<ErrorMessage name="fullName" />)}
              helperText={<ErrorMessage name="fullName" component="span" className="text-red-600" />}
            />
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
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-simple-select-label">Role</InputLabel>
              <Field
                as={Select}
                name="role" // Adiciona o nome do campo para o Formik
                labelId="role-simple-select-label"
                id="demo-simple-select"
                label="Role"
              >
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-600" />
            </FormControl>
            <Button sx={{ mt: 2, padding: "1rem" }} type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        if have an account already?
        <Button size="small" onClick={() => Navigator("/account/login")}>login</Button>
      </Typography>
    </div>
  );
}
export default RegisterForm;