import { Typography } from "@mui/material"
import bannerImg from '../../Assets/LoginPage/Vector_2677 2.svg';
import LazyImage from "../../Utils/LazyImage";
import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <React.Fragment>
        <div>
            <LazyImage src={bannerImg} alt="banner-img" width="100%" />
            <Typography variant="h2">
                Enjoy the <span>Cyber Security</span> Experience
            </Typography>
            <div>
                <button></button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login