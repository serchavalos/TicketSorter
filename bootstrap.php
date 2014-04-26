<?php

define ('LIB', __dir__ . '/lib/');

spl_autoload_register(function ($class) {

	if (preg_match('/TicketSorter/', $class)) {
		$class = str_replace('TicketSorter\\', '', $class);
		require LIB . $class . '.php';
	}

});