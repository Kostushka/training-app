import Header from '../containers/Header';
import Posts from '../containers/Posts';
import PostPage from '../containers/PostPage';
import Error from '../containers/Error';
import Login from '../containers/Login';

export const privateRoutes = [
    { path: '/', element: <Header /> },
    { path: 'posts', element: <Posts /> },
    { path: 'posts/:id', element: <PostPage /> },
    { path: '*', element: <Error /> },
];
export const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Login /> },
];
