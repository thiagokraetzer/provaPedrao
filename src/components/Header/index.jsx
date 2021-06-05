import { useHistory } from 'react-router-dom';

import logo from 'assets/images/ifsp2.png';

import { Heading, LogoContainer } from './styles';

export const Header = () => {
  const { push } = useHistory();

  return (
    <Heading>
      <LogoContainer onClick={() => push('/')}>
        <img src={logo} alt="ifsp logo" />
      </LogoContainer>
      <h1 className="name">
        Pedro Zolnerkevic filho - <strong>P1 DSW</strong>
      </h1>
      <h3 className="ra">150037-6</h3>
    </Heading>
  );
}

export default Header;