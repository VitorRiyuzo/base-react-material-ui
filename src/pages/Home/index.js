import React from 'react';
import {Button, Container,TextField, RadioGroup, Radio, FormControlLabel, FormControl, Select, FormLabel,Checkbox, InputLabel, MenuItem, FormHelperText
} from '@material-ui/core';
import useForm from '../../hooks/useForm';
import {useHistory} from 'react-router-dom'
function Home(params) {
  const history = useHistory();
  const form = {
    text:{
      value:'',
      validation:['required'],
      errorMessage:"Email obrigatório"
    },
    date:{
      value:'',
      validation:['required'],
      errorMessage:"Data obrigatória"
    },
    checkbox:{
      value:false,
      validation:['required'],
      errorMessage:"check Obrigatória"
    },
    select:{
      value:'',
      validation:['required'],
      errorMessage:"Select Obrigatória"
    },
    radio:{
      value:'',
      validation:['required'],
      errorMessage:"Radio Obrigatória"
    },
  };
  const{handleChange, fields, validateForm} = useForm(form)
  const login =(event)=>{
    event.preventDefault();
    if(validateForm()){
      
    }
  }
  return(
    <Container>
     
        <form  autoComplete="off" onSubmit={login}>
          <TextField 
          label="E-mail"
          fullWidth
          margin="dense"
          name="text"
          type="text"
          autoComplete="off"
          value={fields.text.value}
          onChange={handleChange}
          error={fields.text.error}
          helperText={fields.text.error?fields.text.errorMessage:''}
          />
          <FormControl fullWidth error={fields.select.error}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="select"
              value={fields.select.value}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {fields.select.error &&
              <FormHelperText>{fields.select.errorMessage}</FormHelperText>
            }
          </FormControl>
          <FormControl error={fields.checkbox.error}>
            <Checkbox
              checked={fields.checkbox.value}
              name="checkbox"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {fields.checkbox.error &&
              <FormHelperText>{fields.checkbox.errorMessage}</FormHelperText>
            }
          </FormControl>
          <FormControl component="fieldset" error={fields.radio.error}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="radio" value={fields.radio.value} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
            {fields.radio.error &&
              <FormHelperText>{fields.radio.errorMessage}</FormHelperText>
            }
          </FormControl>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            name="date"
            onChange={handleChange}
            value={fields.date.value}
            error={fields.date.error}
            helperText={fields.date.error?fields.date.errorMessage:''}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" style={{"marginTop":"20px"}} variant="contained" fullWidth color="primary">
            Validar
          </Button>
        </form>
    </Container>
  )
}
export default Home;