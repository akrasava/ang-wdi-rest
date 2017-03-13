# REST Angular 1.x Service

**Important:** this project is not supported.

This is a simple wrapper around Angular 1.x $http service, which enables you to:

- Set up base URL
- Add authorization headers to each request after login

## Usage

    angular.module('demoApp').run([
        'restClient',
      function(
        restClient
      ) {
        restClient.baseUrl = 'http://your-api-server';
      }]);

