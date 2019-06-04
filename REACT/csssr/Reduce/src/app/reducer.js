export default function reducer(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return ++state;
        }
    }
    return state;
}