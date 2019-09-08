<?php

namespace App\WebSockets\Server;

use App\WebSockets\WebSocketHandler;
use BeyondCode\LaravelWebSockets\HttpApi\Controllers\FetchChannelController;
use BeyondCode\LaravelWebSockets\HttpApi\Controllers\FetchChannelsController;
use BeyondCode\LaravelWebSockets\HttpApi\Controllers\FetchUsersController;
use BeyondCode\LaravelWebSockets\HttpApi\Controllers\TriggerEventController;

class Router extends \BeyondCode\LaravelWebSockets\Server\Router
{
    public function echo()
    {
        $this->get('/app/{appKey}', WebSocketHandler::class);
        $this->post('/apps/{appId}/events', TriggerEventController::class);
        $this->get('/apps/{appId}/channels', FetchChannelsController::class);
        $this->get('/apps/{appId}/channels/{channelName}', FetchChannelController::class);
        $this->get('/apps/{appId}/channels/{channelName}/users', FetchUsersController::class);
    }
}
