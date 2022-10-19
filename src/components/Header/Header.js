import React from 'react';

import Button from '../UI/Button/Button';
import logo from '../../assets/logo.png';
import expandArrow from '../../assets/expand-arrow.png';
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbar__content}>
                <div className={styles.navbar__list}>
                    <h1 className={styles.heading}>
                        <img className={styles.logo} src={logo} alt='logo' />
                        <span>Estatery</span>
                    </h1>
                    <ul>
                        <li style={{'backgroundColor': '#d891dd', 'color': '#000'}}>Rent</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>
                            <span>Manage Property</span>
                            <img src={expandArrow} alt='' />
                        </li>
                        <li>
                            <span>Resources</span>
                            <img src={expandArrow} alt='' />
                        </li>
                    </ul>
                </div>
                <div className={styles.navbar__buttons}>
                    <Button inverse>Login</Button>
                    <Button>Sign up</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;