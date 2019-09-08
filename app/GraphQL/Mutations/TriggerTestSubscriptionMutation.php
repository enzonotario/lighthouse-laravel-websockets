<?php

namespace App\GraphQL\Mutations;

use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Execution\Utils\Subscription;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class TriggerTestSubscriptionMutation
{
    public function resolve($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        Subscription::broadcast('test', rand());
        return true;
    }
}
