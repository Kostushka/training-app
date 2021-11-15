import PostItem from '../../components/PostItem';
import styles from './PostList.module.css';

const PostList = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h1>Список определений</h1>
            {posts.map((post, index) => (
                <PostItem key={post.id} post={post} number={index + 1} />
            ))}
        </div>
    );
};

export default PostList;
