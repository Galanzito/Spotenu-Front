import React from 'react';
import {connect} from "react-redux";
import { logout } from '../../actions/user/login'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CheckIcon from '@material-ui/icons/Check';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickAdmin = () => {
    props.clickMenu('admin')
  };

  const handleClickBand = () => {
    props.clickMenu('band')
  };

  const handleClickGenre = () => {
    props.clickMenu('genre')
  };

  const handleClickLogout = () => {
    props.logout()
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={"admin"} onClick={handleClickAdmin}>
          <ListItemIcon><LockOpenIcon /></ListItemIcon>
          <ListItemText primary={"Cadastrar Admin"} />
        </ListItem>
        <ListItem button key={"band"} onClick={handleClickBand}>
          <ListItemIcon><CheckIcon /></ListItemIcon>
          <ListItemText primary={"Aprovar Banda"} />
        </ListItem>
        <ListItem button key={"genre"} onClick={handleClickGenre}>
          <ListItemIcon><MusicNoteIcon /></ListItemIcon>
          <ListItemText primary={"Genêros Musicais"} />
        </ListItem>
        <ListItem button key={"logout"} onClick={handleClickLogout}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary={"Sair"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Spotenu -  Administrador
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" style={{ textAlign: "center" }}>Painel do Administrador</Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(ResponsiveDrawer);