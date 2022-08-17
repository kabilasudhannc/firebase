import {Button, ButtonGroup, Stack, Typography } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';
import bannerImg from '../../Assets/LoginPage/Vector_2677 2.svg';
import LazyImage from "../../Utils/LazyImage";
import React from "react";
import { Box } from "@mui/system";



const Login = () => {
  return (
    <React.Fragment>
        <div>
            <LazyImage src={bannerImg} alt="banner-img" width="100%" />
            <Typography>
                Enjoy the <span>Cyber Security</span> Experience
            </Typography>
            <Stack spacing={4} direction='row'>
                <ButtonGroup variant="text">
                    <Button startIcon={<CircleIcon />}>
                        Attack Surface
                    </Button>
                    <Button startIcon={<CircleIcon />}>
                        Breach Notification
                    </Button>
                    <Button startIcon={<CircleIcon />}>
                        Dark Web Monitoring
                    </Button>
                    <Button startIcon={<CircleIcon />}>
                        Brand Monitoring
                    </Button>
                    <Button startIcon={<CircleIcon />}>
                        Email Security
                    </Button>
                    <Button startIcon={<CircleIcon />}>
                        Mobile Security
                    </Button> 
                </ButtonGroup>
            </Stack>
            <Box>
                
            </Box>
        </div>
    </React.Fragment>
  )
}

export default Login