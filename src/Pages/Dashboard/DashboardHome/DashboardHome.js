import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './DashboardHome.css';
import welcome from './../../../images/Welcome-amico.svg'

const DashboardHome = () => {
    const {user, logOut} = useAuth();
    return (
      <Container style={{ marginTop: "-70px" }}>
       <Box style={{textAlign: 'center'}}>
            <img src={welcome} alt="" width="700px" /> 
       </Box>
      </Container>
    );
};

export default DashboardHome;