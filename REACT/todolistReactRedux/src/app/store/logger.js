export function logger(store) {
    return (next) => (action) => {
        console.log('ACTION: ', action);

        const nextAction = next(action);
        console.log('STATE: ', store.getState());

        return nextAction;
    }
}