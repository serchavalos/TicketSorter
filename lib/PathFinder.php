<?php

namespace TicketSorter;

use TicketSorter\Path,
	TicketSorter\PathException;

class PathFinder
{
	private $cities;
	private $unorderTickets;

	public function __construct($tickets)
	{
		$this->cities = array();

		foreach($tickets as $ticket)
		{
			$origin = $ticket->getOrigin();
			$destination = $ticket->getDestination();

			$this->addCity($origin);
			$this->addCity($destination);

			$this->unorderTickets[$origin] = $ticket;
		}
	}

	public function findPaths()
	{
		$paths = array();
		foreach($this->cities as $city)
		{
			if ($this->isOriginCity($city) && isset($this->unorderTickets[$city]))
			{
				$paths[] = $this->buildPath($city);
				if (0 === count($this->unorderTickets))
				{
					break;
				}
			}
		}
		return $paths;
	}

	public function buildPath($start)
	{

		$path = new Path();
		do {

			try {

				$path->add($this->unorderTickets[$start]);
				unset($this->unorderTickets[$start]);
				reset($this->unorderTickets);

			} catch(PathException $ex) {
				next($this->unorderTickets);
			}

			$start = key($this->unorderTickets);

		} while (count($this->unorderTickets) > 0 && $start && isset($this->unorderTickets[$start]));
		return $path;
	}

	private function isOriginCity($city)
	{
		return isset($this->unorderTickets[$city]);
	}

	public function addCity($city)
	{
		$position = array_search($city, $this->cities);
		if (false !== $position)
		{
			array_splice($this->cities, $position, 1);
		}
		else
		{
			$this->cities[] = $city;
		}
	}
}