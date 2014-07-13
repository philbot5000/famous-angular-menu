'use strict';

angular.module('famousAngularStarter')
  .controller('ScrollViewCtrl', function ($scope, $famous, Treefort) {
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.eventHandler = new EventHandler();

    Treefort.getArtists().then(function (response) {
      $scope.list = response.data;
    });

    $scope.options = {
      scrollView: {
        direction: 1
      }
    };
  });
