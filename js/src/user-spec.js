var Ticket = require('../src/ticket.js');
var Sorter = require('../src/sorter.js');
var Path = require('../src/path.js');

describe('Ticket sorter', function () {
    it('should return sorter tickets from order list', function () {
    	var ticket = [
    		new Ticket('MADRID', 'BARCELONA', 'TRAIN'),
    		new Ticket('BARCELONA', 'PARIS', 'CAR'),
    		new Ticket('PARIS', 'BERLIN', 'FLIGHT'),
    		new Ticket('BERLIN', 'GOTLAND', 'BOAT')
    	];

    	var sorter = new TicketSorter(tickets);
    	var path = sorter.findPath();

        expect(path.getOrigin()).toEqual('MADRID');
        expect(path.getDestination()).toEqual('GOTLAND');
        expect(path.getNumberOfSteps()).toEqual(4);
    });
});