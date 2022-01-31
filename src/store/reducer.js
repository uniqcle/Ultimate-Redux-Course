import { combineReducers } from 'redux'
import entitiesRducer from './entities'
import userReducer from '../store_user_ducks/users'

export default combineReducers({
    entities: entitiesRducer,
})