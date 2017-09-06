export function initialReducer(state = 'Hello from reducer state', action) {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return action.initial;
        default:
            return state;
    }
}
