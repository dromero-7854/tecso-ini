import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import theme from './theme/app-theme'
import Schedule from './components/views/Schedule';
import Patients from './components/views/Patients';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar // necessary for content to be below app bar
  },
  content: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <ThemeProvider theme={theme} >
      <div className={classes.root}>
        <CssBaseline />
        <Navbar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
        <Sidebar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact from="/" render={props => <Schedule {...props} />} />
            <Route exact path="/patients" render={props => <Patients {...props} />} />
          </Switch>
          <Footer drawerOpened={drawerOpened} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;