import Box from '@mui/material/Box';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';
import logo from '../../Assets/LoginPage/imageLogo.svg';
import LazyImage from '../../Utils/LazyImage';
import LoginIcon from '@mui/icons-material/Login';
import style from './Login.module.css';


const Login = () => {

    const initialValues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Address").required("Required"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    })

    function handleSubmit() {


    }

    return (

        <Box
            component="div"
            className={style.formbox}
        >
            <LazyImage src={logo} width="150" height="80" alt="logo" />
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
                            style={{ marginTop: "0" }}
                        />
                        <Field
                            component={TextField}
                            name="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            className={style.textField}
                        />
                        <p className={style.forgotPassword}>Forgot Password ?</p>
                        <Button variant="contained" endIcon={<LoginIcon />} fullWidth className={style.signIn} >Sign In</Button>
                    </Form>

                )}
            </Formik>

        </Box>
    )
}

export default Login