import UiButton from '../../components/UI/UiButton';
import UiInput from '../../components/UI/UiInput';
import styles from './Login.module.css';

const Login = () => {
    return (
        <form>
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
