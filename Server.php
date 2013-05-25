<?php

class Server {

    var $db;
    var $numOfUsers;
    var $users = array();
    var $currentWord;
    var $currentAdmin;

    function __construct($name) {
        $this->db = fopen('./db/db', 'r');
        $this->numOfUsers = fgets($this->db);
        if ($this->numOfUsers === '0') {
            $this->currentAdmin = $name;
        }
        $this->users[$this->numOfUsers] = $name;
        $this->numOfUsers++;
        $this->currentAdmin = 0;
    }

}