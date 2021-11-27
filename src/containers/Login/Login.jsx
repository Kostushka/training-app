import { useContext } from 'react';
import UiButton from '../../components/UI/UiButton';
import UiInput from '../../components/UI/UiInput';
import { AuthContext } from '../../context';
import styles from './Login.module.css';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <form onSubmit={login}>
            <div className={styles.container}>
                <UiInput type='text' placeholder='Введите логин' />
                <UiInput type='password' placeholder='Введите пароль' />
                <div>
                    <UiButton>Войти</UiButton>
                </div>
            </div>
        </form>
    );
};

export default Login;
