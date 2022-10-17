import React, { useEffect, useState } from 'react';

const [nome, setNome] = useState('');
const [contador, setContador] = useState<number>(5);

useEffect(()=>{
    if(contador ==0){
        document.title = `Executando useEffect a primeira vez ${contador}`;
    }else{
        document.title = `Executando useEffect a cada alteração ${contador}`;
    }
   // setContador(contador + 1);
    console.log(`Executando useEffect a cada chamada ${contador}`);
},[contador]);


useEffect(()=>{
    if(nome.length > 0 ){
        console.log(`Executando useEffect mudando para maiúsculo ${nome}`);
    }
},[nome])