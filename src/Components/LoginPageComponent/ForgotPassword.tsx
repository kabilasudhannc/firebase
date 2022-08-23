import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LazyImage from '../../Utils/LazyImage';
import logo from '../../Assets/LoginPage/imageLogo.svg';
import { Button, TextField, Typography , Box } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './Login.module.css';
import LoginIcon from '@mui/icons-material/Login';
import * as Yup from 'yup';

type Props = {
    forgotClick?: any,
}



const ForgotPassword = (props : Props) => {

    const initialValues = {
        email : "",
    }

    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Please enter an email address"),
    })
  return (
    <Box component="div" className={style.formbox}>
          <Box component="div" style={{ position: "relative" }}>
              <KeyboardBackspaceIcon className={style.arrowBack} onClick={props.forgotClick} />
              <Box component="div" className={style.imageBox}>
                <LazyImage src={logo} width="150" height="80" alt="logo" />
              </Box>
              <Typography className={style.instruction}>
                  Type in Your Email Address To Recieve Password Reset Instructions.
              </Typography>
              <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={() => {

                  }}
              >
                  {({errors , touched , dirty , isValid }) => (
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
                              error={Boolean(errors.email) && Boolean(touched.email)}                              
                          />
                          <Box className={style.errorText}><ErrorMessage name="email" /></Box>
                          <Box mt={2}>
                            <Button variant="contained" fullWidth className={style.signIn} type="submit" >Submit</Button>
                          </Box>
                      </Form>
                  )}
              </Formik>
          </Box>
    </Box>
  )
}

export default ForgotPassword