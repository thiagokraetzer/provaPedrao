import { createContext, useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { initialBooks } from 'utils/mocks';

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);

  const { push } = useHistory();

  const registerBook = useCallback(async (book) => {
    const updatedBooks = [...books];
    const nextId = updatedBooks[updatedBooks.length - 1].id + 1; // Pega o próximo número de ID

    Object.assign(book, { id: nextId });  // Junta o book do formulário com o novo ID
    
    // Uma fake promise pra simular um loading
    return new Promise((resolve) => {
      setTimeout(() => {
        updatedBooks.push(book);
        setBooks(updatedBooks);
        resolve(updatedBooks);
      }, 1300);
    });
  }, [books]);

  const deleteBook = useCallback((id) => {
    const bookIsInList = books.find(book => book.id === id);

    if (!bookIsInList) {
      alert('Este livro não está cadastardo :(');
      return;
    }

    const bookIndex = books.findIndex(book => book.id === id);
    const updatedBooks = [...books];
    updatedBooks.splice(bookIndex, 1);

    setBooks(updatedBooks);

    alert('O livro foi removido com sucesso!');
    push('/');
  }, [books, push]);

  const editBook = useCallback(async (id, book) => {
    const bookIsInList = books.find(book => book.id === id);

    if (!bookIsInList) {
      alert('Este livro não está cadastardo :(');
      return;
    }

    const bookIndex = books.findIndex(book => book.id === id);
    const updatedBooks = [...books];

    updatedBooks[bookIndex] = { ...updatedBooks[bookIndex], ...book };

    // Uma fake promise pra simular um loading
    return new Promise((resolve) => {
      setTimeout(() => {
        setBooks(updatedBooks);
        resolve(updatedBooks);
      }, 1300);
    });
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, registerBook, deleteBook, editBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export function useBooks() {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBooks precisa estar dentro de um BooksProvider');
  }

  return context;
}
