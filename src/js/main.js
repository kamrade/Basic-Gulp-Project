var sayHello = require('./say-hello');
var consoleDebug = require('./modules/console-debug');

sayHello();
consoleDebug('Me');

var testBabel = () => {
  console.log('test babel');
}
