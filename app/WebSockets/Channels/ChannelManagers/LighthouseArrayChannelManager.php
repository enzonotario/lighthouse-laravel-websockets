<?php

namespace App\WebSockets\Channels\ChannelManagers;

use App\WebSockets\Channels\PrivateLighthouseChannel;
use BeyondCode\LaravelWebSockets\WebSockets\Channels\ChannelManagers\ArrayChannelManager;
use Illuminate\Support\Str;

class LighthouseArrayChannelManager extends ArrayChannelManager
{
    protected function determineChannelClass(string $channelName): string
    {
        if (Str::startsWith($channelName, 'private-lighthouse-')) {
            return PrivateLighthouseChannel::class;
        }

        return parent::determineChannelClass($channelName);
    }
}
