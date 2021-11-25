import { useNavigate } from 'react-router-dom';
import UiButton from '../UI/UiButton';
import styles from './PostItem.module.css';

const PostItem = ({ post, remove }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div>
                <strong className={styles.header}>
                    <span className={styles.number}>{post.id}. </span>
                    {post.title}
                </strong>
                <div className={styles.post}>{post.body}</div>
            </div>
            <div className={styles.post__btn}>
                <UiButton onClick={(e) => remove(post.id)}>Удалить</UiButton>
                <UiButton onClick={(e) => navigate(`/posts/${post.id}`)}>
                    Открыть
                </UiButton>
            </div>
        </div>
    );
};

export default PostItem;
