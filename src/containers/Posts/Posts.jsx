import { useState, useEffect } from 'react';
import PostList from '../PostList';
import PostFilter from '../../components/PostFilter';
import PostForm from '../../components/PostForm';
import UiButton from '../../components/UI/UiButton';
import UiLoading from '../../components/UI/UiLoading';
import UiModal from '../../components/UI/UiModal';
import UiPagination from '../../components/UI/UiPagination';
import { getApiResource } from '../../api/getApiResource';
import { useFetching } from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import { getPagesCount } from '../../utils/pages';

import styles from './Posts.module.css';

const Posts = () => {
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

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPagesCount, setTotalPagesCount] = useState(0);

    const [getResource, isFetchingPosts, errorPosts] = useFetching(async () => {
        const res = await getApiResource(limit, page);
        const totalCount = res.headers['x-total-count'];
        setTotalPagesCount(getPagesCount(totalCount, limit));
        setPosts(res.data);
    });

    useEffect(() => {
        getResource();
    }, [page]);

    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModalVisible(false);
    };

    const removePost = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    const changePage = (page) => {
        setPage(page);
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
            <UiPagination
                totalPagesCount={totalPagesCount}
                page={page}
                changePage={changePage}
            />
        </div>
    );
};

export default Posts;
