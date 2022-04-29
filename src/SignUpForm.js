import { Formik, Form, Field } from 'formik';
import React, { Component } from 'react'
import * as Yup from 'yup';
import styles from './SignUpForm.module.css';

const signUpScheme = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too much')
        .required('Firstname is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export default class SignUpForm extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={signUpScheme}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched, isValid, dirty }) => (
                    <Form>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit" disabled={!(isValid && dirty)}>Submit</button>
                    </Form>
                )}
            </Formik>
        )
    }
}
