import { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './containers/PostList';
import PostFilter from './components/PostFilter';
import UiModal from './components/UI/UiModal';
import UiButton from './components/UI/UiButton';
import UiLoading from './components/UI/UiLoading';
import { usePosts } from './hooks/usePosts';
import { getApiResource } from './api/getApiResource';
import styles from './App.module.css';
import { useFetching } from './hooks/useFetching';

const App = () => {
    // const [posts, setPosts] = useState([
    //     {
    //         id: 1,
    //         title: 'Number',
    //         body: 'Число',
    //     },
    //     {
    //         id: 2,
    //         title: 'String',
    //         body: 'Строка',
    //     },
    //     {
    //         id: 3,
    //         title: 'Boolean',
    //         body: 'Булево значение',
    //     },
    //     {
    //         id: 4,
    //         title: 'null',
    //         body: 'Пустое значение, используемое целенаправлено',
    //     },
    //     { id: 5, title: 'undefined', body: 'Пустое значение по умолчанию' },
    //     {
    //         id: 6,
    //         title: 'Symbol',
    //         body: 'Примитив для создания уникальных идентификаторов',
    //     },
    //     {
    //         id: 7,
    //         title: 'BigInt',
    //         body: 'Целое число произвольной длины',
    //     },
    // ]);
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ sort: '', search: '' });
    const [modalVisible, setModalVisible] = useState(false);

    const [getResource, isFetchingPosts, errorPosts] = useFetching(async () => {
        const res = await getApiResource();
        setPosts(res);
    });

    useEffect(() => {
        getResource();
    }, []);

    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModalVisible(false);
    };

    const removePost = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    return (
        <div className={styles.container}>
            <div>
                <UiButton onClick={(e) => setModalVisible(true)}>
                    Добавить определение
                </UiButton>
            </div>
            <UiModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost} />
            </UiModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            {errorPosts && <div>Ошибка ${errorPosts}</div>}
            {isFetchingPosts ? (
                <UiLoading />
            ) : (
                <PostList posts={searchedAndSortedPosts} remove={removePost} />
            )}
        </div>
    );
};

export default App;
