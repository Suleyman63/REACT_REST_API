import { Grid, Paper, Avatar, TextField, Button, TextareaAutosize } from "@material-ui/core";
import "./Contact.css";
import  PersonEmail  from "@material-ui/icons/Email";
import React, {useState} from 'react'
import emailjs from "emailjs-com"


const Result = () => {
  return(
      <p>Your message has been successfully sent.</p>
  )
}


const Deneme = () => { 

  const [result, showResult] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template", e.target, "user_id" )
        .then((result) => {console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        })
        e.target.reset();
        showResult(true)
    }

    setTimeout(() => {
        showResult(false);
    }, 3000);

  return (
    <form className="form" onSubmit={sendEmail} action="">
    <Grid>
    <Paper elevation={10} className="contact-form">
      <Grid align="center">
      <Avatar className="bg-primary"><PersonEmail fontSize="large"/></Avatar>
        <h3 className="mt-4">CONTACT WITH US</h3>
    </Grid>
    <TextField className="mt-2" label='Firstname' type="name" placeholder='Enter Firstname' fullWidth required/>
    <TextField className="mt-2" label='Lastname' type="lastname" placeholder='Enter Lastname' fullWidth required/>
    <TextField className="mt-2" label='Phone' type="phone" placeholder='Enter Phone' fullWidth required/>
    <TextField className="mt-2" label='Email' type="email" placeholder='Enter Email' fullWidth required/>
    <TextareaAutosize
      className="mt-3"
      aria-label="minimum height"
      minRows={5}
      placeholder="Message"
      fullWidth
      style={{width:320}}

/>
    <Button className="mt-2" type="submit" color="primary" variant="contained" fullWidth>SUBMIT</Button>
    </Paper>  
   </Grid>
   <div>{result ? <Result/> : null}</div>
  </form>
)};





export default Deneme;