export function firstCounterReducer(state = 0, action) {
    switch (action.type) {
        case "FIRST_INCREMENT": {
            return ++state;
        }
    }
    return state;
}

export function secondCounterReducer(state = 0, action) {
    switch (action.type) {
        case "SECOND_INCREMENT": {
            return ++state;
        }
    }
    return state;
}
