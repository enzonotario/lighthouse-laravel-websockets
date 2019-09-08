<?php

namespace App\WebSockets;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Nuwave\Lighthouse\Subscriptions\Contracts\StoresSubscriptions as Storage;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;

class WebSocketHandler extends \BeyondCode\LaravelWebSockets\WebSockets\WebSocketHandler
{
    public function onMessage(ConnectionInterface $connection, MessageInterface $message)
    {
        if ($message->getPayload()) {
            $payload = json_decode($message->getPayload(), true);

            $eventName = Str::camel(Str::after(Arr::get($payload, 'event'), ':'));

            if ($eventName === 'unsubscribe') {
                $storage = app(Storage::class);

                $storage->deleteSubscriber(
                    Arr::get($payload, 'data.channel')
                );
            }
        }

        parent::onMessage($connection, $message);
    }
}
