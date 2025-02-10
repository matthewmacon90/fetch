import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import './LoginFormStyles.css';

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
                    <Form className="login-form">
                        <label className="login-label" htmlFor="name">Name</label>
                        <Field className='login-input' id="name" type='text' name="name" placeholder="Name" />
                        {errors.name && touched.name ? (<div className="login-form-error">{errors.name}</div>) : null}

                        <label className="login-label"  htmlFor="email">Email</label>
                        <Field className='login-input' id="email" type="email" name="email" placeholder="Email" />
                        {errors.email && touched.email ? <div className="login-form-error">{errors.email}</div> : null}

                        <button className="login-form-cta" type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default LoginForm;