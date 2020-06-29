import React from 'react';
import MyAppBar from '../../components/AppBar';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer from '../../components/sideDrawer';
import ProductsPane from './ProductsPane';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    pageSettings: {
        backgroundColor: "#f5f5f5",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    root: {
        display: 'flex',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MainSite() {
    const tab = useSelector(state => state.tab);
    const classes = useStyles();
    return (
        <div>
            {/* My App Bar */}
            < MyAppBar />
            {/* Page Below */}
            <div className={classes.pageSettings}>
                    <TabPanel value={tab} index={0} >
                    <div className={classes.root}>
                        <ResponsiveDrawer />
                        <ProductsPane />

                    </div>
    
                        
                        
                    

                </TabPanel >
                <TabPanel value={tab} index={1}>

                </TabPanel>
            </div>

        </div >
    )

}