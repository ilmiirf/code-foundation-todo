import { Suspense } from 'react';
import { privateRoute, publicRoute } from './routing.item';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PageNotFound from 'viewport/page/NotFound';
import PageLoading from 'viewport/page/Loading';
import HasLayout from 'viewport/HasLayout';
import RouteLogger from './RouteLogger';

const Scene = () => (
  <Suspense fallback={<PageLoading />}>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          {publicRoute.map((route) => (
            <Route
              path={route.path}
              element={<HasLayout>{route.element}</HasLayout>}
              key={route.path}
            ></Route>
          ))}
          {privateRoute.map((route) => (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <HasLayout>{route.element}</HasLayout>
                </PrivateRoute>
              }
              key={route.path}
            ></Route>
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
