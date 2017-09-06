export function intialActionCreator(str) {
    return {
        type: 'HELLO_ACTION',
        hello: str,
    };
}
