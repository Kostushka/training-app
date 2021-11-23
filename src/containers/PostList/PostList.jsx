import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from '../../components/PostItem';
import styles from './PostList.module.css';

const PostList = ({ posts, remove }) => {
    if (!posts.length) {
        return <h1 className={styles.header}>Нет данных</h1>;
    }
    return (
        <div className={styles.container}>
            <h1>Список определений</h1>
            <TransitionGroup className='todo-list'>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem
                            post={post}
                            remove={remove}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
