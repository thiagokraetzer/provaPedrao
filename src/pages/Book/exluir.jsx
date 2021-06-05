import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useBooks } from 'hooks/books';

import { Container, ActionWrapper, Heading, BackButton, DeleteWrapper, StyledButton } from './styles';

const Excluir = () => {
  const [id, setId] = useState('');

  const { goBack } = useHistory();
  const { deleteBook } = useBooks();

  return (
    <Container>
      <ActionWrapper>
        <BackButton onClick={goBack}>
          <FiChevronLeft size={20} />
          <p>Voltar</p>
        </BackButton>
        <Heading>
          Beleza, vamos <strong>excluir</strong> um livro:
        </Heading>
        <DeleteWrapper>
          <div className="delete-input">
            <span>Digite o ID do livro a ser deletado:</span>
            <input type="number" value={id} placeholder="ID do livro" onChange={(e) => setId(e.target.value)} />
            <StyledButton type="button" onClick={()=>deleteBook(Number(id))}>Excluir</StyledButton>
          </div>
        </DeleteWrapper>
      </ActionWrapper>
    </Container>
  );
}

export default Excluir;