'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, deepPurple, green, lightBlue, purple } from '@mui/material/colors';


export default function Page() {



  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */ 
  async function runDBCallAsync(url) {


    const res = await fetch(url);
    const data = await res.json();

 
    if(data.data== "valid"){
      console.log("login is valid!")

      
    } else {

      console.log("not valid  ")
    }
  }


  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
	const handleSubmit = (event) => {
		
		console.log("handling submit");


    event.preventDefault();
  
		const data = new FormData(event.currentTarget);


    let email = data.get('email')
		let pass = data.get('pass')
		let firstName = data.get('firstName')
		let surname = data.get('surname')
    let dob = data.get('dob')

    console.log("Sent email:" + email)
    console.log("Sent pass:" + pass)
    console.log("Sent firstName:" + firstName)
    console.log("Sent surname:" + surname)
    console.log("Sent dob:" + dob)



    runDBCallAsync(`api/login?email=${email}&pass=${pass}&firstName=${firstName}&surname=${surname}&dob=${dob}`)




  }; // end handler




  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: lightBlue[500],
      },
    },
  });
  



  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Create Password"
            type="pass"
            id="pass"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="First Name"
            type="firstName"
            id="firstName"
            autoComplete="firstName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="surname"
            label="Surname"
            type="surname"
            id="surname"
            autoComplete="surname"
          />
          <TextField
          margin="normal"
          required
          fullWidth
          name="dob"
          label="Date of Birth"
          type="text"
          id="dob"
          autoComplete=""
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="" variant="body2">
                Already have an account? Sign in here...
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>

    </ThemeProvider>

  );
}