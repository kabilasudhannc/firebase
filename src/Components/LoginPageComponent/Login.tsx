import Box from '@mui/material/Box';
import { Formik, Form, Field , ErrorMessage } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import logo from '../../Assets/LoginPage/imageLogo.svg';
import LazyImage from '../../Utils/LazyImage';
import LoginIcon from '@mui/icons-material/Login';
import style from './Login.module.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios';
import {apiConfig} from '../../Constants/Constant';


type Props = {
    forgotClick : any,
}

const initialValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter an email address"),
    password: Yup.string()
        .required('No password provided')
        .min(4, 'Password is too short - should be 4 chars minimum')
})



const Login = (props : Props) => {

    const [loginData , setLoginData] = useState<object>({});
    const [loading , setLoading] = useState<boolean>(false);

    return (

        <Box
            component="div"
            className={style.formbox}
        >
            <Box component="div" className={style.imageBox}>
                <LazyImage src={logo} width="150" height="80" alt="logo" />
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ async (values , formikHelpers) => {
                    setLoading(true);
                   await axios({
                        method : "post",
                        url : `${apiConfig?.loginRequest}`,
                        headers: { "Content-Type": "application/json"},
                        data : {
                            email : values.email,
                            password : values.password,
                        }
                        
                    }).then(res => {
                        setLoading(false);
                        console.log(res)
                    })
                    .catch(err => {
                        setLoading(false);
                        console.log(err)
                    })

                }}
            >
                {({errors , isValid , touched , dirty}) => (
                    <Form className={style.loginForm}>
                        <Field
                            as={TextField}
                            type="email"
                            name="email"
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            style={{ marginTop: "0" }}
                            error = {Boolean(errors.email) && Boolean(touched.email)}
                        />
                        <Box className={style.errorText}>
                            <ErrorMessage name="email" />
                        </Box>
                        <Field
                            as={TextField}
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                            error={Boolean(errors.password) && Boolean(touched.password)}
                        />
                        <Box className={style.errorText}>
                            <ErrorMessage name="password" />
                        </Box>
                        <Typography className={style.forgotPassword} onClick={props.forgotClick}>Forgot Password ?</Typography>
                        <Button variant="contained"
                            fullWidth
                            className={style.signIn}
                            disabled={!dirty || !isValid}
                            type="submit"
                        >{loading === true ? <CircularProgress size="1.65rem" sx={{
                            color : "white",
                        }}/> : (<><span>Sign In</span> <LoginIcon /></>)} </Button>
                    </Form>

                )}
            </Formik>

        </Box>
    )
}

export default Login