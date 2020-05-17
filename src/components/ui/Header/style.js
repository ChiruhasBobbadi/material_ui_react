import {makeStyles} from '@material-ui/core/styles';

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
            height: "4em"
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
            , zIndex:theme.zIndex.modal+1
        }, [theme.breakpoints.down('xs')]: {
            height: "4em", zIndex:theme.zIndex.modal+1
        },

        textDecoration: "none",
        "&:hover": {
            backgroundColor: "transparent"
        },
        zIndex:theme.zIndex.modal+1
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
    menuIcon: {
        color: "white",
        marginLeft: "auto",

    }, drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.primary.main
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.8
    },
    drawerEstimate: {
        backgroundColor: theme.palette.secondary.main
    },
    drawerItemSelected: {
        opacity: 1
    },
    appBar:{
        [theme.breakpoints.down('md')]: {
            zIndex:theme.zIndex.modal+1
        }
    },
    selectedDrawerItem:{
        ...theme.typography.tab,
        color: 'white',
        opacity: 1

    }


}));

export default useStyles;