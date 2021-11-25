import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Posts from '../Posts';
import Error from '../Error';
import PostPage from '../PostPage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='posts' element={<Posts />} />
                <Route path='posts/:id' element={<PostPage />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    );
};

export default Router;
