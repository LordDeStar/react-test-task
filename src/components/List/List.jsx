
import styles from "./styles.module.css";

const List = ({ data }) => {
    const clickHandler = (id) => {
        alert(`А ведь здесь может быть что-то крому вывода сообщения...\nВы нажали на ${id} элемент`)
    }
    return (
        <div className={styles.container}>
            {data.map((element, index) => (
                <div className={styles.list_item} key={index} onClick={() => clickHandler(index + 1)}>
                    <p>
                        {index + 1}. {element}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default List