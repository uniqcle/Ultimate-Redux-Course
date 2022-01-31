import { combineReducers } from 'redux'
import bugsReducer from './bugs'
import projectsReducer from '../store_projects/projects'
import userReducer from './users'

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    users: userReducer
})