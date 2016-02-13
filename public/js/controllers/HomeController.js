module.exports= function(BlogAPI, $rootScope, $scope) {

    this.init = function() {
        BlogAPI.getPage("home").then(function(dat) {
            $rootScope.pageTitle = dat.data.title;
            $rootScope.pageDescription = dat.data.metaDescription;
            $scope.page = dat.data;
        });

        var temp = "<div class='cell' style='background-color:red; width:{width}px; height: {height}px; background-size: cover; background-image: url(/img/{index}.jpg)'></div>";
        var w = 300, h = 300, html = '', limitItem = 49;
        for (var i = 0; i < limitItem; ++i) {
            html += temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w).replace("{index}", i%8);
        }
        $("#freewall").html(html);

        var wall = new Freewall("#freewall");
        wall.reset({
            selector: '.cell',
            animate: true,
            cellW: 200,
            cellH: 200,
            gutterY: 0,
            gutterX: 0,
            onResize: function() {
                wall.refresh();
            }
        });
        wall.fitWidth();
        // for scroll bar appear;
        $(window).trigger("resize");

    }
    this.init();
}