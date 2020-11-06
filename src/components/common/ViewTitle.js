import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  titleBox: {
    textAlign: 'center',
    padding: '15px 0 15px 0',
    backgroundColor: '#039be5'
  },
  title: {
    fontSize: 22,
    fontWeight: 300,
    color: '#fff'
  }
}));

const ViewTitle = props => {
  const classes = useStyles();
  return (
    <Box className={classes.titleBox}>
      <span className={classes.title}>{props.title}</span>
    </Box>
  );
};

export default ViewTitle;