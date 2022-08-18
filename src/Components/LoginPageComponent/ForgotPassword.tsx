import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LazyImage from '../../Utils/LazyImage';
import logo from '../../Assets/LoginPage/imageLogo.svg';
import { Button, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import style from './Login.module.css';
import LoginIcon from '@mui/icons-material/Login';

import * as Yup from 'yup';
import React from 'react';

const ForgotPassword = () => {

    const initialValues = {
        email : "",
    }

    const validationSchema = Yup.object({
        email : Yup.string().email().required(),
    })

    function handleSubmit(){

    }
  return (
    <div className={style.formbox}>
        <React.Fragment>
        <ArrowBackIcon className={style.arrowBack} />
        <LazyImage src={logo} width="150" height="80" alt="logo-img" />
        <p className={style.instruction}>
            Type in Your Email Address To Recieve Email Reset Instructions.
        </p>
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => handleSubmit()}
            >
                {({ setFieldValue, values }) => (
                    <Form className={style.loginForm}>
                        <Field
                            component={TextField}
                            name="email"
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            style={{ marginTop: "0", marginBottom : "20px" }}
                        />
                        <Button variant="contained" endIcon={<LoginIcon />} fullWidth className={style.signIn} >Sign In</Button>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    </div>
  )
}

export default ForgotPassword