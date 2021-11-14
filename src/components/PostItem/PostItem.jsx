import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={styles.container}>
            <strong className={styles.header}>
                <span className={styles.number}>{props.number}. </span>
                {props.post.name}
            </strong>
            <div className={styles.post}>{props.post.message}</div>
        </div>
    );
};

export default PostItem;
