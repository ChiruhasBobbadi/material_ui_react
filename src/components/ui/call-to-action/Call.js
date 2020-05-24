import {makeStyles} from "@material-ui/core/styles";

import useTheme from "@material-ui/core/styles/useTheme";
import {useMediaQuery} from "@material-ui/core";
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../button_arrow/ButtonArrow";

import background from '../../../assets/background.jpg';
import mobileBackground
    from '../../../assets/mobileBackground.jpg';
import {Link} from "react-router-dom";


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
        backgroundAttachment:"fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "80%",
        width: "100%",
        [theme.breakpoints.down('sm')]:{
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment:"inherit"
        }
    },callContainer:{
        marginTop:"12em",
        marginBottom:"12em",
        padding:"5em",
        [theme.breakpoints.down('sm')]:{
            marginTop: "2em",
            marginBottom: "2em",
            padding: "2em"
        }
    },estimate:{
        ...theme.typography.estimate,
        backgroundColor:theme.palette.secondary.main,
        borderRadius: 50,
        height: 60,
        width:150,
        fontsize:"1.5rem",
        textDecoration: "none",
        color: 'white',
        marginTop: "5em",
        "&:hover":{
            backgroundColor: theme.palette.secondary.dark
        },
        [theme.breakpoints.down('sm')]: {

            height: 60,
            width: 140,
            marginBottom: "2em"
        }
    }
}));

const Call = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    return <Fragment>

        <Grid container
              direction={matchesSM ? "column" : "row"}
              className={classes.backdrop}
              justify={matchesSM ? "center" : "space-between"}>
            <Grid item
                  className={classes.callContainer}
                  style={{textAlign: matchesSM ? "center" : "inherit"}}>
                <Typography variant={"h2"}>
                    Simple Software. <br/>Revolutionary
                    Results.
                </Typography>
                <Typography variant={"subtitle2"}>
                    Take advantage of the 21st Century
                </Typography>
                <Button onClick={()=>props.setValue(2)} variant={"outlined"}
                        className={classes.contactBtn} component={Link} to={'/revolution'}>
                    Learn More
                    &nbsp;
                    <ButtonArrow width={"15px"}
                                 height={"15px"}
                                 fill={theme.palette.primary.main}/>
                </Button>
            </Grid>
            <Grid item
                  className={classes.callContainer}
                  style={{textAlign: matchesSM ? "center" : "right"}}>
                <Button onClick={()=>props.setValue(5)}
                        variant={"contained"}
                        className={classes.estimate} component={Link} to={'/estimate'}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>

    </Fragment>
};


export default Call;