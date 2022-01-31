import configureStore from './store/configureStore'
import { projectAdded, projectInHand, projectRemoved, getInHandProjects } from './store_projects/projects'
import { bugAdded, bugRemoved, bugResolved, bugAssignedToUser, getUnresolvedBugs, getBugsByUser } from './store/bugs'
import { userAdded } from './store/users';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("store is changing...")
})

store.dispatch(projectAdded({ id: 3 }))
store.dispatch(projectAdded({ id: 4 }))
store.dispatch(projectAdded({ id: 5 }))
store.dispatch(projectAdded({ id: 6 }))
store.dispatch(projectAdded({ id: 7 }))

store.dispatch(projectInHand({ id: 3 }))
//store.dispatch(actions.projectRemoved({ id: 3 }))

store.dispatch(bugAdded({ description: "test1" }))
store.dispatch(bugAdded({ description: "test2" }))
store.dispatch(bugResolved({ id: 1 }))



store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))


store.dispatch(userAdded({ name: 'Uniqcle' }))

const unresolvedBugs = getUnresolvedBugs(store.getState())
const unresolvedProjects = getInHandProjects(store.getState())

const bugs = getBugsByUser(1)(store.getState())

console.log(bugs)
