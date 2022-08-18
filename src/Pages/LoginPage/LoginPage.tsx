import { Typography } from "@mui/material"
import bannerImg from '../../Assets/LoginPage/Vector_2677 2.svg';
import LazyImage from "../../Utils/LazyImage";
import {Link} from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import {useState} from 'react';
import style from './LoginPage.module.css';


import Login from "../../Components/LoginPageComponent/Login";

const LoginPage:React.FC = () => {


  return (
        <div className={style.bannerContainer}>
              <LazyImage src={bannerImg} alt="banner-img" width="100%" />
              <Typography variant="h3" className={style.bannerHeading}>
                  Enjoy the <span className={style.spanHeading}>Cyber Security</span> <br/> Experience
              </Typography>
              <div className={style.buttonFlex}>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} /> Attack Surface</Link>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} />Breach Notifcation</Link>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} />DarkWeb Monitoring</Link>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} />Brand Monitoring</Link>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} />Email Security</Link>
                  <Link to="/" className={style.buttons}><CircleIcon style={{fontSize : "10px" , marginRight : "15px"}} />Mobile Security</Link>
              </div>
             <Login />
      </div>
  )
}

export default LoginPage;