import { lastIndexOf } from 'lodash'
import * as actions from './actionTypes'

let lastId = 0;

function reducer(users = [], action) {
    switch (action.type) {
        case actions.USER_ADDED:
            return [
                ...users,
                {
                    id: action.payload.id,
                    isAdmin: false
                }
            ]

        case actions.USER_REMOVED:
            return users.filter(user => user.id !== action.payload.id)

        case actions.USER_ISADMIN:
            return users.map(user => user.id === action.payload.id ? { ...user, isAdmin: true } : user)

        default:
            return users;
    }
}

export default reducer; 