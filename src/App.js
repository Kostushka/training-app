import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Router from './containers/Router';
import { AuthContext } from './context';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
            <BrowserRouter>
                <Navigation />
                <Router />
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
