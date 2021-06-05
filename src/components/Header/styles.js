import styled from 'styled-components';

export const Heading = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  height: 80px;

  border: solid 1.5px black;
  border-radius: 0 0 6px 6px;

  background: rgba(5, 68, 94,0.85);

  font-family: 'Roboto Slab', serif;
  color: #fff;

  padding: 4px 20px;

  .name{
    margin-right: auto;
    margin-left: 12%;

    strong{
      color: #ff9142;
    }
  }

  .ra{
    margin-right: 8%;
    text-decoration: underline;
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const LogoContainer = styled.div`
  img{
    position: absolute;
    top: 0;

    width: 100px;
    height: 100px;
    object-fit: contain;

    transition: filter 0.2s, transform 0.2s;
    &:hover{
      filter: brightness(0.8);
      transform: scale(1.08);
      cursor: pointer;
    }
  }
`;
