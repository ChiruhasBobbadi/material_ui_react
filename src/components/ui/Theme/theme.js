import {createMuiTheme} from '@material-ui/core/styles';


const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";


const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: 'none',
            fontWeight: 600,
            fontSize: "1rem",
        },
        estimate:{
            fontFamily:'Roboto',
            textTransform:"none",
        },h2:{
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: "2.5rem",
            color:arcBlue,
            lineHeight:1.5
        }
    }
});

export default theme;