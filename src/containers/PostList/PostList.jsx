import PostItem from '../../components/PostItem';
import styles from './PostList.module.css';

const PostList = ({ posts, remove }) => {
    if (!posts.length) {
        return <h1 className={styles.header}>Нет данных</h1>;
    }
    return (
        <div className={styles.container}>
            <h1>Список определений</h1>
            {posts.map((post, index) => (
                <PostItem
                    key={post.id}
                    post={post}
                    number={index + 1}
                    remove={remove}
                />
            ))}
        </div>
    );
};

export default PostList;
