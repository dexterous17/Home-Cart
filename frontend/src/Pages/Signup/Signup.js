import React from 'react';
import { TextField } from '../../Comp/TextField';
import './Signup.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const Signup = () => {

    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
    })

    return (
        <div className='Signup'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {formik => (
                    <div className='Singup_box'>
                        <h1 className="Login_text">Sign up</h1>
                        <Form>
                            <TextField label="Email" name="email" type="email" />
                            <TextField label="Confirm Email" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="password" type="password" />
                            <div className='Login_buttons'>
                                <button className="btn btn-dark mt-3" type="submit">Register</button>
                                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Signup;