'use strict';

angular.module('famousAngularStarter')
  .factory('Treefort', function ($http) {
    return {
      getArtists: function() {
        return $http.get('http://www.treefortmusicfest.com/app/TMF14.json');
      }
    };
  });
