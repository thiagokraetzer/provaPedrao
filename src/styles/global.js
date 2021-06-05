import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    @media(max-width: 830px){
      body{
        min-width: 820px;
      }
    }
    @media(max-height: 670px){
      body{
        min-height: 663px;
      }
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #D4F1F4;
  }

  button{
    background: unset;
    border: none;

    &:hover{
      cursor: pointer;
    }
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;