<?php

use Tuenti\Ticket;

class TicketTest extends PHPUnit_Framework_TestCase
{

	const ORIGIN = 'MADRID';
	const DESTINATION = 'BARCELONA';

	protected $ticket;

	public function setup()
	{
		$this->ticket = new Ticket(self::ORIGIN, self::DESTINATION);
	}

	public function testInstance()
	{
		$this->assertInstanceOf('Tuenti\Ticket', $this->ticket);
		$this->assertEquals(self::ORIGIN, $this->ticket->getOrigin());
		$this->assertEquals(self::DESTINATION, $this->ticket->getDestination());
	}
}