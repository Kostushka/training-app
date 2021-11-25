import UiLoading from '../../UI/UiLoading';
import styles from './PostIdComments.module.css';

const PostIdComments = ({ isLoadingComments, comments }) => {
    return (
        <>
            <h1 className={styles.title}>Комментарии</h1>
            {isLoadingComments ? (
                <UiLoading />
            ) : (
                comments.map((com) => (
                    <div className={styles.comments} key={com.id}>
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                ))
            )}
        </>
    );
};

export default PostIdComments;
