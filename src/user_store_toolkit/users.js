import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: action.payload.id,
                isAdmin: false
            })
        },

        userIsAdmin: (users, action) => {
            const index = users.findIndex(user => user.id === action.payload.id)
            users[index].isAdmin = true;
        },

        userRemoved: (users, action) => {
            return users.filter(user => user.id !== action.payload.id)
        }
    }
})

export const { userAdded, userIsAdmin, userRemoved } = slice.actions;
export default slice.reducer;

