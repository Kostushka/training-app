import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './containers/PostList';
import styles from './App.module.css';

const App = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: 'Number',
            message: 'Число',
        },
        {
            id: 2,
            name: 'String',
            message: 'Строка',
        },
        {
            id: 3,
            name: 'Boolean',
            message: 'Булево значение',
        },
        {
            id: 4,
            name: 'null',
            message: 'Пустое значение, используемое целенаправлено',
        },
        { id: 5, name: 'undefined', message: 'Пустое значение по умолчанию' },
        {
            id: 6,
            name: 'Symbol',
            message: 'Примитив для создания уникальных идентификаторов',
        },
        {
            id: 7,
            name: 'BigInt',
            message: 'Целое число произвольной длины',
        },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    return (
        <div className={styles.container}>
            <PostForm create={createPost} />
            <PostList posts={posts} remove={removePost} />
        </div>
    );
};

export default App;
