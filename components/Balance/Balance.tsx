import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const BalanceContainer = styled.div`
width: 100%;
color: #f8f8f8;
background-color: #242424;
`;

const SaldoContainer = styled.div`
display: flex;
flex-direction: row;
padding-right: 5%;
align-items: center;
`;

export default function Balance() {
  return (
    <BalanceContainer>
        <div>Saldo</div>
        <SaldoContainer>
          <span>R$</span>
          <strong>190.000,00</strong>
          <Link href='#'>
            <a>MOSTRAR</a>
          </Link>
        </SaldoContainer>
    </BalanceContainer>
  )
}
