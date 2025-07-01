import type { RootState } from "@/redux/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            id: '1',
            name: 'jame'
        }
    ]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push({ ...action.payload, id: nanoid() })
        },
        deleteUser: (state, action) => {
            state.user = state.user.filter(user => {
                return user.id !== action.payload
            })
        }
    }
})


export const userSelector = (state: RootState) => {
    return state.users.user
}
export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;