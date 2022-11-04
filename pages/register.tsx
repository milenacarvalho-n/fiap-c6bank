// import React, {useState, useEffect, FormEvent} from 'react'
// import { Typography, Container, CssBaseline,Box,TextField,
//      Checkbox, Button, FormControlLabel } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Copyright from '../components/utils/Copyright';
// import Snackbar from '../components/utils/Snackbar';
// import Link from 'next/link';

// export default function RegisterPage() {

  
// const theme = createTheme();

// const [error, setError] = useState<boolean>(false);
// const [errorMessage, setErrorMessage] = useState<string>('');
// const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
// const [name, setName] = useState<string | undefined | null | FormDataEntryValue>('');
// const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
// const [confirmPassword, setConfirmPassword] = useState<string | undefined | null | FormDataEntryValue>('');
// const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
// const [open, setOpen] = useState<boolean>(false);
// const [show, setShow] = useState<boolean>(false);

// // A primeira vez após carregar a página e após o render
// // Executa também a cada alteração de estado


// useEffect(()=>{

//     if(password && password.length < 6){
//         setError(true);
//         setErrorMessage('A senha deve ter no mínimo 6 caracteres');
//     }else if(password) {
//         setError(false);
//         setErrorMessage('');
//         //enviar o formulário para o servidor........
//         //deu certo... vamos criar o snackbar...
//         setOpen(true);
//     }

// },[password]);

// const handleClose = ()=>{
//     setOpen(false);
// }

// const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
//     // Previne o comportamento padrão do formulário, que seria recarregar a página.
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     setName(data.get('name'));
//     setEmail(data.get('email'));
//     setPassword(data.get('password'));
//     setConfirmPassword(data.get('confirmPassword'));
//     validPassword(data.get('password'), data.get('confirmPassword'));
// }

// const validPassword = function(value1: FormDataEntryValue | null, value2: FormDataEntryValue | null) {
//     const isValidPassword = value1 == value2;
//     if (isValidPassword) {
//       setIsValidPassword(true)
//     } else {
//       setIsValidPassword(false)
//     }
//   }
  
//   useEffect(() => {
//     if (!isValidPassword) {
//       setOpen(true);
//     } else {
//       setOpen(false);
//     }
//   }, [password, confirmPassword, isValidPassword])


//   return (
//     <ThemeProvider theme={theme}>
//     <Container component="main" maxWidth="xs">
//         <CssBaseline />
//          <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
//             <Typography component="h1" variant="h5">
//                 Cadastrar
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit}>
//                 {/* <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
//                 <button onClick={()=>setNome(nome.toUpperCase())}>Muda o Nome</button> */}
//              {/*'O State contador vale: ' + contador*/ }

//                 <TextField margin="normal" required  fullWidth id="name" label="Digite o nome" name="nome" autoComplete="nome" autoFocus/>
//                 <TextField margin="normal" required  fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
//                 <TextField margin="normal"  required fullWidth id="password" type={show ? "text": "password"} label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
//                 <Button onClick={() => setShow(!show)}>mostrar</Button>
//                 <TextField margin='normal' required fullWidth id='confirmPassword' type='password' label='Confirme a senha' name='confirmPassword' autoComplete='confirmPassword' autoFocus />
//                 <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Aceito os termos..." />
//                 <Link href='http://localhost:3000/notfound'> clique aqui</Link>
//                 <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>

//                 {error && <Typography color="error">{errorMessage}</Typography>}                

//             </Box>
//          </Box>
//         <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />

//             {open && <Snackbar open={open} hide={6} severity='error' message="Falha no cadastro... Tente novamente..." />}
//             {!open ?? <Snackbar open={open} hide={6} severity='success' message="Cadastro concluído com sucesso!!!" />}
//     </Container>
// </ThemeProvider>
    
//   )
// }


import { Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography} from '@mui/material';
import React,{useState, useEffect, FormEvent} from 'react';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';
import axios from 'axios';

const theme= createTheme();

export default function LoginPage() {

const [name, setName] = useState <string |  FormDataEntryValue | null>(""); 
const [error, setError] = useState< boolean >(false);
const [errorMenssage, setErrorMessage] = useState<string >('');
const [email, setEmail] = useState<string |undefined | null| FormDataEntryValue >();
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>();
const [open, setOpen] = useState<boolean>(false);

useEffect(()=>{
  if(password && password.length < 6){
    setError(true);
    setErrorMessage('A senha deve ter no minimo 6 caracteres');
  }else if(password){
    setError(false);
    setErrorMessage('');
    // enviar o formulario para o servidor
    //setOpen(true);
    axios.post('http://localhost:3000/users',{
      name,
      email,
      password
    }).then((response)=>{
      console.log(response);
      if(response.status == 200){
        setOpen(true);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }
}),[password];

const handleSubmit= (event: FormEvent<HTMLFormElement>)=> {
  // Previne o comportamento padrao do formulario, que iria recarregar a pagina
  event.preventDefault();
  const data= new FormData(event.currentTarget);
  setName(data.get('name'));
  setEmail(data.get('email'));
  setPassword(data.get('password'));
}
  return (
    <ThemeProvider theme= {theme}>
      <Container component="main" maxWidth= "xs">
        <CssBaseline/>
        <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <Typography component="h1" variant='h5'>
            Cadastrar
          </Typography>
          <Box component="form" onSubmit= {handleSubmit}>
            <TextField margin="normal" required fullWidth id="name" label="Informe seu nome" name="name" autoComplete="name" autoFocus/>
            <TextField margin="normal" required fullWidth id="email" label="Digite o email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" type="password" autoFocus/>
            <TextField margin="normal" required fullWidth id="cpassword" label="Confirme a senha" name="cpassword" autoComplete="cpassword"  type="password" autoFocus/>
              <FormControlLabel control={<Checkbox value="Remember" color="primary" />} label= "Lembrar de mim"/>
              <Button type='submit' fullWidth variant="contained" sx={{mt:3, mb:2}}>Cadastar</Button>
              {error && <Typography color="error">{errorMenssage}</Typography>}
          </Box> 
        </Box>
        <Copyright site='www.avanade.com.br' sx= {{mt:8, mb:4}} />
        {open && <Snackbar open={open} hide={4} message=" Ususario cadastrado com sucesso... Aguarde..."/>}
      </Container>
    </ThemeProvider>
  )
}
