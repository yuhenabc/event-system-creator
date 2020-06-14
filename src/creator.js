function getKeysMap(appearance) {
  let keys = []
  let fun
  switch (appearance) {
    case 'trandition':
      keys = ['addEventListener', 'removeEventListener', 'dispatchEvent']
      fun = function TranditionEventSystem() {
        this.e = new EventTarget()
      }
      break
    default:
      keys = ['on', 'off', 'trigger', 'emit']
      fun = function EventSystem() {
        this.e = new EventTarget()
      }
  }
  return {
    on: keys[0],
    off: keys[1],
    trigger: keys[2],
    trigger2: keys[3],
    fun: fun
  }
}

export default function (appearance) {
  const funsMap = new Map()
  const keysMap = getKeysMap(appearance)
  const EventSystem = keysMap.fun
  EventSystem.prototype[keysMap.on] = function (eventname, listener) {
    funsMap.set(listener, event => {
      listener(event.detail)
    })
    this.e.addEventListener(eventname, funsMap.get(listener))
  }
  EventSystem.prototype[keysMap.off] = function (eventname, listener) {
    this.e.removeEventListener(eventname, funsMap.get(listener))
  }
  EventSystem.prototype[keysMap.trigger] = function (eventname, data) {
    this.e.dispatchEvent(new CustomEvent(eventname, {detail: data}))
  }
  if (keysMap.trigger2) {
    EventSystem.prototype[keysMap.trigger2] = EventSystem.prototype[keysMap.trigger]
  }
  return new EventSystem()
}
