'use strict';
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name nyuadApp
 * @description
 * # nyuadApp
 *
 * Main module of the application.
 */
var app = angular
  .module('nyuadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function($routeProvider){
  	$routeProvider
  		.when('/',{
  			templateUrl: 'views/messages.html',
  			controller: 'MessagesCtrl'
  		})
  })
  .constant('FIREBASE_URL', 'https://nyuad.firebaseio.com/');;
