import UiButton from '../UI/UiButton';
import styles from './PostItem.module.css';

const PostItem = ({ post, remove }) => {
    return (
        <div className={styles.container}>
            <div>
                <strong className={styles.header}>
                    <span className={styles.number}>{post.id}. </span>
                    {post.title}
                </strong>
                <div className={styles.post}>{post.body}</div>
            </div>
            <UiButton onClick={(e) => remove(post.id)}>Удалить</UiButton>
        </div>
    );
};

export default PostItem;
