import animationData from '../animations/landinganimation/data';
import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/button_arrow/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    animation:{
        minWidth:"21em",
        maxWidth:"50em",
        marginTop:"2em",
        marginLeft:"10%"

    },estimate:{
        ...theme.typography.estimate,

        backgroundColor:theme.palette.secondary.main,
        borderRadius: "50px",
        marginRight: "50px",
        marginLeft: "50px",
        textDecoration: "none",
        "&:hover":{
            backgroundColor: theme.palette.secondary.dark
        }
    },learnMorebtn:{
        fontsize:"0.9rem",
        ...theme.typography.learnButton
    },maincontainer:{
        marginTop: "5em",
    },icon:{
        marginLeft:"2em",
        [theme.breakpoints.down('sm')]:{
            marginLeft:"0"
        }
    },serviceContainer:{
        marginTop:"12em",
        [theme.breakpoints.down('sm')]:{
            padding:25
        }
    }
}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


export default function LandingPage() {
    const theme = useTheme();

    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return <Fragment>

        <Grid container direction={"column"} className={classes.maincontainer}>

            {/*HERO Section*/}
            <Grid item>
                <Grid container direction={"row"} justify={"flex-end"} alignItems={"center"}>
                    <Grid  item xs>
                        <Typography variant={"h2"} align={"center"}>Bringing West Coast Technology <br/> To the midwest</Typography>
                        <Grid container justify={"center"} spacing={2}>
                            <Grid  item>
                                <Button variant={"contained"} className={classes.estimate}>
                                Free Estimate
                                </Button>
                            </Grid>
                            <Grid  item>
                                <Button variant={"outlined"} className={classes.learnMorebtn}>
                                    Learn More
                                    &nbsp;
                                    <ButtonArrow width={"15px"} height={"15px"} fill={theme.palette.primary.main}/>
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid  className={classes.animation} item xs><Lottie  options={defaultOptions}
                                       height={"100%"}

                                       width={"100%"}
                    />
                    </Grid>

                </Grid>
            </Grid>
            {/*Service*/}
            <Grid item>
                <Grid container direction={"row"} className={classes.serviceContainer} justify={matchesSM?"center":"flex-start"}>

                <Grid item style={{marginLeft:matchesSM?"0":"5em",textAlign:matchesSM?"center":"flex-start"}}>
                    <Typography variant={"h4"}>
                    Custom Software Development
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Save Energy. Save Time. Save Money
                    </Typography><br/>
                    <Typography variant={"subtitle1"}>
                       complete Digital Solutions, from investigation to <span>Celebration</span>
                    </Typography>
                    <Button variant={"outlined"} className={classes.learnMorebtn}>
                        Learn More
                        &nbsp;
                        <ButtonArrow width={"15px"} height={"15px"} fill={theme.palette.primary.main}/>
                    </Button>

                </Grid>
                    <Grid item>
                        <img className={classes.icon} style={{marginTop:matchesSM?"2em":"0"}} src={customSoftwareIcon} alt="custom software icon"/>
                    </Grid>

                </Grid>


            </Grid>


        </Grid>


    </Fragment>
}