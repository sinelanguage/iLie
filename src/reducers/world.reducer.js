export function worldReducer(state = 'World from reducer state', action) {
    switch (action.type) {
        case 'WORLD_ACTION':
            return action.world;
        default:
            return state;
    }
}
