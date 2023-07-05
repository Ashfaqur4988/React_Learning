import { useFormik } from "formik"; //to handle form data
import { signUpSchema } from "../schemas/schema";

const initialValues = {
  //declaring the initial values
  name: "",
  email: "",
  password: "",
  confirm: "",
};
const Registration = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm(); //to reset the form after submitting
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@email.com"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm"
          placeholder="confirm password"
          autoComplete="off"
          value={values.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm && touched.confirm ? <p>{errors.confirm}</p> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Registration;
