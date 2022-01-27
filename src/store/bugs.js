import { createAction, createReducer } from '@reduxjs/toolkit'

const bugUpdated = createAction("bugUpdated")
console.log(bugUpdated({ id: 1 }))

//Action creators
export const bugAdded = createAction("bugAdded")
export const bugResolved = createAction("bugResolved")
export const bugRemoved = createAction("bugRemoved")

//Reducer
let lastId = 0;


export default createReducer([], {
    //key: value
    //actions: function(event => event handler)
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true;
    },

    [bugRemoved.type]: (bugs, action) => {
        return bugs.filter(bug => bug.id !== action.payload.id)
    }
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