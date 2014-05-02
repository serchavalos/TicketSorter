<?php

namespace TicketSorter;

class Ticket
{
	protected $origin;
	protected $destination;

	public function __construct($origin, $destination)
	{
		$this->origin = $origin;
		$this->destination = $destination;
	}

	public function getOrigin()
	{
		return $this->origin;
	}

	public function getDestination()
	{
		return $this->destination;
	}
}