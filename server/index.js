const Koa = require('koa');
const app = new Koa();
const ApplicationContext = require('./application-context');
const applicationContext = new ApplicationContext();

const errorLogger = require('./middleware/error-logger');
const router = require('./router');

app.use(errorLogger(applicationContext));
app.use(router(applicationContext));

module.exports = exports = app;
