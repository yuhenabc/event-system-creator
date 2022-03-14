import EventSystemCreator from './src/event-system-creator.js';

const es = new EventSystemCreator();
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
console.log(es);
es.emit('foo', 'bar');
es.emit('bar', { a: 1, b: 2, c: 3 });
