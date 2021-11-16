import UiButton from '../UI/UiButton';
import styles from './PostItem.module.css';

const PostItem = ({ post, number, remove }) => {
    return (
        <div className={styles.container}>
            <div>
                <strong className={styles.header}>
                    <span className={styles.number}>{number}. </span>
                    {post.name}
                </strong>
                <div className={styles.post}>{post.message}</div>
            </div>
            <UiButton onClick={(e) => remove(post.id)}>Удалить</UiButton>
        </div>
    );
};

export default PostItem;
