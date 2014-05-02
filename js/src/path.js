var Ticket = require('./ticket.js');

var pathInterface = {
	'addTicket': function(){},

	'getOrigin': function(){},
	'getDestination': function(){},
	'getNumberOfSteps': function(){}
}

var Path = function(){
	this.steps = [];
};

Path.prototype = Object.create(pathInterface);

Path.prototype.addTicket = function(ticket) {
	if (!(ticket instanceof Ticket)) {
		throw new Error('Only instances of Ticket are allowed');
	}
	this.steps.push(ticket);
};

Path.prototype.getOrigin = function() {
	return this.steps[0].getOrigin();
};

Path.prototype.getDestination = function() {
	return this.steps[this.steps.length-1].getDestination();
};

Path.prototype.getNumberOfSteps = function() {
	return this.steps.length;
};

module.exports = Path;