import {makeStyles, useTheme} from '@material-ui/core/styles/index';
import React, {Fragment} from 'react';
import footerAdornment from '../../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import {Hidden} from "@material-ui/core";
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';

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
        textDecoration: "none"
    }, gridItem: {
        margin: "3em"
    }, icon: {
        width: "4em",
        height: "4em",
        [theme.breakpoints.down("xs")]:{
            width: "2em",
            height: "2em",
        }
    },social:{
        position: "absolute",
        marginTop:"-6em",
        right:"1.5em"

    }


}));

const Footer = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    return <Fragment>

        <footer className={classes.footer}>

            <Hidden mdDown>
                <Grid container className={classes.mainContainer} justify={"center"} spacing={2}>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"}  spacing={2}>
                            <Grid item className={classes.link} component={Link} to={'/'}
                                  onClick={() => props.setValue(0)}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item className={classes.link} component={Link} to={'/services'} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(0)
                            }}>
                                Services
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/customsoftware'}
                                  onClick={() => props.setSelectedIndex(1)}>
                                Custom Software Development
                            </Grid>

                            <Grid item className={classes.link} component={Link} to={'/mobileapps'}
                                  onClick={() => props.setSelectedIndex(2)}>
                                Mobile App Development
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/websites'}
                                  onClick={() => props.setSelectedIndex(3)}>
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item className={classes.link} component={Link} to={'/revolution'}
                                  onClick={() => props.setValue(2)}>
                                The Revolution
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/revolution'}
                                  onClick={() => props.setValue(2)}>
                                Vision
                            </Grid>

                            <Grid item className={classes.link} component={Link} to={'/revolution'}
                                  onClick={() => props.setValue(2)}>
                                Technology
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/revolution'}
                                  onClick={() => props.setValue(2)}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item className={classes.link} component={Link} to={'/about'}
                                  onClick={() => props.setValue(3)}>
                                About Us
                            </Grid>


                            <Grid item className={classes.link} component={Link} to={'/about'}
                                  onClick={() => props.setValue(3)}>
                                History
                            </Grid>

                            <Grid item className={classes.link} component={Link} to={'/about'}
                                  onClick={() => props.setValue(3)}>
                                Team
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item className={classes.link} component={Link} to={'/contact'}
                                  onClick={() => props.setValue(4)}>
                                Contact Us
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>
            </Hidden>


            <img src={footerAdornment} className={classes.adornment} />
            <Grid container spacing={2} justify={"flex-end"} className={classes.social}>

                <Grid item component={"a"} href="https://www.facebook.com" rel={"noopener noreferrer"} target={"_blank"}>
                    <img src={facebook} alt="" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target={"_blank"}>
                    <img src={instagram} alt="" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target={"_blank"}>
                    <img src={twitter} alt="" className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    </Fragment>


};
export default Footer;