import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './view-title.styles.js';

const ViewTitle = props => {
  const classes = useStyles();
  return (
    <Box className={classes.titleBox}>
      <span className={classes.title}>{props.title}</span>
    </Box>
  );
};

export default ViewTitle;