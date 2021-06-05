import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useBooks } from 'hooks/books';

import Book from 'components/Book';

import { Container, ActionWrapper, Heading, BackButton, BookList } from './styles';


const Consultar = () => {
  const { goBack } = useHistory();

  const { books } = useBooks();

  return (
    <Container>
      <ActionWrapper>
        <BackButton onClick={goBack}>
          <FiChevronLeft size={20} />
          <p>Voltar</p>
        </BackButton>
        <Heading>
          Beleza, vamos <strong>consultar</strong> os livros:
        </Heading>
        <BookList>
          {books.length > 0 && books.map(book => (
            <Book key={book.id} book={book}/>
          ))}
        </BookList>
      </ActionWrapper>
    </Container>
  );
}

export default Consultar;