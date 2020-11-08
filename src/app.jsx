import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import theme from './theme/app-theme'
import Schedule from './components/views/schedule/schedule.component';
import Patients from './components/views/patients/patients.component';
import Navbar from './components/layout/navbar/navbar.component';
import Sidebar from './components/layout/sidebar/sidebar.component';
import Footer from './components/layout/footer/footer.component';
import { useStyles } from './app.styles';

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
            <Route exact from='/' render={props => <Schedule {...props} />} />
            <Route exact path='/patients' render={props => <Patients {...props} />} />
          </Switch>
          <Footer drawerOpened={drawerOpened} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;