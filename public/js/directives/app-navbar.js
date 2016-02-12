module.exports = function() {
    return {
        restrict: 'A',
        link:function(scope, elem) {
            $(".button-collapse").sideNav();
        },
        templateUrl:'partials/directives/app-header.html'
    };
}