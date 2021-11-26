import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';

const Router = () => {
    const isAuth = false;
    return (
        <>
            <Routes>
                {isAuth
                    ? privateRoutes.map((route, index) => (
                          <Route
                              key={index}
                              path={route.path}
                              element={route.element}
                          />
                      ))
                    : publicRoutes.map((route, index) => (
                          <Route
                              key={index}
                              path={route.path}
                              element={route.element}
                          />
                      ))}
            </Routes>
        </>
    );
};

export default Router;
