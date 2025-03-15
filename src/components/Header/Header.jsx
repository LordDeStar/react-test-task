import styles from './styles.module.css';


import React from 'react'

const Header = ({ level, children }) => {
    return (
        <div className={styles.container} style={{ fontWeight: level * 100, fontSize: level * 1.25 + 'rem' }}>
            {children}
        </div>
    )
}

export default Header