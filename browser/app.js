angular.module('app', ['js-data'])
  .config(function(DSProvider){
    DSProvider.defaults.basePath = '/api';
  
  })
  .controller('FooListCtrl', function(FooFactory, $scope){
    FooFactory.findAll()
      .then(function(foos){
        $scope.foos = foos;
      })
      .catch(function(err){
        console.log(err);
      });

    $scope.destroy = function(foo){
      FooFactory.destroy(foo)
        .catch(function(err){
          console.log(err);
        });
    };

    $scope.create = function(foo){
      FooFactory.create($scope.foo, {})
        .then(function(_foo){
          var found = FooFactory.get(_foo.id);
          console.log(found);
          $scope.foo = null;
        })
        .catch(function(err){
          console.log(err);
        });
    };
  })
  .factory('FooFactory', function(DS){
    var Foo = DS.defineResource('foos');
    return Foo;
  });
