import React, {Fragment, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import logo from '../../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useTheme from "@material-ui/core/styles/useTheme";
import useStyles from "./style";


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
const drawerOptions = [{name: "Home", link: "/"}, {name: "Services", link: "/services"}, {
    name: "Revolution",
    link: "/revolution"
}, {name: "About Us", link: "/about"}, {name: "Contact Us", link: "/contact"}, {
    name: "Free Estimate",
    link: "/estimate"
}];

export default function Header(props) {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const classes = useStyles();
    const theme = useTheme();


    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [openDrawer, setOpenDrawer] = useState(false);


    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);



    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setValue(1);
    };
    const handleMenuItemClick = (index) => {
        props.setSelectedIndex(index);

    };

    const changeTab = (e, i) => {
        props.setValue(i);
    };

    useEffect(() => {
        if (window.location.pathname === '/' && props.value !== 0)
            props.setValue(0);
        else if (window.location.pathname === '/services' && props.value !== 1)
            props.setValue(1);
        else if (window.location.pathname === '/revolution' && props.value !== 2)
            props.setValue(2);
        else if (window.location.pathname === '/about' && props.value !== 3)
            props.setValue(3);
        else if (window.location.pathname === '/contact' && props.value !== 4)
            props.setValue(4);
        else if (window.location.pathname === '/estimate' && props.value !== 5)
            props.setValue(5);
        else if (window.location.pathname === '/customSoftware' && props.value !== 1)
            props.setValue(1);
        else if (window.location.pathname === '/mobileapps' && props.value !== 1)
            props.setValue(1);
        else if (window.location.pathname === '/websites' && props.value !== 1)
            props.setValue(1);

    }, [props.value]);

    useEffect(() => {
        if (window.location.pathname === '/services' && props.selectedIndex !== 0)
            props.setSelectedIndex(0);
        else if (window.location.pathname === '/customSoftware' && props.selectedIndex !== 1)
            props.setSelectedIndex(1);
        else if (window.location.pathname === '/mobileapps' && props.selectedIndex !== 2)
            props.setSelectedIndex(2);
        else if (window.location.pathname === '/websites' && props.selectedIndex !== 3)
            props.setSelectedIndex(3);

    }, [props.selectedIndex]);


    const tabs = (
        <Fragment>
            <Tabs value={props.value} onChange={changeTab}
                  className={classes.tabContainer}>

                {
                    drawerOptions.map((obj, index) => (
                        <Tab component={Link} className={classes.tab}
                             label={obj.name} to={obj.link} key={obj.name + index}
                             onMouseOver={obj.name === 'Services' ? handleMenuOpen : null}/>
                    ))
                }


            </Tabs>

            <Button variant={"contained"}
                    color={"secondary"}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    className={classes.estimate}
                    component={Link}
                    onClick={() => props.setValue(-1)}
                    to={'/estimate'}>Free
                Estimate </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
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
                              selected={index === props.selectedIndex && props.value === 1}
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
                             onOpen={() => setOpenDrawer(true)} anchor={"right"} classes={{paper: classes.drawer}}>
                <div className={classes.toolBarMargin}/>
                <List disablePadding>

                    {drawerOptions.map((obj, index) => (
                        <ListItem divider button key={obj.name + obj.link} component={Link} to={obj.link}
                                  className={obj.name === 'Free Estimate' ? classes.drawerEstimate : classes.drawerItem}
                                  onClick={() => {
                                      setOpenDrawer(false);
                                      props.setValue(index)
                                  }} selected={props.value === index}>
                            <ListItemText disableTypography
                                          className={props.value === index ? classes.selectedDrawerItem : classes.drawerItem}>
                                {obj.name}
                            </ListItemText>

                        </ListItem>
                    ))}

                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.menuIcon}>
                <MenuIcon className={classes.drawerIcon}/>


            </IconButton>


        </Fragment>
    );


    return <React.Fragment>
        <ElevationScroll {...props}>
            <AppBar position={"fixed"} className={classes.appBar}>
                <Toolbar disableGutters>

                    <Button component={Link} to="/" className={classes.logoButton} onClick={() => props.setValue(0)}
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


}




