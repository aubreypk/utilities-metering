import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Header from './Header';
import axios from 'axios';

export default class PowerChart extends Component {

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
      <Header>Chart</Header>
      <ResponsiveContainer>
        <LineChart
          data={this.state.readings}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="readingDateTimeUTC" stroke={this.props.theme.palette.text.secondary} />
          <YAxis stroke={this.props.theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: this.props.theme.palette.text.primary }}
            >
              Power (WH)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="WH" stroke={this.props.theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
  }
}