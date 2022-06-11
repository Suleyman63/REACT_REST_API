import React from "react";
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, Checkbox} from "@material-ui/core";
import "./Register.css";
import  PersonIcon  from "@material-ui/icons/Person";


function Register(){

    return(
       
        <Grid>
        <Paper elevation={10} className="register-form">
          <Grid align="center">
          <Avatar className="bg-primary"><PersonIcon fontSize="large"/></Avatar>
            <h3 className="mt-4">REGISTER</h3>
        </Grid>
        <TextField className="mt-2" label='Firstname' type="name" placeholder='Enter Firstname' fullWidth required/>
        <TextField className="mt-2" label='Lastname' type="lastname" placeholder='Enter Lastname' fullWidth required/>
        <TextField className="mt-2" label='Phone' type="phone" placeholder='Enter Phone' fullWidth required/>
        <TextField className="mt-2" label='Email' type="email" placeholder='Enter Email' fullWidth required/>
        <TextField className="mt-2" label='Username' type="email" placeholder='Enter username' fullWidth required/>
        <TextField className="mt-2" label='Password' type="password" placeholder='Enter password' fullWidth required/>
        <FormControlLabel control={<Checkbox/>} label="Admin" color="secondary" />
        <FormControlLabel control={<Checkbox/>} label="User" color="secondary" />
        <Button className="mt-2" type="submit" color="primary" variant="contained" fullWidth>CREATE ACCOUNT</Button>
        </Paper>  
       </Grid>
     
 
    )
    
}

export default Register;