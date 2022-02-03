import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './api'

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        //actions => action handlers
        bugsRequested: (bugs, action) => {
            bugs.loading = true;
        },

        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
            bugs.loading = false;
        },

        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },

        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true;
        },

        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false;
        },

        bugRemoved: (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id)
        },

        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId)
            bugs.list[index].userId = userId;
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

export const { bugsRequested, bugAdded, bugsReceived, bugRemoved, bugResolved, bugAssignedToUser, bugsRequestFailed } = slice.actions;
export default slice.reducer;


//Action Creators
const url = "/bugs"

export const loadBugs = () => apiCallBegan({
    url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type
    //onError: actions.apiCallFailed.type
})



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