import EventSystem from './src/event-system-creator.mjs'

/* Define bridge */

const bridge = new EventSystem()

// native to js
window.onBridgeMsg = function (action, data) {
  bridge.emit(action, data)
}

// js to native
bridge.send = function (action, data, callback) {
  if (window.NimCefWebInstance) {
    window.NimCefWebInstance.call(action, data, callback)
  } else {
    callback(true, {
      message: 'NimCefWebInstance not exist',
    })
  }
}

/* Using bridge */

bridge.on('ping', (data) => {
  console.log(data)
})

window.onBridgeMsg('ping', { count: 123 })
