import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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

export default function SimpleSelect() {
  const classes = useStyles();
  const [meterNumber, setMeterNumber] = React.useState('');

  const handleChange = (event) => {
    setMeterNumber(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Meter Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={meterNumber}
          onChange={handleChange}
        >
            {/* TODO: pull meter numbers from db data */}
          <MenuItem value={"METER000001"}>METER000001</MenuItem>
          <MenuItem value={"METER000002"}>METER000001</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}