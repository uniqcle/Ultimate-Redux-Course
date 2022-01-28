import configureStore from './store_projects/configureStore'
import * as actions from './store_projects/projects'

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("store is changing...")
})

store.dispatch(actions.projectAdded({ id: 3 }))
store.dispatch(actions.projectAdded({ id: 4 }))
store.dispatch(actions.projectAdded({ id: 5 }))
store.dispatch(actions.projectAdded({ id: 6 }))
store.dispatch(actions.projectAdded({ id: 7 }))

store.dispatch(actions.projectInHand({ id: 3 }))
store.dispatch(actions.projectRemoved({ id: 3 }))

console.log(store.getState())