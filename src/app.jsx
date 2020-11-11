import React, { useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { clearMessage } from './actions/message';
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import theme from './theme/app-theme'
import Login from './components/login/login.component'
import Schedule from './components/views/schedule/schedule.component';
import Patients from './components/views/patients/patients.component';
import Navbar from './components/layout/navbar/navbar.component';
import Sidebar from './components/layout/sidebar/sidebar.component';
import Footer from './components/layout/footer/footer.component';
import { useStyles } from './app.styles';

const App = (props) => {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(true);
  const { dispatch, history, isLoggedIn } = props;

  history.listen(() => {
    dispatch(clearMessage());
  });

  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={theme} >
        <Login />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme} >
      <div className={classes.root}>
        <CssBaseline />
        <Navbar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
        <Sidebar drawerOpened={drawerOpened} onChange={() => setDrawerOpened(!drawerOpened)} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact from='/' render={props => <Schedule {...props} />} />
            <Route exact path='/patients' render={props => <Patients {...props} />} />
          </Switch>
          <Footer drawerOpened={drawerOpened} />
        </main>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}

export default compose(withRouter, connect(mapStateToProps))(App);