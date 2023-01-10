import EventSystemCreator from './event-system-creator.mjs'

const es = new EventSystemCreator()

const logFoo = (data) => {
  console.log('foo', data)
}

const logBar = (data) => {
  console.log('bar', data)
}

es.on('foo', logFoo)
es.on('bar', logBar)

es.emit('foo', 'go')
es.emit('bar', { a: 1, b: 2, c: 3 })

console.log('==================')

es.off('foo', logFoo)
es.off('bar', logBar)

es.emit('foo', 'go')
es.emit('bar', { a: 1, b: 2, c: 3 })
