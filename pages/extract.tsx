import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';

const ExtractContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;`;

export default function extract() {
  return (
    <ExtractContainer>
      <Sidebar/>
      <section>
        <h1>Extract</h1>
        Aqui virá o extrato
      </section>
    </ExtractContainer>
  )
}
