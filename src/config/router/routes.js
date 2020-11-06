import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export const routes = [
  {
    text: 'Agenda',
    path: '/',
    icon: <DateRangeIcon />,
    key: 'schedule'
  },
  {
    text: 'Pacientes',
    path: '/patients',
    icon: <AccountBoxIcon />,
    key: 'patients'
  }
];