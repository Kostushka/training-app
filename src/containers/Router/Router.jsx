import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import UiLoading from '../../components/UI/UiLoading';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';

const Router = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <UiLoading />;
    }
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
