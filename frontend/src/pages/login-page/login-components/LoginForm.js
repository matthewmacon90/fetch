import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const LoginForm = ({login}) => {
    const LoginSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    return (
        <div className="login-form-container">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values) => {
                    await login(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type='text' name="name" placeholder="Name" />
                        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="Email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default LoginForm;