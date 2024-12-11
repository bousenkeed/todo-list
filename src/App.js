import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTodos } from './redux/slices/todosSlice';
import Form from './components/Form/Form';
import TodosList from './components/TodosList/TodosList';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    },[dispatch])

    return (
        <div className="app">
            <h1 className="app__title">Todo List</h1>
            <Form />
            <TodosList />
        </div>
    );
}

export default App;
