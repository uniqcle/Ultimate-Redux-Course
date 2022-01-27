import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        //actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },

        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true;
        },

        bugRemoved: (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id)
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;






/*
function reducer(state = [], action) {

    switch (action.type) {
        case bugAdded.type:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]

        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id)

        case bugResolved.type:
            return state.map(bug =>
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
            )

        default:
            return state;
    }
}

export default reducer; 
*/ 