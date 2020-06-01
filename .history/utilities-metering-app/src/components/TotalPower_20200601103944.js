import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { withStyles, withTheme } from '@material-ui/core'
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

/*const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});*/

export default class TotalPower extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readings: [],
      total: 0,
      curTime : new Date().toLocaleString()
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/readings/get-serial-readings/' + this.props.meterNumber)
    //axios.get('http://localhost:4000/readings/')
      .then(res => {
        this.setState({
          readings: res.data
        });
        this.setState({total : this.getTotal(res.data)});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getTotal(readings)
  {
    let lastReading = this.readings[0].WH;
    let firstReading = this.readings[this.readings.length - 1].WH;

    return firstReading;
  }

  //const classes = useStyles();
  render() {
  return (
    <React.Fragment>
      <Header>Usage this Period</Header>
      <Typography component="p" variant="h4">
      {this.state.total}
      </Typography>
      <Typography color="textSecondary" >
        {this.state.curTime}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
  }
}