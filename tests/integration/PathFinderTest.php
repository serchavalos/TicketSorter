<?php

use TicketSorter\Ticket,
	TicketSorter\Path,
	TicketSorter\PathFinder;

class PathFinderTest extends PHPUnit_Framework_TestCase
{

	public function testWithOrderedTickets()
	{
		$tickets = array(
			new Ticket(1, 2),
			new Ticket(2, 3),
			new Ticket(3, 4),
			new Ticket(4, 5)
		);
		$pathFinder = new PathFinder($tickets);
		list($path) = $pathFinder->findPaths();

		$this->assertEquals($path->getOrigin(), 1);
		$this->assertEquals($path->getDestination(), 5);
		$this->assertEquals($path->getNumberOfStops(), 4);

	}

	public function testWithDisorderedTickets()
	{
		$tickets = array(
			new Ticket(1, 2),
			new Ticket(4, 5),
			new Ticket(3, 4),
			new Ticket(2, 3),
		);
		$pathFinder = new PathFinder($tickets);
		list($path) = $pathFinder->findPaths();

		$this->assertEquals($path->getOrigin(), 1);
		$this->assertEquals($path->getDestination(), 5);
		$this->assertEquals($path->getNumberOfStops(), 4);

	}


	public function testWithMultiplePaths()
	{
		$tickets = array(
			new Ticket(3, 4),
			new Ticket(1, 2),
			new Ticket(32, 33),
			new Ticket(4, 5),
			new Ticket(2, 3),
			new Ticket(12, 13),
			new Ticket(13, 14),
			new Ticket(33, 34),
			new Ticket(11, 12),
			new Ticket(14, 15),
		);
		$pathFinder = new PathFinder($tickets);
		list($path1s, $path30s, $path10s) = $pathFinder->findPaths();

		$this->assertEquals($path1s->getOrigin(), 1);
		$this->assertEquals($path1s->getDestination(), 5);
		$this->assertEquals($path1s->getNumberOfStops(), 4);

		$this->assertEquals($path30s->getOrigin(), 32);
		$this->assertEquals($path30s->getDestination(), 34);
		$this->assertEquals($path30s->getNumberOfStops(), 2);

		$this->assertEquals($path10s->getOrigin(), 11);
		$this->assertEquals($path10s->getDestination(), 15);
		$this->assertEquals($path10s->getNumberOfStops(), 4);
	}

}