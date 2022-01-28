import store from './store_user/store'
import { userAdded, userRemoved, userIsAdmin } from './store_user/actions'

const unsubscribe = store.subscribe(() => {
    console.log("store is changing...")
})


store.dispatch(userAdded(5))
store.dispatch(userRemoved(5))

store.dispatch(userAdded(6))
store.dispatch(userIsAdmin(6))