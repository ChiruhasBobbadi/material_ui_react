import {makeStyles, useTheme} from '@material-ui/core/styles/index';
import React, {Fragment} from 'react';
import footerAdornment from '../../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        zIndex: theme.zIndex.modal + 1


    },
    adornment: {
        width: "27em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "23em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "19em",
        },

    },
    mainContainer: {
        position: "absolute"
    }, link: {
        color: 'white',
        fontFamily: "arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration:"none"
    },gridItem:{
        margin:"3em"
    }


}));

const Footer = () => {

    const classes = useStyles();
    const theme = useTheme();

    return <Fragment>

        <footer className={classes.footer}>


            <Grid container className={classes.mainContainer} justify={"center"} spacing={2} >

                <Grid  item className={classes.gridItem}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item className={classes.link} component={Link} to={'/'}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item className={classes.gridItem} >
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item className={classes.link} component={Link} to={'/services'}>
                            Services
                        </Grid>




                            <Grid item className={classes.link} component={Link} to={'/customsoftware'}>
                                Custom Software Development
                            </Grid>

                            <Grid item className={classes.link} component={Link} to={'/mobileapps'}>
                                Mobile App Development
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/websites'}>
                                Website Development
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem} >
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item className={classes.link} component={Link} to={'/revolution'}>
                            The Revolution
                        </Grid>




                        <Grid item className={classes.link} component={Link} to={'/revolution'}>
                            Vision
                        </Grid>

                        <Grid item className={classes.link} component={Link} to={'/revolution'}>
                            Technology
                        </Grid>


                        <Grid item className={classes.link} component={Link} to={'/revolution'}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>




                <Grid item className={classes.gridItem}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item className={classes.link} component={Link} to={'/about'}>
                            About Us
                        </Grid>



                            <Grid item className={classes.link} component={Link} to={'/about'}>
                                History
                            </Grid>

                            <Grid item className={classes.link} component={Link} to={'/about'}>
                                Team
                            </Grid>


                </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid item className={classes.link} component={Link} to={'/contact'}>
                          Contact Us
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>


            <img src={footerAdornment} className={classes.adornment}/>
        </footer>
    </Fragment>


};
export default Footer;