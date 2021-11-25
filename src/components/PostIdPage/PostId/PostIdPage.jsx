import UiLoading from '../../UI/UiLoading';
import styles from './PostIdPage.module.css';

const PostIdPage = ({ isLoadingPostPage, post }) => {
    return (
        <>
            {isLoadingPostPage ? (
                <UiLoading />
            ) : (
                <div className={styles.post}>
                    {post.id}. {post.body}
                </div>
            )}
        </>
    );
};

export default PostIdPage;
