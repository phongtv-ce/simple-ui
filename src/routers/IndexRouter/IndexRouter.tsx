import PageLayout from 'components/PageLayout/PageLayout';
import Spinner from 'components/Spinner/Spinner';
import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../routes';

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          {routes.map(({ component: Component, path, ...rest }) => (
            <Route
              element={
                <Suspense fallback={<Spinner />}>
                  <Component />
                </Suspense>
              }
              path={path}
              key={path}
              {...rest}
            />
          ))}
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default IndexRouter;
