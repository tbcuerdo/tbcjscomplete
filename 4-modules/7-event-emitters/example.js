const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

setImmediate(() => {
    myEmitter.emit('myEvent');
    myEmitter.emit('myEvent', ['a', 'b', 'c']);
});

myEmitter.on('myEvent', args => {
    if (!!args){
        console.log('args: %s', args);
    } else {
        console.log("Hello!!!")
    }
    
});
