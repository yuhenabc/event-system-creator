'use strict';

class EventSystemCreator {
  constructor() {
    this.e = new EventTarget();
    this.listenerMap = new Map();
  }

  on(type, listener) {
    this.listenerMap.set(listener, event => {
      listener(event.detail);
    });
    this.e.addEventListener(type, this.listenerMap.get(listener));
  }

  off(type, listener) {
    this.e.removeEventListener(type, this.listenerMap.get(listener));
    this.listenerMap.delete(listener);
  }

  emit(type, data) {
    this.e.dispatchEvent(new CustomEvent(type, {
      detail: data
    }));
  }

}

module.exports = EventSystemCreator;
