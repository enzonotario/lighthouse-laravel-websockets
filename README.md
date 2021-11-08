# Lighthouse - LaravelWebsockets integration example

1. Run `composert install`
2. Edit your `.env` and set variables like:
```
PUSHER_APP_ID=test
PUSHER_APP_KEY=c6f11bf7ef7a4a283091
PUSHER_APP_SECRET=test
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

LIGHTHOUSE_CACHE_ENABLE=false
LIGHTHOUSE_QUEUE_BROADCASTS=false
LIGHTHOUSE_SUBSCRIPTION_STORAGE=file

```
3. Run `php artisan serve` and `php artisan websockets:serve`
4. Try it on http://localhost:8000
