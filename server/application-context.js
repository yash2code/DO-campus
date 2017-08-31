const Emitter = require('events');
const config = require('../config');
const pino = require('pino');

module.exports = class ApplicationContext extends Emitter {

	constructor() {
		super();
		this.config = config;
		this.logger = pino();
	}

};