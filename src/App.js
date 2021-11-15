import { useState } from 'react';
import styles from './App.module.css';
import UiButton from './components/UI/UiButton';
import UiInput from './components/UI/UiInput';
import PostList from './containers/PostList';

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

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const addPost = (e) => {
        e.preventDefault();
        if (name && message) {
            const newPost = { id: Math.random(), name, message };
            setPosts([...posts, newPost]);
            setName('');
            setMessage('');
        }
    };
    return (
        <div className={styles.container}>
            <form>
                <UiInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Понятие'
                />
                <UiInput
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text'
                    placeholder='Определение'
                />
                {name && message ? (
                    <UiButton onClick={addPost}>Добавить</UiButton>
                ) : (
                    <UiButton disabled onClick={addPost}>
                        Добавить
                    </UiButton>
                )}
            </form>
            <PostList posts={posts} />
        </div>
    );
};

export default App;
