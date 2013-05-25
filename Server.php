<?php

class user {

    var $number;
    var $name;
    var $privileges;

    public function updateStatus();

    private function connectToServer() {
        if (isNewServer()) {
            $server = createNewServer();
        }
    }

    public function newUser($user, $name, $server) {
        $user->number = $server->numOfUsers + 1;
        $user->name = $name;
        if ($server->admin) {
            $user->privileges = 'reader';
        } else {
            $user->privileges = 'speaker';
            $server->admin = true;
        }
        return $user;
    }

    public function currentWord($operation, $word) {
        switch ($operation) {
            case 'update':
                $currentWord = $word;
                return true;
                break;
            case 'where':
                return $currentWord;
                break;
        }
        return false;
    }

}

