import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
    const [likes, setLikes] = useState(0);

    const increment = (e) => {
        setLikes(likes + 1);
    };

    const decrement = (e) => {
        setLikes(likes - 1);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.count}>{likes}</h1>
            <button className={styles.btn} onClick={increment}>
                Увеличить
            </button>
            <button className={styles.btn} onClick={decrement}>
                Уменьшить
            </button>
        </div>
    );
};

export default App;
