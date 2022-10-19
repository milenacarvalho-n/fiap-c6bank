import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import ExtractContent from '../components/ExtractContent';

const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;`;

export default function extract() {
  return (
    <ExtractContainer>
      <Sidebar/>
      <ExtractContent/>
    </ExtractContainer>
  )
}
