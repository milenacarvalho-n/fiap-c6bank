import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box,TextField,
     Checkbox, Button, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';

export default function RegisterPage() {

  
const theme = createTheme();

const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
const [open, setOpen] = useState<boolean>(false);

// A primeira vez após carregar a página e após o render
// Executa também a cada alteração de estado


useEffect(()=>{

    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    }else if(password) {
        setError(false);
        setErrorMessage('');
        //enviar o formulário para o servidor........
        //deu certo... vamos criar o snackbar...
        setOpen(true);
    }

},[password]);

const handleClose = ()=>{
    setOpen(false);
}

const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    // Previne o comportamento padrão do formulário, que seria recarregar a página.
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setEmail(data.get('email'));
    setPassword(data.get('password'));
}



  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
         <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">
                Cadastrar
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                {/* <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
                <button onClick={()=>setNome(nome.toUpperCase())}>Muda o Nome</button> */}
             {/*'O State contador vale: ' + contador*/ }

                <TextField margin="normal" required  fullWidth id="nome" label="Digite o nome" name="nome" autoComplete="nome"/>
                <TextField margin="normal" required  fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
                <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Aceito os termos..." />
                <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>

                {error && <Typography color="error">{errorMessage}</Typography>}

            </Box>
         </Box>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />

            {open && <Snackbar open={open} hide={6} message="Usuário autenticado com sucesso... Aguarde..." />}
    </Container>
</ThemeProvider>
    
  )
}
