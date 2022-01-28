import * as actions from './actionTypes'

export const userAdded = id => ({
    type: actions.USER_ADDED,
    payload: {
        id
    }
})

export const userRemoved = id => ({
    type: actions.USER_REMOVED,
    payload: {
        id
    }
})


export const userIsAdmin = id => ({
    type: actions.USER_ISADMIN,
    payload: {
        id
    }
})