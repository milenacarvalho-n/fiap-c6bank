import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';


type CopyProps = {
    site: string;
    sx:object;
}
function Copyright(props:CopyProps){
    return (
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href="https://www.avanade.com.br">
                {props.site}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <CssBaseline/>
            <Box sx={{mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <Box component='form' onSubmit={(e)=>{console.log('enviou')}}>
                    <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
                    <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>

                    <Copyright site="www.avanade.com.br" sx={{mt:8, mb:4}}/>
                </Box>

            </Box>
        </Container>
    </ThemeProvider>
  )
}
