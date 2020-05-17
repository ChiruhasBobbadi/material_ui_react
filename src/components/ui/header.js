import React, {Fragment, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        // using breakpoints to render conditional styles
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em"
        }, [theme.breakpoints.down('xs')]: {
            marginBottom: "1em"
        }

    },
    logo: {
        height: "6em",
        [theme.breakpoints.down('md')]: {
            height: "5em"
        }, [theme.breakpoints.down('xs')]: {
            height: "3em"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    estimate: {

        ...theme.typography.estimate,
        borderRadius: "50px",
        marginRight: "50px",
        marginLeft: "50px",
        textDecoration: "none"


    },
    logoButton: {
        padding: 0,
        height: "6em",
        [theme.breakpoints.down('md')]: {
            height: "5em"
        }, [theme.breakpoints.down('xs')]: {
            height: "3em"
        },

        textDecoration: "none",
        "&:hover": {
            backgroundColor: "transparent"
        }

    },
    Menu: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },


    },
    menuIcon:{
        color:"white",
        marginLeft:"auto",

    },drawerIcon:{
        height:"50px",
        width:"50px"
    }

}));

const menuOptions = [{
    name: "Services",
    link: "/services"
}, {
    name: "Custom Software Development",
    link: "/customSoftware"
}, {
    name: "Mobile App Development",
    link: "/mobileapps"
}, {name: "Website Development", link: "/websites"}];
export default function Header(props) {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const classes = useStyles();
    const theme = useTheme();


    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [openDrawer, setOpenDrawer] = useState(false);

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
        setValue(1);
    };
    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        console.log(`${index} selected`);
    };

    const changeTab = (e, i) => {
        setValue(i);

    };

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0)
            setValue(0);
        else if (window.location.pathname === '/services' && value !== 1)
            setValue(1);
        else if (window.location.pathname === '/revolution' && value !== 2)
            setValue(2);
        else if (window.location.pathname === '/about' && value !== 3)
            setValue(3);
        else if (window.location.pathname === '/contact' && value !== 4)
            setValue(4);
        else if (window.location.pathname === '/estimate' && value !== 5)
            setValue(5);
        else if (window.location.pathname === '/customSoftware' && value !== 1)
            setValue(1);
        else if (window.location.pathname === '/mobileapps' && value !== 1)
            setValue(1);
        else if (window.location.pathname === '/websites' && value !== 1)
            setValue(1);

    }, [value]);
    useEffect(() => {
        if (window.location.pathname === '/services' && selectedIndex !== 0)
            setSelectedIndex(0);
        else if (window.location.pathname === '/customSoftware' && selectedIndex !== 1)
            setSelectedIndex(1);
        else if (window.location.pathname === '/mobileapps' && selectedIndex !== 2)
            setSelectedIndex(2);
        else if (window.location.pathname === '/websites' && selectedIndex !== 3)
            setSelectedIndex(3);

    }, [selectedIndex]);


    const tabs = (
        <Fragment>
            <Tabs value={value} onChange={changeTab}
                  className={classes.tabContainer}>
                <Tab component={Link} className={classes.tab}
                     label={"Home"} to={"/"}/>

                <Tab
                    component={Link}
                    className={classes.tab}
                    label={"Services"}
                    to={"/services"}
                    onMouseOver={handleMenuOpen}

                />

                <Tab component={Link} className={classes.tab}
                     label={"Revolution"} to={"/revolution"}/>
                <Tab component={Link} className={classes.tab}
                     label={"About Us"} to={"/about"}/>
                <Tab component={Link} className={classes.tab}
                     label={"Contact Us"} to={"/contact"}/>

            </Tabs>

            <Button variant={"contained"}
                    color={"secondary"}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    className={classes.estimate}
                    component={Link}
                    to={'/estimate'}>Free
                Estimate </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                openMenu={openMenu}
                keepMounted
                onClose={handleMenuClose}
                MenuListProps={{onMouseLeave: handleMenuClose}}
                classes={{paper: classes.Menu}}
                elevation={0}
            >
                {menuOptions.map((obj, index) => (
                    <MenuItem component={Link}
                              className={classes.menuItem}
                              key={obj.name}
                              to={obj.link}
                              selected={index === selectedIndex && value === 1}
                              onClick={() => {
                                  handleMenuClose();
                                  handleMenuItemClick(index)
                              }}>
                        {obj.name}
                    </MenuItem>
                ))}

            </Menu>

        </Fragment>
    );

    const drawer = (
        <Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer}
                             onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)} anchor={"right"}>
                Hello
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.menuIcon}>
                <MenuIcon className={classes.drawerIcon}/>


            </IconButton>


        </Fragment>
    );


    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position={"fixed"}>
                    <Toolbar disableGutters>

                        <Button component={Link} to="/" className={classes.logoButton} onClick={() => setValue(0)}
                                disableRipple>
                            <img src={logo}
                                 alt={"Company Logo"}
                                 className={classes.logo}/>
                        </Button>

                        {/**
                         * using media queries to conditionally render
                         */}
                        {matches ? drawer : tabs}


                    </Toolbar>
                </AppBar>

            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </React.Fragment>


    )


}




