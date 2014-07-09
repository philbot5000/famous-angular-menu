"use strict";angular.module("famousAngularStarter",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","famous.angular"]).config(["$stateProvider","$urlRouterProvider",function(a,e){a.state("home",{url:"/",templateUrl:"partials/main.html",controller:"MainCtrl"}).state("test",{url:"/test",templateUrl:"partials/test.html",controller:"MainCtrl"}),e.otherwise("/")}]),angular.module("famousAngularStarter").controller("MainCtrl",["$scope","$famous",function(a,e){var t=e["famous/transitions/Transitionable"],r=e["famous/utilities/Timer"];a.spinner={speed:55},a.rotateY=new t(0),r.every(function(){var e=parseFloat(a.spinner.speed)/1200;a.rotateY.set(a.rotateY.get()+e)},1)}]),function(a){try{a=angular.module("famousAngularStarter")}catch(e){a=angular.module("famousAngularStarter",[])}a.run(["$templateCache",function(a){a.put("partials/jade.html",'<fa-app class="full-screen"><fa-modifier fa-origin="[.5, .5]" fa-rotate-y="rotateY.get()"><fa-surface fa-size="[true, true]" fa-color="\'rgb(255,255,250)\'"><img src="images/famous-logo.svg" style="width: 200px; height: 200px;" class="logo"></fa-surface><fa-modifier fa-rotate-y="3.14159"><fa-surface fa-size="[true, true]" fa-color="\'rgb(255,255,250)\'"><img src="images/famous-logo.svg" style="width: 200px; height: 200px;" class="logo"></fa-surface></fa-modifier></fa-modifier><fa-modifier fa-origin="[.5, .9]" fa-size="[200, 100]"><fa-surface><input style="width: 100%; text-align: center;" type="range" min="10" max="100" ng-model="spinner.speed"></fa-surface></fa-modifier></fa-app>')}])}(),function(a){try{a=angular.module("famousAngularStarter")}catch(e){a=angular.module("famousAngularStarter",[])}a.run(["$templateCache",function(a){a.put("partials/main.html",'<fa-modifier fa-origin="[.5, .5]" fa-rotate-y="rotateY.get()"><fa-surface fa-size="[true, true]" fa-color="\'rgb(255,255,250)\'"><img class="logo" src="images/famous-logo.svg" style="width: 200px; height: 200px;"></fa-surface><fa-modifier fa-rotate-y="3.14159"><fa-surface fa-size="[true, true]" fa-color="\'rgb(255,255,250)\'"><img class="logo" src="images/famous-logo.svg" style="width: 200px; height: 200px;"></fa-surface></fa-modifier></fa-modifier><fa-modifier fa-origin="[.5, .9]" fa-size="[200, 100]"><fa-surface><input style="width: 100%; text-align: center;" type="range" min="10" max="100" ng-model="spinner.speed"></fa-surface></fa-modifier><a href="/test">Test</a>')}])}(),function(a){try{a=angular.module("famousAngularStarter")}catch(e){a=angular.module("famousAngularStarter",[])}a.run(["$templateCache",function(a){a.put("partials/test.html",'<h1>Test</h1><a href="/home">Go Home</a>')}])}();