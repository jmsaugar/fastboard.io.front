import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@xstyled/styled-components';

import { Main as MainLayout } from './layouts';
import { Loading } from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const Board = lazy(() => import('./pages/Board/Board'));

const theme = {}; // @todo

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/board/:id" component={Board} />
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  </ThemeProvider>
);

export default App;
