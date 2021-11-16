import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './containers/PostList';
import UiSelect from './components/UI/UiSelect';

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
    const [selectedSort, setSelectedSort] = useState('');

    const sortPost = (value) => {
        setSelectedSort(value);
        setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
    };

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    return (
        <div className={styles.container}>
            <PostForm create={createPost} />
            {posts.length ? (
                <>
                    <UiSelect
                        value={selectedSort}
                        onChange={sortPost}
                        options={[
                            { value: 'name', name: 'По названию' },
                            { value: 'message', name: 'По определению' },
                        ]}
                        defaultValue='Сортировка'
                    />

                    <PostList posts={posts} remove={removePost} />
                </>
            ) : (
                <h1 className={styles.header}>Нет данных</h1>
            )}
        </div>
    );
};

export default App;
