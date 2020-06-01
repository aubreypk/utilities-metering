import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default class MetersList extends Component {
//export default function MetersList() {
  classes = useStyles();

  handleChange = (event) => {
    this.props.callback(event.target.value);
  };

  render() {
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="meter-select-label">Meter Number</InputLabel>
        <Select
          labelId="meter-select-label"
          id="meter-select"
          value={this.props.meterNumber}
          onChange={handleChange}
        >
          {/* TODO: pull meter numbers from db data */}
          <MenuItem value={"METER000001"}>METER000001</MenuItem>
          <MenuItem value={"METER000002"}>METER000002</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
  }
}