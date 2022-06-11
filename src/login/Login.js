import { Grid, Paper, Avatar, TextField, Button, Link, Typography} from "@material-ui/core";
import "./Login.css";
import  LockOutlinedIcon  from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { toast } from "react-toastify";


function Login(){

const SignUpSchema = Yup.object().shape(
    {
        username: Yup.string()
        .min(5,'Should be 5 character long')
        .max(15,'should not exceed 15 characters')
        .required('Required'),

        password: Yup.string()
        .min(5,'Should be 5 character long')
        .max(15,'should not exceed 15 characters')
        .required('Required'),
    }
);


    return(
        <Grid>
        <Paper elevation={10} className="login-form">
          <Grid align="center">
          <Avatar className="bg-primary"><LockOutlinedIcon/></Avatar>
            <h3 className="mt-4">LOGIN</h3>
        </Grid>
        <Formik initialValues = {{username:'', password:''}}
            validationSchema = {SignUpSchema}
            onSubmit = {value => {
                toast.info("login is successfully", {position:"top-center"})
            }}
            >
        {({errors,touched}) => (
                <Form>
                    <Field 
                    as={TextField} 
                    className="mt-4"
                    label='Username' 
                    name="username"
                    placeholder='Enter username' 
                    fullWidth                    
                    />
                    {
                     errors.username && touched.username ? (<div>{errors.username}</div>) : null
                    }
                    <Field 
                    as={TextField}
                    className="mt-4"
                    label='Password' 
                    name="password"
                    placeholder='Enter password' 
                    type='password' 
                    fullWidth  
                     />
                     {
                     errors.password && touched.password ? (<div>{errors.password}</div>) : null
                    }
                    <Button 
                    className="mt-4" 
                    type='submit' 
                    variant="contained"
                    fullWidth   
                    >SUBMIT</Button>
                </Form> )}
          </Formik>
        <Typography className="mt-4">if you have not account?<Link className="ms-4" href="register">Register</Link></Typography>
        <Typography className="mt-4"><Link className="ms-4" href="#" >Forgot password ?</Link></Typography>
        </Paper>  
       </Grid>

    )  
}


export default Login;