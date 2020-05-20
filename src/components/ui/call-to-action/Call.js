import {makeStyles} from "@material-ui/core/styles";

import useTheme from "@material-ui/core/styles/useTheme";
import {useMediaQuery} from "@material-ui/core";
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../button_arrow/ButtonArrow";

import background from '../../../assets/background.jpg';
import mobileBackground from '../../../assets/mobileBackground.jpg';


const useStyles = makeStyles(theme => ({
    contactBtn:{

        ...theme.typography.learnButton,
        fontsize:"0.1rem",
        marginTop:"2em",
        borderWidth:1.5,
        [theme.breakpoints.down('sm')]:{
            marginTop:"1em"
        }
    },
    backdrop: {
        backgroundImage: `url(${background})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        [theme.breakpoints.down('sm')]:{
            backgroundImage: `url(${mobileBackground})`

        }
    },callContainer:{
        marginTop:"12em",
        marginBottom:"12em",
        padding:"5em",
        [theme.breakpoints.down('sm')]:{
            marginTop: "4em",
            marginBottom: "4em",
            padding:"3em"
        }
    },estimate:{
        ...theme.typography.estimate,

        backgroundColor:theme.palette.secondary.main,
        borderRadius: 50,
        height:80,
        width:150,
        fontsize:"1.5rem",
        textDecoration: "none",
        "&:hover":{
            backgroundColor: theme.palette.secondary.dark
        }
    }
}));

const Call = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    return <Fragment>

        <Grid container
              direction={"row"} className={classes.backdrop} justify={matchesSM?"center":"space-between"} >
            <Grid item className={classes.callContainer} >
                <Typography variant={"h2"}>
                    Simple Software. <br/>Revolutionary
                    Results.
                </Typography>
                <Typography variant={"subtitle2"}>
                    Take advantage of the 21st Century
                </Typography>
                <Button variant={"outlined"}
                        className={classes.contactBtn}>
                    Learn More
                    &nbsp;
                    <ButtonArrow width={"15px"}
                                 height={"15px"}
                                 fill={theme.palette.primary.main}/>
                </Button>
            </Grid>
            <Grid item className={classes.callContainer} >
                <Button style={{marginTop: matchesSM ? "1em" : "2em"}}
                        variant={"contained"}
                        className={classes.estimate}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>

    </Fragment>
};


export default Call;