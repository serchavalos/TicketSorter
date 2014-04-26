<?php

namespace TicketSorter;

use TicketSorter\Ticket,
	TicketSorter\PathException;

class Path
{
	private $tickets;

	public function __construct(){}

	public function add(Ticket $ticket)
	{
		if (count($this->tickets) == 0)
		{
			$this->tickets = array($ticket);
		}
		else
		{
			if ($this->getDestination() === $ticket->getOrigin())
			{
				array_push($this->tickets, $ticket);
			}
			else if ($this->getOrigin() === $ticket->getOrigin())
			{
				array_unshift($this->tickets, $ticket);
			}
			else
			{
				throw new PathException('Invalid Ticket');
			}
		}
	}

	public function getOrigin()
	{
		return $this->tickets[0]->getOrigin();
	}

	public function getDestination()
	{
		return $this->tickets[count($this->tickets)-1]->getDestination();
	}

	public function getNumberOfStops()
	{
		return count($this->tickets);
	}
}