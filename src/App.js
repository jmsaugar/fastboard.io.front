import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@xstyled/styled-components';

import { mainLayoutId } from '#constants';
import routes from '#routes';
import theme from '#theme';
import store from '#store';
import MainLayout from '#layouts';
import {
  GlobalStyle, Loading, Header, Footer,
} from '#components';

const Home = lazy(() => import('./pages/Home/Home'));
const Board = lazy(() => import('./pages/Board/Board'));

const App = () => {
  const content = (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.board} component={Board} />
      </Switch>
    </Suspense>
  );

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <Router>
            <GlobalStyle />
            <MainLayout
              id={mainLayoutId}
              header={<Header />}
              content={content}
              footer={<Footer />}
            />
          </Router>
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
