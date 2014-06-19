/**
 * Created by wesley on 6/18/14.
 */

'use strict';

/**
 * @ngdoc function
 * @name waveWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the waveWebsiteApp
 */
angular.module('waveWebsiteApp')
    .controller('NewsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });