'use strict';

angular.module('famousAngularStarter')
  .factory('Treefort', function ($http) {
    return {
      getArtists: function() {
        return $http.get('http://philbot5000.github.io/famous-angular-menu/scripts/services/TMF14.json');
      }
    };
  });
