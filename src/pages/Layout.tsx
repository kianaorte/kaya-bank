import Header from '../components/Header/Header';
import styles from './layout.module.scss'
import React from 'react';

const Layout: React.FC = () => {
    return(
    <div className={styles.Layout}>
        <Header />
    </div>
    );
}

export default Layout;