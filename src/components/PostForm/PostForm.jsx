import { useState } from 'react';
import UiButton from '../UI/UiButton';
import UiInput from '../UI/UiInput';
import styles from './PostForm.module.css';

const PostForm = ({ create }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const addPost = (e) => {
        e.preventDefault();
        if (name && message) {
            const newPost = { id: Math.random(), name, message };
            create(newPost);
            setName('');
            setMessage('');
        }
    };

    return (
        <>
            <form>
                <UiInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Понятие'
                />
                <UiInput
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text'
                    placeholder='Определение'
                />
                {name && message ? (
                    <UiButton onClick={addPost}>Добавить</UiButton>
                ) : (
                    <UiButton disabled onClick={addPost}>
                        Добавить
                    </UiButton>
                )}
            </form>
        </>
    );
};

export default PostForm;
