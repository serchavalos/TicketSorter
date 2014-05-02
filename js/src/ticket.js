var ticketInterface = {
	'getOrigin': function(){},
	'getDestination': function(){},
	'getType': function(){}
};

var Ticket = function(origin, destination, type) {
	this.origin = origin;
	this.destination = destination;
	this.type = type;
};

Ticket.prototype = Object.create(ticketInterface);

Ticket.prototype.getOrigin = function () {
	return this.origin;
};

Ticket.prototype.getDestination = function () {
	return this.destination;
};

Ticket.prototype.geType = function () {
	return this.type;
};



module.exports = Ticket;