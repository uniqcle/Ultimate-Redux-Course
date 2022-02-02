const api = store => next => action => {
    if (action.type !== 'apiCallBegan') return next(action)


}

export default api; 