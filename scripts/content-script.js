(function() {
    function addJQuery(callback) {
        var script = document.createElement("script");
        script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
        script.addEventListener('load', function() {
            var script = document.createElement("script");
            script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
            document.body.appendChild(script);
        }, false);
        document.body.appendChild(script);
    }

    function main() {
        jQ(document).on('mouseover', 'input,a', function() {
            jQ(this).blur();
            var x = jQ(this).offset().left;
            var y = jQ(this).offset().top;
            var xmax = jQ(document).width();
            var ymax = jQ(document).height();
            var dx = Math.random() * 300 + 100;
            var dy = Math.random() * 500 + 50;
            if (Math.random() > 0.5)
                dx *= -1;
            if (Math.random() > 0.5)
                dy *= -1;
            if (x + dx < 0 || x + dx > xmax)
                dx *= -1;
            if (y + dy < 0 || y + dy > ymax)
                dy *= -1;

            jQ(this).offset({left: x, top: y}).animate({
                left: parseInt(dx, 10),
                top: parseInt(dy, 10)
            });
        });
    }

    addJQuery(main);
    console.log('Shy inputs script injected');
})();