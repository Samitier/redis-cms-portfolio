module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            pimage:'@',
            pheight:'@'
        },
        link:function(scope, elem) {
            $('.parallax-container').css("height", scope.pheight);

        },
        template: "<div class='parallax-container'><div><img ng-src='/img/{{pimage}}'></div></div>"
    };
}