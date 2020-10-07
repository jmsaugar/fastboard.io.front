import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@xstyled/styled-components';

import { Main as MainLayout } from './layouts';
import { GlobalStyle, Header, Loading } from './components';
import theme from './theme';

const Home = lazy(() => import('./pages/Home/Home'));
const Board = lazy(() => import('./pages/Board/Board'));

const App = () => {
  const content = (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/board/:id" component={Board} />
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Router>
          <GlobalStyle />
          <MainLayout
            header={<Header />}
            content={content}
          />
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
