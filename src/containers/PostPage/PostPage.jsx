import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getPostComments, getPostPage } from '../../api/getApiResource';
import UiButton from '../../components/UI/UiButton';
import PostIdPage from '../../components/PostIdPage/PostId';
import PostIdComments from '../../components/PostIdPage/PostIdComments';
import { useFetching } from '../../hooks/useFetching';
import styles from './PostPage.module.css';

const PostPage = () => {
    const params = useParams();
    const nav = useNavigate();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const [fetchingPostPage, isLoadingPostPage, postPageError] = useFetching(
        async () => {
            const res = await getPostPage(params.id);
            setPost(res.data);
        }
    );
    const [fetchingPostComments, isLoadingComments, commentsError] =
        useFetching(async () => {
            const res = await getPostComments(params.id);
            setComments(res.data);
        });

    useEffect(() => {
        fetchingPostPage();
        fetchingPostComments();
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <UiButton onClick={() => nav('/posts')}>Назад</UiButton>
            </div>

            <h1 className={styles.title}>Определение № {params.id}</h1>

            <PostIdPage isLoadingPostPage={isLoadingPostPage} post={post} />

            <PostIdComments
                isLoadingComments={isLoadingComments}
                comments={comments}
            />
        </div>
    );
};

export default PostPage;
