 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (directives) {
    'use strict';
    directives.directive('hoverAnimation', ['$timeout','$window', function ($timeout,$window) {
        return {
            restrict: 'A', 
            scope: {
                color: '@color' 
            },
            link: function (scope,element) {
                scope.resize = function () {
                    var w = angular.element($window);
                    w.bind('resize', function () {
                        var activeLink = angular.element(document.querySelector('li.current'));
                        activeLink.trigger('mouseenter');
                    });
                };
                $timeout(function () {
                    var positionX,
                        newWidth,
                        activeLink = angular.element(document.querySelector('li.current')), 
                        animationLine = angular.element(document.querySelector('li.animation-line'));
                    activeLink.trigger('mouseenter');
                    animationLine.fadeIn('slow', function () {
                        animationLine
                            .css('width',activeLink.width()+'px')
                            .css('left',activeLink.position().left);
                    });
                    element.on('mouseenter', function () {
                        var elem = $(this);
                        positionX = elem.position().left;
                        newWidth = elem.width();
                        animationLine
                            .css('border','1px solid #000')
                            .css('background-color',scope.color)
                            .data('origColor',scope.color);
                        animationLine.stop().animate({
                            left: positionX,
                            width: newWidth
                        }, 600);
                    });
                    element.on('mouseleave', function () {
                        animationLine.stop().animate({
                            left: activeLink.position().left,
                            width: activeLink.width(),
                            backgroundColor:  animationLine.data('origColor')
                        }, 600);
                    });
                },50);
                scope.resize();
            }
        };
    }]);
 });