import Header from 'components/Header';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from 'hooks';

import GlobalStyle, { AppContainer } from './styles/global';

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
