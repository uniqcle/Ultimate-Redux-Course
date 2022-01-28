import configureStore from './user_store_toolkit/configureStore'
import * as actions from './user_store_toolkit/users'

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("store is changing...")
})

store.dispatch(actions.userAdded({ id: 5 }))
store.dispatch(actions.userRemoved({ id: 5 }))

store.dispatch(actions.userAdded({ id: 6 }))
store.dispatch(actions.userIsAdmin({ id: 6 }))