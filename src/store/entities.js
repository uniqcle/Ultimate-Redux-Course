import { combineReducers } from 'redux'
import bugsReducer from './bugs'
import projectsReducer from '../store_projects/projects'

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer
})