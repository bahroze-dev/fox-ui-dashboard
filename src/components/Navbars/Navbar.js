import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import {Menu,ArrowBack} from "@material-ui/icons";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  //const [hambugerClicked,updateClick] = React.useState(props.hambugerClicked)
  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  const appBarMain = classNames({
    [classes.appBarHidden]: (props.hambugerClicked),
    [classes.appBar]: (!(props.hambugerClicked)),
    
    
  })
  const iconButton= classNames({
    [classes.iconButton]: (!props.hambugerClicked),
    [classes.iconButtonHidden]: (props.hambugerClicked),
    
  })

  return (
    <AppBar className={appBarMain + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
         
          <Hidden smDown implementation="css">
            <Grid container>
              <Grid item xs={1} md={1}>
              <IconButton
                  className={iconButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={()=>{props.setHamburderHandler(!(props.hambugerClicked))}}
                >
                  {(props.hambugerClicked)?(
                    <Menu />
                  ):(
                    <ArrowBack />
                  )}

              </IconButton>
              </Grid>
              <Grid item xs={11} md={11} style={{textAlignLast:"center"}}>
      
                <Button  color="transparent" href="#" className={classes.title}>
                  {makeBrand()}
                </Button>
        
              </Grid>
            </Grid>

     


          </Hidden>
          <Hidden mdUp implementation="css">
            <Button color="transparent" href="#" className={classes.title}>
              {makeBrand()}
            </Button>
          </Hidden>

        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />

        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
