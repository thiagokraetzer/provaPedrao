import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 80%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 70%;

  margin-top: 8%;

  border-radius: 6px;
  padding: 40px;

  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  background: rgba(255,255,255,1);
  font-family: 'Roboto Slab', serif;
`;

export const Heading = styled.header`
  text-align: center;
`;

export const Options = styled.div`
  display: flex;
  width: 100%;
  max-height: 90%;
  flex-direction: column;
  margin-top: 2%;

  padding: 12px;
  border-radius: 6px;

  h1{
    color: #fff;
    align-self: center;
    font-size: 32px;
    margin-bottom: auto;
    margin-top: 2%;
  }

  .options-wrapper{
    display: flex;
    flex-wrap: wrap;

    overflow-y: auto;

    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: center;

    background: rgba(255,255,255,0.8);
    border-radius: 6px;


  ul{
    display: flex;

    flex-direction: column;
    list-style: none;
    width: 100%;
    height: 100%;
    /* margin-bottom: 12%; */


    li{
      display: flex;
      align-items: center;
      width: 80%;
      margin-bottom: 24px;

      color: rgba(24, 154, 180,1);

      padding: 12px;
      font-size: 24px;
      border-radius: 6px;

      svg{
        margin-right: 8px;
      }

      transition: color 0.2s, filter 0.2s, transform 0.2s, text-shadow 0.2s;
      &:hover{
        cursor: pointer;
        filter: brightness(0.8);
        color: #000;

        text-shadow: 0 0 10px rgba(0,0,0,0.6);

        transform: translateX(12px);
      }
    }
  } 
  }

  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  background: rgba(24, 154, 180,1);
`;