'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];
    var Engine = $famous['famous/core/Engine'];
    var GenericSync = $famous['famous/inputs/GenericSync'];
    var MouseSync = $famous['famous/inputs/MouseSync'];
    var TouchSync = $famous['famous/inputs/TouchSync'];
    var Transform = $famous['famous/core/Transform'];
    var Transitionable = $famous['famous/transitions/Transitionable'];

    $scope.contentViewPos = new Transitionable(0);
    var me = this;


    $scope.toolbarTransform = function(){
        return Transform.behind;
    };


    var menuOpen = false;

    $scope.options = {
      menu: {
        openPosition: 200,
        transition: {
          duration: 300,
          curve: 'easeOut'
        },
        posThreshold: 138,
        velThreshold: 0.75
      }
    };

    GenericSync.register({'mouse': MouseSync, 'touch': TouchSync});
    $scope.sync = new GenericSync(["mouse", "touch"], {direction: GenericSync.DIRECTION_X});
    $scope.eventHandler = new EventHandler();
    Engine.pipe($scope.eventHandler);

    $scope.sync.on('update', function(data){
      $scope.currentPos = $scope.contentViewPos.get();
      $scope.contentViewPos.set(Math.max(0, $scope.currentPos + data.delta));
      //console.log('update');
    });

    $scope.sync.on('end', function(data) {
      var velocity = data.velocity;
      var position = $scope.contentViewPos.get();

      if(position > $scope.options.menu.posThreshold) {


          if(velocity < -$scope.options.menu.velThreshold) {

            hideMenu();


          } else {

            showMenu();
            //this.menuView.animateMenuItems(this.options.menu.openPosition, this.options.menu.openPosition);
          }

      } else {

          if(velocity > $scope.options.menu.velThreshold) {

            showMenu();
            //this.menuView.animateMenuItems(this.options.menu.openPosition, this.options.menu.openPosition);

          } else {

            hideMenu();

          }
      }
    });

    var showMenu = function() {


      $scope.contentViewPos.set($scope.options.menu.openPosition, $scope.options.menu.transition, function(){
        menuOpen = true;
      });

    };

    var hideMenu = function() {

      $scope.contentViewPos.set(0, $scope.options.menu.transition, function() {
        menuOpen = false;
      });


    };

    $scope.toggleMenu = function() {
      if(menuOpen) {
        hideMenu();
      } else {
        showMenu();
      }
    };
});
