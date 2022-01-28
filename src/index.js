import configureStore from './store_user_ducks/configureStore'
import * as actions from './store_user_ducks/users'

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("store is changing...")
})


store.dispatch(actions.userAdded(5))
store.dispatch(actions.userRemoved(5))

store.dispatch(actions.userAdded(6))
store.dispatch(actions.userIsAdmin(6))