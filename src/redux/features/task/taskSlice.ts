import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface ITasks {
    task: ITask[],
    filter: 'all' | 'low' | 'high' | 'medium',
}

const initialState: ITasks = {
    task: [],
    filter: 'all'
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            console.log(action.payload);
            const taskObject = {
                ...action.payload,
                isCompleted: false,
                id: uuidv4(),
            }
            state.task.push(taskObject)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            state.task.forEach(todo => todo.id === action.payload && (todo.isCompleted = !todo.isCompleted))
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter(todo => todo.id !== action.payload);
        },
        updateTask: (state, action) => {
            const prevTask = state.task.find(todo => todo.id === action.payload.id);
            if (prevTask) {
                prevTask.description = action.payload.description
                prevTask.title = action.payload.title
                prevTask.priority = action.payload.priority
                prevTask.dueDate = action.payload.dueDate
            }
        },
        updateFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {
    if (state.tasks.filter === 'low' || state.tasks.filter === 'medium' || state.tasks.filter === 'high') {
        console.log(state.tasks.task.filter(todo => todo.priority === state.tasks.filter));
        return state.tasks.task.filter(todo => todo.priority === state.tasks.filter)
    } else {
        return state.tasks.task
    }

}

export const { addTask, toggleComplete, deleteTask, updateTask, updateFilter } = taskSlice.actions
export default taskSlice.reducer;