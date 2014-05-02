var Ticket = require('../src/ticket.js');
var TicketSorter = require('../src/ticket-sorter.js');
var Path = require('../src/path.js');

describe('Ticket sorter', function () {

    it('should return sortered tickets from an ordered list', function () {
    	var tickets = [
    		new Ticket('MADRID', 'BARCELONA', 'TRAIN'),
    		new Ticket('BARCELONA', 'PARIS', 'CAR'),
    		new Ticket('PARIS', 'BERLIN', 'FLIGHT'),
    		new Ticket('BERLIN', 'GOTLAND', 'BOAT')
    	];

    	var sorter = new TicketSorter(tickets);
    	var path = sorter.findPath();

    	expect(path instanceof Path).toBe(true);
        expect(path.getOrigin()).toEqual('MADRID');
        expect(path.getDestination()).toEqual('GOTLAND');
        expect(path.getNumberOfSteps()).toEqual(4);
    });

    it('should return sortered tickets from an unordered list', function () {
    	var tickets = [
    		new Ticket('BERLIN', 'GOTLAND', 'BOAT'),
    		new Ticket('MADRID', 'BARCELONA', 'TRAIN'),
    		new Ticket('PARIS', 'BERLIN', 'FLIGHT'),
    		new Ticket('BARCELONA', 'PARIS', 'CAR'),
    	];

    	var sorter = new TicketSorter(tickets);
    	var path = sorter.findPath();

    	expect(path instanceof Path).toBe(true);
        expect(path.getOrigin()).toEqual('MADRID');
        expect(path.getDestination()).toEqual('GOTLAND');
        expect(path.getNumberOfSteps()).toEqual(4);
    });


    it('should return sortered tickets even if there are unrelated tickets', function () {
    	var tickets = [
    		new Ticket('BERLIN', 'GOTLAND', 'BOAT'),
    		new Ticket('COLOMBIA', 'CHILE', 'BIKE'),
    		new Ticket('MADRID', 'BARCELONA', 'TRAIN'),
    		new Ticket('MEXICO', 'US', 'DONKEY'),
    		new Ticket('PARIS', 'BERLIN', 'FLIGHT'),
    		new Ticket('BARCELONA', 'PARIS', 'CAR'),
    	];

    	var sorter = new TicketSorter(tickets);
    	var path = sorter.findPath();

    	expect(path instanceof Path).toBe(true);
        expect(path.getOrigin()).toEqual('MADRID');
        expect(path.getDestination()).toEqual('GOTLAND');
        expect(path.getNumberOfSteps()).toEqual(4);
    });
});