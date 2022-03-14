import EventSystem from './src/event-system.js';

const es = new EventSystem();
console.log(es);

const logFoo = (data) => {
    console.log('foo', data);
};

const logBar = (data) => {
    console.log('bar', data);
};

es.on('foo', logFoo);
es.on('bar', logBar);

es.emit('foo', 'go');
es.emit('bar', { a: 1, b: 2, c: 3 });

console.log('==================');

es.off('foo', logFoo);
es.off('foo');
es.emit('foo', 'bar');
es.emit('bar', { a: 1, b: 2, c: 3 });
