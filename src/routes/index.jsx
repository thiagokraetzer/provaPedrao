import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

/** Book Routes */
import Incluir from 'pages/Book/incluir';
import Alterar from 'pages/Book/alterar';
import Consultar from 'pages/Book/consultar';
import Excluir from 'pages/Book/exluir';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/incluir" component={Incluir} />
        <Route path="/alterar" component={Alterar} />
        <Route path="/deletar" component={Excluir} />
        <Route path="/consultar" component={Consultar} />
      </Switch>
    </>
  );
};

export default Routes;
