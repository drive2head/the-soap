import React, { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from 'globalStyles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Description = styled.p`
  text-align: center;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Description>
        Ready to dev with Typescript, styled-components, eslint, prettier,
        stylelint, and absolute paths :)
      </Description>
    </Wrapper>
  );
};

export default App;
