'use strict';

angular.module('wdi.restClient', []).factory('restClient', [
    '$q',
    '$http',
  function (
    $q,
    $http
  ) {

    var restClient = {
      baseUrl: ''
    };

    /**
    *  Sends POST request.
    *   
    *  @method post
    *  @memberof restClient
    *  @param  {object} With request path and data
    *  @return {object} Promise object
    */
    restClient.post = function (request) {
      return $http.post(this.baseUrl + request.path, request.req).then(
        function (response) {
          return $q.resolve(response);
        },
        function (response) {
          return $q.reject(response);
        }
      );
    };

    /**
    *  Sends GET request.
    *   
    *  @method get
    *  @memberof restClient
    *  @param  {object} With request path and data
    *  @return {object} Promise object
    */
    restClient.get = function (request) {
      return $http.get(this.baseUrl + request.path).then(
        function (response) {
          return $q.resolve(response);
        },
        function (response) {
          return $q.reject(response);
        }
      );
    };

    /**
    *  Sends PUT request.
    *   
    *  @method put
    *  @memberof restClient
    *  @param  {object} With request path and data
    *  @return {object} Promise object
    */
    restClient.put = function (request) {
      return $http.put(this.baseUrl + request.path, request.req).then(
        function (response) {
          return $q.resolve(response);
        },
        function (response) {
          return $q.reject(response);
        }
      );
    };

    /**
    *  Sends DELETE request.
    *   
    *  @method delete
    *  @memberof restClient
    *  @param  {object} With request path and data
    *  @return {object} Promise object
    */
    restClient.delete = function (request) {
      return $http.delete(this.baseUrl + request.path, request.req).then(
        function (response) {
          return $q.resolve(response);
        },
        function (response) {
          return $q.reject(response);
        }
      );
    };

    return restClient;
  }
]);