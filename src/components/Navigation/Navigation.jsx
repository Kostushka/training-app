import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__link}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/posts'>Определения</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
