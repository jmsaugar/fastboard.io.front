import React, {
  lazy, Suspense, useCallback, useState,
} from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@xstyled/styled-components';

import { mainLayoutId, allowCookiesStorageKey } from '#constants';
import routes from '#routes';
import theme from '#theme';
import store from '#store';
import MainLayout from '#layouts';
import {
  GlobalStyle, CookiesAlert, Loading, Header, Footer,
} from '#components';
import { analyticsService } from '#services';

const Home = lazy(() => import('./pages/Home'));
const Board = lazy(() => import('./pages/Board'));
const About = lazy(() => import('./pages/About'));
const Cookies = lazy(() => import('./pages/Cookies'));

const App = () => {
  const [showCookiesAlert, setShowCookiesalert] = useState(
    !window.localStorage.getItem(allowCookiesStorageKey),
  );

  const acceptCookies = useCallback(() => {
    setShowCookiesalert(false);
    window.localStorage.setItem(allowCookiesStorageKey, true);
    analyticsService.start();
  }, [setShowCookiesalert]);

  const content = (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.board} component={Board} />
        <Route path={routes.about} component={About} exact />
        <Route path={routes.cookies} component={Cookies} exact />
      </Switch>
    </Suspense>
  );

  return (
    <HelmetProvider>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>
            <Router>
              <MainLayout
                id={mainLayoutId}
                header={<Header />}
                content={content}
                footer={<Footer />}
              />
              {showCookiesAlert && <CookiesAlert onAccept={acceptCookies} />}
            </Router>
          </Suspense>
        </ThemeProvider>
      </StoreProvider>
    </HelmetProvider>
  );
};

export default App;
