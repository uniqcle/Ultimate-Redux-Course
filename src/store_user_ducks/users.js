
//Action types
const USER_ADDED = "userAdded"
const USER_REMOVED = "userRemoved"
const USER_ISADMIN = "userIsAdmin"

//action creators
export const userAdded = id => ({
    type: USER_ADDED,
    payload: {
        id
    }
})

export const userRemoved = id => ({
    type: USER_REMOVED,
    payload: {
        id
    }
})

export const userIsAdmin = id => ({
    type: USER_ISADMIN,
    payload: {
        id
    }
})



function reducer(users = [], action) {
    switch (action.type) {
        case USER_ADDED:
            return [
                ...users,
                {
                    id: action.payload.id,
                    isAdmin: false
                }
            ]

        case USER_REMOVED:
            return users.filter(user => user.id !== action.payload.id)

        case USER_ISADMIN:
            return users.map(user => user.id === action.payload.id ? { ...user, isAdmin: true } : user)

        default:
            return users;
    }
}

export default reducer; 
