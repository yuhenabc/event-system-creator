export default class EventSystemCreator {
    constructor() {
        this.e = new EventTarget();
        this.funsMap = new Map();
    }
    on(type, listener) {
        this.funsMap.set(listener, (event) => {
            listener(event.detail);
        });
        this.e.addEventListener(type, this.funsMap.get(listener));
    }
    off(type, listener) {
        this.e.removeEventListener(type, this.funsMap.get(listener));
        this.funsMap.delete(listener);
    }
    emit(type, data) {
        this.e.dispatchEvent(new CustomEvent(type, { detail: data }));
    }
}
