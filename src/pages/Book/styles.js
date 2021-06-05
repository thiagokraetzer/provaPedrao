import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 80%;
`;

export const ActionWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 65%;
  height: 70%;

  margin-top: 8%;

  border-radius: 6px;
  padding: 40px;

  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  background: rgba(255,255,255,0.8);
  font-family: 'Roboto Slab', serif;

  
`;


export const Heading = styled.header`
  text-align: center;
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4%;

  height: 100%;

  border-radius: 6px;
  background: rgba(0,0,0,0.1);

  padding: 12px;

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    h3{
      margin-bottom: 2%;
    }
  }

  
`;

export const BackButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s;
  &:hover{
    cursor: pointer;

    opacity: 0.4;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;

  width: 40%;
  border: solid 1px gray;
  border-radius: 12px;
  height: 60px;

  background: #75E6DA;

  color: #05445E;
  font-size: 24px;
  font-weight: 400;

  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.8);
  }
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  margin-top: 4%;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;


  width: 100%;
  height: 100%;

  .delete-input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 50%;
    height: 60%;
    padding: 40px;
    border-radius: 6px;

    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: solid 2px gray;

    input{
      border: none;
      background: none;

      border: solid 1px gray;
      border-radius: 6px;
      width: 140px;
      height: 40px;

      padding: 12px;
    }
  }
`;