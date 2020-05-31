import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from './Header';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalPower() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header>Usage this Period</Header>
      <Typography component="p" variant="h4">
        3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 1 June, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}