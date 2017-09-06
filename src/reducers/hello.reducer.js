export function helloReducer(state = 'Hello from reducer state', action) {
    switch (action.type) {
        case 'HELLO_ACTION':
            return action.hello;
        default:
            return state;
    }
}
