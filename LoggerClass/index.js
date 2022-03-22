const EventLogger = require('node-windows').EventLogger;

const log = new EventLogger('TestApp');

log.info('Test test test!', 1000)