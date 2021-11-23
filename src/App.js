import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Router from './containers/Router';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Router />
        </BrowserRouter>
    );
};

export default App;
