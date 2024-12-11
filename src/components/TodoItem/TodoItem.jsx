import { FaCheck } from 'react-icons/fa';

import Button from '../UI/Button/Button';
import styles from './TodoItem.module.scss';

function TodoItem({ todo, onToggleCompliteTodo, onDeleteTodo, isDeleting }) {
    const complitedClass = todo.isComplited ? styles.complited : '';
    const deletingClass = isDeleting ? styles.deleting : '';

    return (
        <li className={`${styles.todoItem} ${complitedClass} ${deletingClass}`}>
            <div className={styles.todoItem__container}>
                <p>{todo.text}</p>
                <div className={styles.todoItem__buttons}>
                    <Button
                        className={`${styles.todoItem__checkButton} ${complitedClass}`}
                        onClick={() => onToggleCompliteTodo(todo.id, todo.isComplited)}
                    >
                        <FaCheck />
                    </Button>

                    <Button
                        className={`${styles.todoItem__deleteButton} ${complitedClass}`}
                        onClick={() => onDeleteTodo(todo.id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;
