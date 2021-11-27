import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context';
import UiButton from '../UI/UiButton';
import styles from './Navigation.module.css';

const Navigation = () => {
    const { setIsAuth } = useContext(AuthContext);
    const logout = (e) => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };
    return (
        <div className={styles.nav}>
            <div className={styles.nav__link}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/posts'>Определения</NavLink>
            </div>
            <div>
                <UiButton onClick={logout}>Выход</UiButton>
            </div>
        </div>
    );
};

export default Navigation;
