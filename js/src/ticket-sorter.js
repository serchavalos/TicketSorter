var Ticket = require('./ticket.js');
var Path = require('./path.js');

var sorterInterface = {
	'findPath': function(){}
};

var TicketSorter = function(tickets) {
	var self = this;
	self.tickets = {};

	tickets.forEach(function(ticket) {
		if(ticket instanceof Ticket) {
			self.tickets[ticket.getOrigin()] = ticket;
		}
	});
};

TicketSorter.prototype = Object.create(sorterInterface);

TicketSorter.prototype.findPath = function() {
	var self = this;
	var path = null;
	var paths = [];
	var current = null;
	var uniqueCities = this._getUniqueCities();

	uniqueCities.forEach(function(city) {
		path = new Path();

		while (typeof self.tickets[city] != 'undefined') {
			current = self.tickets[city];
			path.addTicket(current);
			city = current.getDestination();
		}

		paths.push(path);
	});

	return this._getRealPathFrom(paths);
};

TicketSorter.prototype._getUniqueCities = function() {
	var index = null;
	var current = null;
	var uniqueCities = [];

	for(city in this.tickets) {
		if (this.tickets.hasOwnProperty(city)) {
			current = this.tickets[city];
			[city, current.getDestination()].forEach(function(location) {

				if ((index = uniqueCities.indexOf(location)) > -1) {
					uniqueCities.splice(index, 1);
				} else {
					uniqueCities.push(location);
				}

			});
		}
	}

	return uniqueCities;
};

TicketSorter.prototype._getRealPathFrom = function(paths) {
	var finalPaths = [];

	paths.forEach(function(path, i) {
		if (path.getNumberOfSteps() > 2) {
			finalPaths.push(path);
		}
	});

	return finalPaths[0];
};

module.exports = TicketSorter;