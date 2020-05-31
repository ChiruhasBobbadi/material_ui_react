import animationData
    from '../animations/landinganimation/data';
import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/button_arrow/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import customSoftwareIcon
    from '../assets/Custom Software Icon.svg';
import {useMediaQuery} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground
    from '../assets/repeatingBackground.svg';
 import infoBackground from '../assets/infoBackground.svg'
import Call from "./ui/call-to-action/Call";
import {Link} from "react-router-dom";


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
    },
    learnMorebtn:{
        fontsize:"0.9rem",
        marginTop:"2em",
        ...theme.typography.learnButton,
        [theme.breakpoints.down('sm')]:{
            marginTop:"1em"
        }

    },maincontainer:{
        marginTop: "5em",
    },icon:{
        marginLeft:"2em",
        marginRight: "2em",
        [theme.breakpoints.down('sm')]:{
            marginLeft: "0",
            marginRight: "0"
        }
    },
    serviceContainer:{
        marginTop: "12em",
        [theme.breakpoints.down('sm')]:{
            marginTop: "4em",
            padding:25
        }
    }, revDiv: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revCard: {
        marginTop: "12em",
        marginBottom: "12em", padding: "5em",
        boxShadow: theme.shadows[10],
        borderRadius: 20, [theme.breakpoints.down('sm')]: {
            marginTop: "4em",
            marginBottom: "4em",
            paddingTop: "3em",
            paddingBottom: "3em",
            paddingRight: 0,
            paddingLeft: 0,
            marginRight: "2em",
            marginLeft: "2em"
        }
    },
    contactBtn:{

        ...theme.typography.learnButton,
        fontsize:"0.1rem",
        marginTop:"2em",
        color:"#ffffff",
        borderColor:"white",
        borderWidth:1.5,
        [theme.breakpoints.down('sm')]:{
            marginTop:"1em"
        }
    },infoBackground:{
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },infoContainer:{
        marginTop:"12em",
        marginBottom: "12em",
        padding: "5rem",
        [theme.breakpoints.down('sm')]: {
            marginTop: "4em",
            marginBottom: "4em",

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


export default function LandingPage(props) {
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
                                <Button style={{marginTop: matchesSM ? "1em" : "2em"}}
                                        variant={"contained"}
                                        className={classes.estimate}
                                        onClick={()=>props.setValue(5)}
                                component={Link} to={'/estimate'}>
                                Free Estimate
                                </Button>
                            </Grid>
                            <Grid  item>
                                <Button  onClick={()=>props.setValue(2)} component={Link} to={'/revolution'} variant={"outlined"} className={classes.learnMorebtn}>
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
                <Grid container
                      direction={"row"}
                      className={classes.serviceContainer}
                      justify={matchesSM ? "center" : "flex-start"}>

                <Grid item style={{marginLeft:matchesSM?"0":"5em",textAlign:matchesSM?"center":"flex-start"}}>
                    <Typography variant={"h3"}>
                    Custom Software Development
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Save Energy. Save Time. Save Money
                    </Typography><br/>
                    <Typography variant={"subtitle1"}>
                       complete Digital Solutions, from investigation to <span>Celebration</span>
                    </Typography>
                    <Button  onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} variant={"outlined"} className={classes.learnMorebtn} component={Link} to={'/customSoftware'}>
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
            {/*Mobile Apps*/}
            <Grid item>
                <Grid container
                      direction={"row"}
                      className={classes.serviceContainer}
                      justify={matchesSM ? "center" : "flex-end"}>

                    <Grid item
                          style={{
                              marginRight: matchesSM ? "0" : "5em",
                              textAlign: matchesSM ? "center" : "flex-end"
                          }}>
                        <Typography variant={"h4"}>
                            IOS/Android Development
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Extend Functionality. Excess
                            Access. Increase Engagement.
                        </Typography><br/>
                        <Typography variant={"subtitle1"}>
                            Integrate your web experience or
                            create a standalone
                            app{matchesSM ? null :
                            <br/>}with either mobile
                            platform.
                        </Typography>
                        <Button  onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}} variant={"outlined"}
                                className={classes.learnMorebtn} component={Link} to={'/mobileapps'}>
                            Learn More
                            &nbsp;
                            <ButtonArrow width={"15px"}
                                         height={"15px"}
                                         fill={theme.palette.primary.main}/>
                        </Button>

                    </Grid>
                    <Grid item>
                        <img className={classes.icon}
                             style={{marginTop: matchesSM ? "2em" : "0"}}
                             src={MobileIcon}
                             alt="Mobile Apps Icon"/>
                    </Grid>

                </Grid>
            </Grid>
            {/*Website*/}
            <Grid item>
                <Grid container
                      direction={"row"}
                      className={classes.serviceContainer}
                      justify={matchesSM ? "center" : "flex-start"}>

                    <Grid item
                          style={{
                              marginLeft: matchesSM ? "0" : "5em",
                              textAlign: matchesSM ? "center" : "flex-start"
                          }}>
                        <Typography variant={"h4"}>
                          Website Development
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Reach More. Discover More. Sell More.
                        </Typography><br/>
                        <Typography variant={"subtitle1"}>
                            Optimised for Search Engines, built for speed
                        </Typography>
                        <Button onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}} variant={"outlined"}
                                className={classes.learnMorebtn} component={Link} to={'/websites'}>
                            Learn More
                            &nbsp;
                            <ButtonArrow width={"15px"}
                                         height={"15px"}
                                         fill={theme.palette.primary.main}/>
                        </Button>

                    </Grid>
                    <Grid item>
                        <img className={classes.icon}
                             style={{marginTop: matchesSM ? "2em" : "0"}}
                             src={websiteIcon}
                             alt="Website Icon"/>
                    </Grid>

                </Grid>
            </Grid>
            {/*Card*/}
            <Grid item
                  className={classes.revDiv}
                  style={{marginTop: matchesSM ? "4em" : "12em"}}>
                <Grid container
                      direction={"column"}
                      alignItems={"center"}
                      justify={"center"}
                      style={{
                          width: "100%",
                          height: "100%"
                      }}
                >
                    <Card className={classes.revCard}>
                        <CardContent>
                            <Grid container
                                  direction={"column"}>
                                <Grid item
                                      style={{textAlign: "center"}}>
                                    <Typography variant={"h4"}>
                                        The Revolution
                                    </Typography>
                                    <Typography variant={"subtitle1"}
                                                style={{marginTop: "1em"}}>
                                        Visionary insights
                                        coupled with
                                        cutting-edge
                                        technology is
                                        a <br/>
                                        recipe for
                                        revolution

                                    </Typography>
                                    <Button onClick={()=>props.setValue(2)}  variant={"outlined"}
                                            className={classes.learnMorebtn} component={Link} to={'/revolution'}>
                                        Learn More
                                        &nbsp;
                                        <ButtonArrow width={"15px"}
                                                     height={"15px"}
                                                     fill={theme.palette.primary.main}/>
                                    </Button>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>


                </Grid>

            </Grid>
            {/*Information*/}
            <Grid item className={classes.infoBackground}>
                <Grid container direction={"row"} justify={matchesSM?"center":"space-between"}
                       className={classes.infoContainer} >
                    <Grid item style={{textAlign:"center"}}>
                        <Typography variant={"h2"} style={{color:"#ffffff"}}>
                            About Us
                        </Typography>
                        <Typography variant={"subtitle2"} style={{fontSize:"1rem"}}>
                        Let's get personal
                        </Typography>
                        <Button onClick={()=>props.setValue(3)}  variant={"outlined"}
                                className={classes.contactBtn} component={Link} to={'/about'}>
                            Learn More
                            &nbsp;
                            <ButtonArrow width={"15px"}
                                         height={"15px"}
                                         fill={"#FFFFFF"}/>
                        </Button>
                    </Grid>
                    <Grid item style={{textAlign:"center",marginTop:matchesSM?"4em":"0em"}}>
                        <Typography variant={"h2"} style={{color:"#ffffff"}}>
                            Contact Us
                        </Typography>
                        <Typography variant={"subtitle2"} style={{fontSize:"1rem"}}>
                            Say Hello
                        </Typography>
                        <Button onClick={()=>props.setValue(4)} variant={"outlined"}
                                className={classes.contactBtn} component={Link} to={'/contact'}>
                            Learn More
                            &nbsp;
                            <ButtonArrow width={"15px"}
                                         height={"15px"}
                                         fill={"#FFFFFF"}/>
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
            {/*Call to Action*/}
            <Grid item>
                <Call setValue={props.setValue}
                      setSelectedIndex={props.setSelectedIndex}/>
            </Grid>



        </Grid>


    </Fragment>
}