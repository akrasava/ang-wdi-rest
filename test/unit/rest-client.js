'use strict';

describe('REST Client', function () {
  beforeEach(function(){
    module('wdi.restClient');
  });

  var restClient, $httpBackend, $q, $rootScope;

  var data, deferred, promise;

  beforeEach(inject(function(_restClient_, _$httpBackend_, _$q_, _$rootScope_){
    restClient = _restClient_;
    $httpBackend = _$httpBackend_;
    $q =  _$q_;
    $rootScope = _$rootScope_;

    deferred = $q.defer();
    promise = deferred.promise;
  }));

  afterEach (function () {
      $httpBackend.verifyNoOutstandingExpectation ();
      $httpBackend.verifyNoOutstandingRequest ();
  });

  it('initialized', function () {
    expect(restClient).toBeDefined();
  });

  it('correct baseUrl', function () {
    restClient.baseUrl = 'http://localhost:3030/';
    expect(restClient.baseUrl).toBe('http://localhost:3030/');
  });

  it('performs GET request', function () {
    $httpBackend.whenGET('/users').respond({'user': 1});

    promise.then(
      function(resp){
        data = resp.data;
      }
    );

    var getUsers = restClient.get({path:'/users'})
      .then (
        function (res) {
          deferred.resolve(res);
        },
        function (res) {
          console.log('bad');
        }
      );

    $httpBackend.flush();

    expect(data.user).toBe(1);
  });

  it('performs POST request', function () {
    $httpBackend.when('POST', '/users').respond({'user': 1});

    promise.then (
      function(resp) {
        data = resp.data;
      }
    );

    var getUsers = restClient.post ({path:'/users'})
      .then (
        function (res) {
          deferred.resolve(res);
        },
        function (res) {
          console.log('bad');
        }
      );

    $httpBackend.flush();

    expect(data.user).toBe(1);
  });

  it('performs PUT request', function () {
    $httpBackend.when('PUT', '/users').respond({'user': 1});

    promise.then (
      function(resp) {
        data = resp.data;
      }
    );

    var getUsers = restClient.put ({path:'/users'})
      .then (
        function (res) {
          deferred.resolve(res);
        },
        function (res) {
          console.log('bad');
        }
      );

    $httpBackend.flush();

    expect(data.user).toBe(1);
  });

  it('performs DELETE request', function () {
    $httpBackend.when('DELETE', '/users').respond(201, {'user': 1});

    promise.then (
      function(resp) {
        data = resp.data;
      }
    );

    var getUsers = restClient.delete ({path:'/users'})
      .then (
        function (res) {
          deferred.resolve(res);
        },
        function (res) {
          console.log('bad');
        }
      );

    $httpBackend.flush();

    expect(data.user).toBe(1);
  });
});