import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: ${(props) => props.customBgColor ? props.customBgColor : '#D4F1F4'};

  border-radius: ${(props) => props.customRadius ? `${props.customRadius}` : '30px'};

  display: flex;
  align-items: center;

  padding: 16px;
  width: ${(props) => (props.customRadius ? `${props.customWidth}` : '75%')};

  border: 2px solid #7a8095;
  color: black;

  ${(props) => props.hasError && css`border: 2px solid #c53030;`}

  ${(props) => props.isFocused && css`border: 2px solid #189AB4;color: #189AB4;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);`}

  ${(props) => props.hasValue && css` border: 2px solid #189AB4; color: #189AB4; `}

  ${(props) => !props.enabled && css` pointer-events: none; opacity: 0.5; `}

  & + div {
    margin-top: 8px;
  }
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  transition: border 0.4s, box-shadow 0.4s;



  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: black;
    &::placeholder {
      color: black;
    }

    margin-right: 40px;
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 900px) {
    width: 300px !important;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin-right: 0px;
  }

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;