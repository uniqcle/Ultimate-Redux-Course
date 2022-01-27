import store from './store'
import * as actions from './actions'

store.subscribe(() => {
    console.log('subscribe...')
})

store.dispatch(actions.bugAdded("bugging 1"))
store.dispatch(actions.bugAdded("bugging 2"))
store.dispatch(actions.bugAdded("bugging 3"))
store.dispatch(actions.bugResolved(1))

console.log(store.getState())

/*
import store from './store'
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed! ", store.getState())
});

store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugResolved(1))

unsubscribe();

store.dispatch(bugRemoved(1))

console.log(store.getState())
*/ 