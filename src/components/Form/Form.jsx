import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../../redux/slices/todosSlice';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './Form.module.scss';

function Form() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!inputValue) {
            return;
        }
        dispatch(addTodo({ id: uuidv4(), text: inputValue, isComplited: false }));
        setInputValue('');
    };

    return (
        <form className={styles.form} onSubmit={handleAddTodo}>
            <div className={styles.form__input}>
                <Input
                    placeholder="Введите новое дело..."
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>
            <Button type="submit">Добавить</Button>
        </form>
    );
}

export default Form;
