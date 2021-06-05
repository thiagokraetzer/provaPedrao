import { BooksProvider } from './books';

const AppProvider = ({ children }) => (
  <BooksProvider>{children}</BooksProvider>
);

export default AppProvider;
