export default class EventChannel {
    constructor() {
        this._subscribers = {}
    }

    subscribe(event, callback) {
        if (this._subscribers[event] === undefined || this._subscribers[event] === null) {
            this._subscribers[event] = [];
        }
        const index = this._subscribers[event].push(callback) - 1;
        return () => {
            this._subscribers[event][index] = undefined;
        }
    }

    dispatch(event, data) {
        const subscribers = this._subscribers[event];
        if (subscribers === undefined || subscribers === null) return;
        subscribers.forEach((callback) => {
            if (typeof callback === 'function') {
                callback(data)
            }
        })
    }
}