<?php

namespace App\WebSockets\Channels\ChannelManagers;

use BeyondCode\LaravelWebSockets\WebSockets\Channels\Channel;
use Illuminate\Support\Arr;
use Nuwave\Lighthouse\Subscriptions\Contracts\StoresSubscriptions as Storage;
use Ratchet\ConnectionInterface;

class ArrayChannelManager extends \BeyondCode\LaravelWebSockets\WebSockets\Channels\ChannelManagers\ArrayChannelManager
{
    public function removeFromAllChannels(ConnectionInterface $connection)
    {
        $storage = app(Storage::class);

        collect(Arr::get($this->channels, $connection->app->id, []))
            ->each(function (Channel $channel, string $channelName) use ($storage) {
                $storage->deleteSubscriber($channelName);
            });

        parent::removeFromAllChannels($connection);
    }
}
