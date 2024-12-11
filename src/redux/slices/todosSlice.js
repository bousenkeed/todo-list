import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('http://localhost:3004/todos');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (todo, { rejectWithValue }) => {
        try {
            await axios.post('http://localhost:3004/todos/', todo);
            return todo;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, { rejectWithValue }) => {
        console.log(id);
        try {
            await axios.delete(`http://localhost:3004/todos/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleCompiteTodo = createAsyncThunk(
    'todos/toggleTodo',
    async ({ id, isComplited }, { rejectWithValue }) => {
        try {
            await axios.patch(`http://localhost:3004/todos/${id}`, {
                isComplited: !isComplited,
            });
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                return (state = action.payload);
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const id = action.payload;
                const index = state.findIndex((todo) => todo.id === id);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            })
            .addCase(toggleCompiteTodo.fulfilled, (state, action) => {
                const id = action.payload;
                const todo = state.find((todo) => todo.id === id);
                if (todo) {
                    todo.isComplited = !todo.isComplited;
                }
            });
    },
});

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
