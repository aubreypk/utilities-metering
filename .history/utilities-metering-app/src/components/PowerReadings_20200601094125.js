import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Header from './Header';

function preventDefault(event) {
  event.preventDefault();
}

export default class PowerReadings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      readings: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/readings/get-serial-readings/' + this.props.meterNumber)
    //axios.get('http://localhost:4000/readings/')
      .then(res => {
        this.setState({
          readings: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <React.Fragment>
        <Header>Meter Readings</Header>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Meter</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>WH</TableCell>
              <TableCell>VARH</TableCell>
              <TableCell align="right">Usage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.readings.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.serial}</TableCell>
                <TableCell>{row.readingDateTimeUTC}</TableCell>
                <TableCell>{row.WH}</TableCell>
                <TableCell>{row.VARH}</TableCell>
                {/* TODO: calculate usage */}
                <TableCell align="right">{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            See more
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

