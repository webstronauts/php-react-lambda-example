<?php

$filename = __DIR__.'/../dist/'.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

require_once __DIR__.'/../vendor/autoload.php';

use Aws\Lambda\LambdaClient;
use Silex\Application;

$app = new Application();
$app['debug'] = true;

$app->get('/', function () use ($app) {
    $client = LambdaClient::factory([
        'version' => 'latest',
        'region'  => 'eu-west-1',
    ]);

    $payload = json_encode(['name' => 'Server']);

    $result = $client->invoke([
        'FunctionName' => 'php-react-lamda-example',
        'Payload' => $payload,
    ]);

    $markup = json_decode((string) $result->get('Payload'));

    return <<<EOF
<html>
    <head>
        <meta charset="utf-8">
        <title>php-react-lamda-example</title>
    </head>
    <body>
        <div id="root">$markup</div>
        <script>
            window.__INITIAL_PAYLOAD__ = $payload;
        </script>
        <script src="/bundle.js"></script>
    <body>
</html>
EOF;
});

$app->run();
