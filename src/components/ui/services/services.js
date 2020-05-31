import {makeStyles} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ButtonArrow from "../button_arrow/ButtonArrow";
import customSoftwareIcon
    from "../../../assets/Custom Software Icon.svg";
import MobileIcon from "../../../assets/mobileIcon.svg";
import websiteIcon from "../../../assets/websiteIcon.svg";
import useTheme from "@material-ui/core/styles/useTheme";


const useStyles = makeStyles(theme =>({
    icon:{
        marginLeft:"2em",
        marginRight: "2em",
        [theme.breakpoints.down('sm')]:{
            marginLeft: "0",
            marginRight: "0"
        }
    },learnMorebtn:{
        fontsize:"0.9rem",
        marginTop:"2em",
        ...theme.typography.learnButton,
        [theme.breakpoints.down('sm')]:{
            marginTop:"1em"
        }

    },
    serviceContainer:{
        marginTop: "10em",
        [theme.breakpoints.down('sm')]:{
            marginTop: "4em",
            padding:25
        }
    }
}));
const Services = (props)=>{
    const theme = useTheme();

    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return <Grid container direction={"column"} >
        <Grid item style={{textAlign: matchesSM ? "center" : "flex-end",marginLeft:matchesSM?0:'5em'}} >
            <Typography variant={"h2"} >
                Services
            </Typography>
        </Grid>

        {/*Mobile Apps*/}
        <Grid item>
            <Grid container style={{marginTop:matchesSM?'1em':'5em'}}
                  direction={"row"}
                  className={classes.serviceContainer}
                  justify={matchesSM ? "center" : "flex-end"}>

                <Grid item
                      style={{

                          textAlign: matchesSM ? "center" : "flex-end",
                          width:matchesSM?undefined:'35em'
                      }}>
                    <Typography variant={"h3"}>
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
                         width={"250em"}
                         alt="Mobile Apps Icon"/>
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

        {/*Website*/}
        <Grid item>
            <Grid container
                  style={{marginBottom:'10em'}}
                  direction={"row"}
                  className={classes.serviceContainer}
                  justify={matchesSM ? "center" : "flex-end"}>

                <Grid item
                      style={{

                          textAlign: matchesSM ? "center" : "flex-start",
                          width:matchesSM?undefined:'35em'

                      }}>
                    <Typography variant={"h3"}>
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
                         width={"250em"}
                         alt="Website Icon"/>
                </Grid>

            </Grid>
        </Grid>
    </Grid>
};

export default Services;