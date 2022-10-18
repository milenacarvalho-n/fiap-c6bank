import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Icon } from '@mui/material';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: flex;
      line-height: 50px;
      border-left: 4px solid transparent;
      padding-left: 5%;
      &:hover {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #616161;
        border-left: 4px solid #ffef0d;
        cursor: pointer;
      }
    }
  }`;

export default function Menu() {
  return (
    <NavbarContainer>
      <ul>
        <li>
          <Link href="#">
          {/* <Icon type="inicio"/> */}
          <a>Início</a>
          </Link>
        </li>
        <li>Extrato</li>
        <li>Transferência</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
        </ul>
    </NavbarContainer>
  )
}
