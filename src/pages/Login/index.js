import React from 'react';
import {Button, Container,TextField
} from '@material-ui/core';
import{View}from './styles';
import useForm from '../../hooks/useForm';
import {useHistory} from 'react-router-dom'
function Login() {
  const history = useHistory();
  const form = {
    email:{
      value:'',
      validation:['required'],
      errorMessage:"Email obrigatório"
    },
    password:{
      value:'',
      validation:['required'],
      errorMessage:"Senha Obrigatória"
    },
  };
  const{handleChange, fields, validateForm} = useForm(form)
  const login =(event)=>{
    event.preventDefault();
    if(validateForm()){
      history.push('/');
    }
  }
  return(
    <Container>
      <View
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <form  autoComplete="off" onSubmit={login}>
          <TextField 
          label="E-mail"
          fullWidth
          margin="dense"
          name="email"
          type="email"
          autoComplete="off"
          value={fields.email.value}
          onChange={handleChange}
          error={fields.email.error}
          helperText={fields.email.error?fields.email.errorMessage:''}
          />
          <TextField 
          label="Senha"
          name="password"
          fullWidth
          type="password"
          autoComplete="off"
          value={fields.password.value}
          onChange={handleChange}
          error={fields.password.error}
          helperText={fields.password.error?fields.password.errorMessage:''}
          />
          <Button type="submit" style={{"marginTop":"20px"}} variant="contained" fullWidth color="primary">
            Entrar
          </Button>
        </form>
      </View>
    </Container>
  )
}
export default Login;