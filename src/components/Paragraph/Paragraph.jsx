import styles from './styles.module.css';

const Paragraph = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Paragraph