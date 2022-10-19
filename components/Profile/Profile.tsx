import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-family: sans-serif;
  background-color: #242424;
  width: 100%;
  padding-bottom: 20px;
  h2, h3 {
    margin: 0;
    font-weight: 500;
  }
  h2{
    margin-top: 10%;
  }`;

  const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;`;


export default function Profile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar alt='Milena Carvalho' src='https://avatars.githubusercontent.com/u/80054194?s=400&u=c80492fa638d1b52d66ecac7c77eb146ac89fea9&v=4' sx={{width: 100, height: 100}}/>
        <h2>Milena Carvalho</h2>
        <h3>Intern at Avanade</h3>
      </AvatarContainer>
    </ProfileContainer>
  )
}
