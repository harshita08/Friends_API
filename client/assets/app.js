var app = angular.module('myApp', ['ngRoute', 'ngFileUpload']);

app.config(function ($routeProvider) {

   $routeProvider
      .when("/new", {
         templateUrl: "./partials/new.html"
      })
      .when("/edit/:id", {
         templateUrl: "./partials/edit.html"
      })
      .when("/display", {
         templateUrl: "./partials/index2.html"
      })
      .when("/show", {
         templateUrl: "./partials/show.html"
      })
      .when("/show/:id", {
         templateUrl: "./partials/show.html"
      })
      .otherwise({
         redirectTo: "/"
      });
})

app.factory("friendsFactory")