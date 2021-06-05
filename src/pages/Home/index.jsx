import { FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, Content, Heading, Options } from './styles';

const Home = () => {
  const { push } = useHistory();

  return (
    <Container>
      <Content>
        <Heading>
          Bem-vindo à biblioteca do <strong>Pedrão</strong>, aqui você poderá cadastrar e editar seus livros parar ler depois... <br /> Tenha um bom passeio pela plataforma 😉
        </Heading>
        <Options>
          <h1>O que deseja fazer?</h1>
          <div className="options-wrapper">
            <ul>
              <li onClick={() => push('/incluir')}>
                <FaChevronRight size={20} />
                Inlcuir livro
              </li>
              <li onClick={() => push('/alterar')}>
                <FaChevronRight size={20} />
                Alterar livro
              </li>
              <li onClick={() => push('/deletar')}>
                <FaChevronRight size={20} />
                Deletar livro
              </li>
              <li onClick={() => push('/consultar')}>
                <FaChevronRight size={20} />
                Consultar livros
              </li>
            </ul>
          </div>
        </Options>
      </Content>
    </Container>
  );
}

export default Home;