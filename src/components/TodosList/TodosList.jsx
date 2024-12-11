import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
    selectTodos,
    deleteTodo,
    toggleCompiteTodo,
} from '../../redux/slices/todosSlice';
import styles from './TodosList.module.scss';
import TodoItem from '../TodoItem/TodoItem';

function TodosList() {
    const [deletingTodo, setDeletingTodo] = useState(null);

    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const handleDeleteTodo = (id) => {
        setDeletingTodo(id);
        setTimeout(() => {
            dispatch(deleteTodo(id)); // Удаляем задачу из состояния Redux после завершения анимации
            setDeletingTodo(null); // Сбрасываем ID удаляемой задачи
        }, 400);
    };

    const handleToggleCompliteTodo = (id, isComplited) => {
        dispatch(toggleCompiteTodo({ id, isComplited }));
    };

    return (
        <ul className={styles.todoList}>
            {todos.length === 0 ? (
                <h2>Дел еще не добавлено</h2>
            ) : (
                todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={handleDeleteTodo}
                            onToggleCompliteTodo={handleToggleCompliteTodo}
                            isDeleting={deletingTodo === todo.id}
                        />
                    );
                })
            )}
        </ul>
    );
}

export default TodosList;
