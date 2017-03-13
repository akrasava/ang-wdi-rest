# REST Angular 1.x Service

**Important:** this project is not supported.

This is a simple wrapper around Angular 1.x $http service, which enables you to:

- Set up base URL
- Add authorization headers to each request after login

## Usage

Setup base URL when app initializes:

    angular.module('demoApp').run([
        'restClient',
      function(
        restClient
      ) {
        restClient.baseUrl = 'http://your-api-server';
      }]);

Replace `'http://your-api-server' with proper URL.

### Authorization Headers

You can set and remove Authorization headers with following methods:

    restClient.setAuthHeader('app-jwt-token');
    estClient.removeAuthHeader();

Once loged in, execute `setAuthHeader()` method:

    restClient.setAuthHeader('app-jwt-token');

This will add following header to each `http` request:

    Authorization: Bearer your-jwt-token

where `your-jwt-token` is an authorization JWT token returned by your API server.

When logged out, execute `removeAuthHeader()`.


### Methods

REST client gives you following HTTP methods:

    restClient.get(request)
    restClient.post(request)
    restClient.put(request)
    restClient.delete(request)

`request` is an object with following structure:

    {
      path: 'path'
      request: { Your request object } 
    }

where:

* **path** - REST path (i.g. `/user/login`)
* *request* (optional) - JSON object to be passed to server

### Results

Each REST method returns Promise object, which passes data without any manipulations.