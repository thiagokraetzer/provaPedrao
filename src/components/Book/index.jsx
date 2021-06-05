import { Container } from './styles';

const Book = ({book}) => {
  console.log(book);
  return (
    <Container>
      <h1>{book.name}</h1>
      <p>{`Autor: ${book.author}`}</p>
      <span>{`Páginas: ${book.pages}`}</span>
      <span><strong>Id: </strong> {book.id}</span>
    </Container>
  );
}

export default Book;