import { createAction, createReducer } from '@reduxjs/toolkit'

export const userAdded = createAction("userAdded")
export const userIsAdmin = createAction("userIsAdmin");
export const userRemoved = createAction("userRemoved")

export default createReducer([], {
    userAdded: (users, action) => {
        //key: value
        //actions: functions (event => event handler)
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
})