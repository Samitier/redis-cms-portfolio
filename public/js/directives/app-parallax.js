module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            pimage:'@',
            pheight:'@'
        },
        link:function(scope, elem) {
            $('.parallax-container').css("height", scope.pheight);
            $(document).ready(function(){
                $('.parallax').parallax();
            });
        },
        template: "<div class='parallax-container'><div class='parallax'><img ng-src='/img/{{pimage}}'></div></div>"
    };
}