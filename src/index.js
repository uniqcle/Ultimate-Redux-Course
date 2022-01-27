import configureStore from './store/configureStore'
import * as actions from './store/bugs'

const store = configureStore();

store.subscribe(() => {
    console.log('subscribe...')
})

store.dispatch(actions.bugAdded({ description: "bugging 1" }))
store.dispatch(actions.bugAdded({ description: "bugging 2" }))
store.dispatch(actions.bugAdded({ description: "bugging 3" }))
store.dispatch(actions.bugResolved({ id: 1 }))

console.log(store.getState())

