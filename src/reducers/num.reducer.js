export function numReducer(state = 1, action) {
    switch (action.type) {
        case 'NUM_ACTION':
            return action.num;
        default:
            return state;
    }
}
