import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger
    from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        marginBottom: "1em"

    },
    logo: {
        height: "6em"
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
        textDecoration:"none"


    },
    logoButton:{
        padding:0,
        height:"6em",
        textDecoration: "none",
        "&:hover":{
            backgroundColor:"transparent"
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
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpen(false);
        setValue(1);
    };
    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        console.log(`${index} selected`);
    };

const changeTab = (e,i)=>{
    setValue(i);

};

useEffect(()=>{
    if(window.location.pathname==='/' && value!==0)
        setValue(0);
    else if(window.location.pathname==='/services' && value!==1)
        setValue(1);
    else if(window.location.pathname==='/revolution' && value!==2)
        setValue(2);
    else if(window.location.pathname==='/about' && value!==3)
        setValue(3);
    else if(window.location.pathname==='/contact' && value!==4)
        setValue(4);
    else if(window.location.pathname==='/estimate' && value!==5)
        setValue(5);
    else if (window.location.pathname === '/customSoftware' && value !== 1)
        setValue(1);
    else if (window.location.pathname === '/mobileapps' && value !== 1)
        setValue(1);
    else if (window.location.pathname === '/websites' && value !== 1)
        setValue(1);

},[value]);
    useEffect(()=>{
        if(window.location.pathname==='/services' && selectedIndex!==0)
            setSelectedIndex(0);
        else if(window.location.pathname==='/customSoftware' && selectedIndex!==1)
            setSelectedIndex(1);
        else if(window.location.pathname==='/mobileapps' && selectedIndex!==2)
            setSelectedIndex(2);
        else if(window.location.pathname==='/websites' && selectedIndex!==3)
            setSelectedIndex(3);

    },[selectedIndex]);


    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position={"fixed"}>
                    <Toolbar disableGutters>

                        <Button component={Link} to="/" className={classes.logoButton} onClick={()=>setValue(0)} disableRipple   >
                            <img src={logo}
                                 alt={"Company Logo"}
                                 className={classes.logo} />
                        </Button>
                        <Tabs value={value} onChange={changeTab}
                              className={classes.tabContainer} >
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
                            open={open}
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
                                          selected={index===selectedIndex && value===1}
                                          onClick={() => {
                                              handleMenuClose();
                                              handleMenuItemClick(index)
                                          }}>
                                    {obj.name}
                                </MenuItem>
                            ))}

                        </Menu>






                    </Toolbar>
                </AppBar>

            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </React.Fragment>


    )


}




