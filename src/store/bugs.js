import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

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
        },

        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId)
            bugs[index].userId = userId;
        }
    }
})

//expensive funtion
// export const getUnresolvedBugs = state =>
//     state.entities.bugs.filter(bug => !bug.resolved)

//Memoization
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(b => !b.resolved)
)


export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(b => b.userId === userId)
)

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } = slice.actions;
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