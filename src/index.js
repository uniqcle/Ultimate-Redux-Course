import store from './store/store'
import * as actions from './store/bugs'

store.subscribe(() => {
    console.log('subscribe...')
})

store.dispatch(actions.bugAdded("bugging 1"))
store.dispatch(actions.bugAdded("bugging 2"))
store.dispatch(actions.bugAdded("bugging 3"))
store.dispatch(actions.bugResolved(1))

console.log(store.getState())

