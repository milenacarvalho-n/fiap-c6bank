import React from 'react';
import styled from '@emotion/styled';
import Profile from '../Profile';
import Balance from '../Balance';
import Menu from '../Menu';

const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #242424;`;


export default function Sidebar() {
  return (
    <SidebarContainer>
      <Profile/>
      <Balance/>
      <Menu/>      
    </SidebarContainer>
  )
}
