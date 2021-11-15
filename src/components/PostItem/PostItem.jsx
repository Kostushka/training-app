import styles from './PostItem.module.css';
import classes from '../UI/UiButton/UiButton.module.css';

const PostItem = ({ post, number }) => {
    return (
        <div className={styles.container}>
            <div>
                <strong className={styles.header}>
                    <span className={styles.number}>{number}. </span>
                    {post.name}
                </strong>
                <div className={styles.post}>{post.message}</div>
            </div>
            <button className={classes.btn}>Удалить</button>
        </div>
    );
};

export default PostItem;
