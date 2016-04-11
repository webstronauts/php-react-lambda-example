# PHP React Lambda Example

Example of rendering a React component in PHP through a Lambda function.

## Quick Installation

You can install the example through [Composer](http://getcomposer.org/) and [NPM](https://www.npmjs.com/):

```bash
$ git checkout https://github.com/webstronauts/php-react-lambda-example.git
$ cd php-react-lambda-example
$ composer install
$ npm install
```

Then package and deploy the React code to [AWS Lambda](https://aws.amazon.com/lambda/):

```bash
$ npm run deploy
```

Now run the PHP application with the following command:

```bash
$ composer run
```

The above installation steps all assume that you have [setup an AWS credentials file in your HOME directory](http://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/credentials.html#credential-profiles).

## License

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
