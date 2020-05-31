import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import {Grid, useMediaQuery} from "@material-ui/core";

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import lightBulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopWatch from '../../assets/stopwatch.svg'
import Lottie from 'react-lottie';


import automationAnimation from '../../animations/automationAnimation/data'
import uxAnimation from '../../animations/uxAnimation/data'
import documentsAnimation from '../../animations/documentsAnimation/data'
import scaleAnimation from '../../animations/scaleAnimation/data'
import roots from '../../assets/root.svg'
import Hidden from "@material-ui/core/Hidden";
import useTheme from "@material-ui/core/styles/useTheme";


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    }, arrowContainer: {
        marginTop: '0.5em',
        marginLeft: '-3.5em',
        marginRight: '1em'
    }, itemContainer: {
        maxWidth: '40em'
    }, rootContainer:
        {
            paddingLeft: "5em",
            paddingRight: '5em',
            paddingTop: '2em',
            paddingBottom: '10em',
            [theme.breakpoints.down('md')]:{
                paddingLeft: "2em",
                paddingRight: '2em',
                paddingTop: '1em',
                paddingBottom: '5em',
            }
        }


}));

const animOptions = (type) => {
    return {
        loop: true,
        autoplay: true,
        animationData: type,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
};


const CustomSoftware = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    return <Grid container direction={"column"}
                 className={classes.rootContainer}>

        <Grid item container direction={'row'}>
            <Grid item className={classes.arrowContainer} >
                <Hidden mdDown>

                    <IconButton style={{backgroundColor: 'transparent'}} component={Link} to='/services'
                                onClick={() => props.setSelectedIndex(0)}>
                        <img src={backArrow}/>
                    </IconButton>
                </Hidden>
            </Grid>


            <Grid item container direction={'column'} className={classes.heading}>
                <Grid item>
                    <Typography variant={"h2"} style={{textAlign: matches ? 'center' : undefined}}>
                        Custom Software Development
                    </Typography>
                </Grid>
                <Grid item style={{marginTop: '1em'}}>
                    <Typography variant={"body1"} paragraph style={{textAlign: matches ? 'center' : undefined}}>
                        Whether we're replacing old software or inventing new solutions, Arc Development is here to help
                        you
                        business tackle technology.
                    </Typography>
                    <Typography variant={"body1"} paragraph style={{textAlign: matches ? 'center' : undefined}}>
                        Using regular commercial software leaves you with a lot of stuff you don't need, without some of
                        the
                        stuff you do need, and ultimately controls
                        the way you work.
                        Without using any software at all you risk falling behind competitors and missing out on huge
                        savings from increased efficiency.

                    </Typography>

                    <Typography variant={"body1"} style={{textAlign: matches ? 'center' : undefined}} paragraph>
                        Our custom solutions are designed from the ground up with your needs, wants, and goals at the
                        core.
                        This collaborative process produces finely tuned software
                        that is much effective at improving your workflow and reducing costs than generalized options.
                    </Typography>
                    <Typography variant={"body1"} style={{textAlign: matches ? 'center' : undefined}} paragraph>
                        We create exactly what you want, exactly how you want it.
                    </Typography>
                </Grid>


            </Grid>

            <Grid item className={classes.arrowContainer}>
                <Hidden mdDown>
                    <IconButton style={{backgroundColor: 'transparent'}} component={Link} to='/mobileapps'
                                onClick={() => props.setSelectedIndex(2)}>
                        <img src={forwardArrow}/>
                    </IconButton>
                </Hidden>
            </Grid>
            <Grid/>
        </Grid>

        <Grid item container direction={"row"} justify={"center"} style={{marginTop: '15em', marginBottom: '20em'}}>
            <Grid item container direction={"column"} md style={{maxWidth: '40em'}} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h4"} style={{textAlign: matches ? 'center' : undefined}}>
                        Save Energy
                    </Typography>
                </Grid>
                <Grid item  style={{textAlign: matches ? 'center' : undefined,marginTop: '2em'}}>
                    <img src={lightBulb}/>
                </Grid>
            </Grid>
            <Grid container item direction={"column"} md style={{maxWidth: '40em'}} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h4"} style={{textAlign: matches ? 'center' : undefined}}>
                        Save Time
                    </Typography>
                </Grid>
                <Grid item  style={{textAlign: matches ? 'center' : undefined,marginTop: '2em'}}>
                    <img src={stopWatch}/>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} md style={{maxWidth: '40em'}} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h4"} style={{textAlign: matches ? 'center' : undefined}}>
                        Save Money
                    </Typography>
                </Grid>
                <Grid item style={{marginTop: '2em'}}>
                    <img src={cash}/>
                </Grid>
            </Grid>
        </Grid>

        <Grid item container direction={"row"} justify={"space-between"}>


            <Grid item className={classes.itemContainer} md>


                <Grid item md>
                    <Typography variant={"h4"} style={{textAlign: matches ? 'center' : undefined}}>
                        Digital documents & data </Typography>
                </Grid>


                <Grid item style={{marginTop: '2em',textAlign: matches ? 'center' : undefined}}>
                    <Typography variant={"body1"} paragraph>
                        Reduce Errors. Reduce Waste. Reduce Costs.
                    </Typography>
                    <Typography variant={"body1"} paragraph>Billions are spent annually on the purchasing,printing
                        and
                        distribution of paper. On top of the massive environmental
                        impact this has, it causes harm to your bottom line as well.
                    </Typography>
                    <Typography variant={"body1"} paragraph>
                        By utilizing digital forms and documents you can remove these obsolete expenses, accelerate
                        your
                        communication, and help the Earth.
                    </Typography>

                    <Grid/>

                </Grid>
            </Grid>


            <Grid item md style={{textAlign: matches ? 'center' : undefined}}>

                <Lottie options={animOptions(documentsAnimation)}
                        style={{maxWidth: 275, maxHeight: 275, marginRight: '-2em'}}/>

            </Grid>


        </Grid>
        <Grid item container direction={"row"} justify={"space-between"} style={{marginTop: '15em'}}>
            <Grid item md>

                <Lottie options={animOptions(scaleAnimation)}
                        style={{maxWidth: 275, maxHeight: 275, marginLeft: '2em'}}/>

            </Grid>
            <Grid item className={classes.itemContainer} md>

                <Grid item>
                    <Typography variant={"h4"} align={"right"}>
                        Scale </Typography>
                </Grid>


                <Grid item style={{marginTop: '2em'}}>
                    <Typography variant={"body1"} align={"right"} paragraph>
                        Whether you're a large brand, just getting started, or taking off right now, our application
                        architecture ensures pain-free growth and reliability

                    </Typography>


                    <Grid/>

                </Grid>
            </Grid>

        </Grid>

        <Grid item container direction={"row"} style={{marginTop: '20em', marginBottom: '20em'}}>
            <Grid item container direction={'column'} alignItems={"center"}>
                <Grid item align={"center"}>
                    <img src={roots} height={"450em"} width={"450em"}/>
                </Grid>
                <Grid item className={classes.itemContainer}>
                    <Typography variant={"h4"} align={"center"} style={{marginTop: '1em'}}>
                        Root-Cause Analysis
                    </Typography>
                    <Typography variant={'body1'} align={"center"} paragraph style={{marginTop: '2em'}}>
                        Many problems are merely symptoms oflarger, underlying issues.
                    </Typography>
                    <Typography variant={'body1'} align={"center"} paragraph>We cana help you thoroughly examine all
                        areas of your business to
                        develop a holistic plan for the most effective implementation of technology.</Typography>
                </Grid>
            </Grid>
        </Grid>


        <Grid item container direction={"row"} justify={"space-between"}>


            <Grid item className={classes.itemContainer} md>


                <Grid item md>
                    <Typography variant={"h4"}>
                        Automation </Typography>
                </Grid>


                <Grid item style={{marginTop: '2em'}}>
                    <Typography variant={"body1"} paragraph>
                        Why waste time when you don't have to?
                    </Typography>
                    <Typography variant={"body1"} paragraph>We can help you identify processes with time or event based
                        actions which can now easily be automated.</Typography>
                    <Typography variant={"body1"} paragraph>Increasing efficiency increases profits,leaving you more
                        time to focus on your business, not your busywork.</Typography>

                    <Grid/>

                </Grid>
            </Grid>


            <Grid item md>

                <Lottie options={animOptions(automationAnimation)}
                        style={{maxWidth: 400, maxHeight: 400, minWidth: 200, minHeight: 200, marginRight: '-2em'}}/>

            </Grid>


        </Grid>
        <Grid item container direction={"row"} justify={"space-around"} style={{marginTop: '15em'}}>
            <Grid item md>

                <Lottie options={animOptions(uxAnimation)}
                        style={{maxWidth: 155, maxHeight: 400, minWidth: 200, minHeight: 200, marginLeft: '2em'}}/>

            </Grid>
            <Grid item className={classes.itemContainer} md>

                <Grid item>
                    <Typography variant={"h4"} align={"right"}>
                        Use Experience Design </Typography>
                </Grid>


                <Grid item style={{marginTop: '2em'}}>
                    <Typography variant={"body1"} align={"right"} paragraph>A good design that isn't usable isn't a good
                        design.</Typography>
                    <Typography variant={"body1"} align={"right"} paragraph>So why are so many pieces of software
                        complicated, confusing,and frustrating?</Typography>
                    <Typography variant={"body1"} align={"right"} paragraph>By prioritizing users and the real ways they
                        interact with technology we're able to develop unique, personable experiences that solve
                        problems rather than create new ones.</Typography>


                    <Grid/>

                </Grid>
            </Grid>

        </Grid>


    </Grid>

};


export default CustomSoftware;