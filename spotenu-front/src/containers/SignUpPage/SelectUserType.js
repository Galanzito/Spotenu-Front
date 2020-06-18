import React from 'react';
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

export default function SelectUserType(props) {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    props.type(event.target.value)
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Tipo de Conta</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={type}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={'NORMAL'}>Normal</MenuItem>
          <MenuItem value={'PREMIUM'}>Premium</MenuItem>
          <MenuItem value={'BAND'}>Banda</MenuItem>          
        </Select>
      </FormControl> 
    </div>
  );
}