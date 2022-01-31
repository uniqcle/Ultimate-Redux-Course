import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            })
        }
    }
})


export const getUsers = createSelector(
    state => state.entities.users,
    users => users.filter(u => u.id)
)

export const { userAdded } = slice.actions;
export default slice.reducer; 
