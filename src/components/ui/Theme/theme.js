import {createMuiTheme} from '@material-ui/core/styles';


const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = '#868686';

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
        estimate: {
            fontFamily: 'Roboto',
            textTransform: "none",
        }, h2: {
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        }, h3: {
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        }
        , h4: {
            fontFamily: 'Raleway',
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        }, subtitle1: {
            color: arcGrey,
            fontSize: '1.25rem',
            fontWeight: 300

        }, subtitle2: {
            color: "white",
            fontSize: '1.25rem',
            fontWeight: 300

        }, learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            color: arcBlue,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",

        },body1:{
            fontSize:'1.25rem',
            color:arcGrey,
            fontWeight:300
         }
    }
});

export default theme;