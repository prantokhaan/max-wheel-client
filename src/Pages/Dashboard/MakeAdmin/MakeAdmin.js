import { Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ButtonStyled = styled(Button)({
  fontFamily: `'Poppins', sans-serif`,
  fontSize: "14px",
  fontWeight: 500,
  color: "#4361EE",
  backgroundColor: "transparent",
  border: "2px solid #4361EE",
  transition: "all 0.5s ease",

  "&:hover": {
    backgroundColor: "#4361EE",
    boxShadow: "none",
    color: "white",
    fontWeight: 500,
  },
});

const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false);


    const handleAdminEmail = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = {email}
        fetch("http://localhost:5000/users/admin", {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(user)

        }).then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('Admin made successfullly');
                e.target.reset();
            }
        })
        e.preventDefault()
    }
    return (
      <Container style={{ marginTop: "-70px" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: `'Oswald', sans-serif`,
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "#393343",
            paddingBottom: "20px",
            backgroundColor: "white",
            borderBottom: "2px solid gray",
            marginBottom: "20px",
          }}
        >
          Make an Admin
        </Typography>
        <form onSubmit={handleMakeAdmin}>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleAdminEmail}
            label="Input Email which you want to make admin"
            name="email"
            type="email"
            sx={{ mb: 3, mr: 3 }}
            required
          />
          <br />
          <ButtonStyled type="submit" variant="contained">
            Make Admin
          </ButtonStyled>
        </form>
      </Container>
    );
};

export default MakeAdmin;