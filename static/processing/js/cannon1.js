window.onload = function() {
    var canvas = document.getElementById('main_canvas');
    var processingInstance = new Processing(canvas);
    window.p = processingInstance;

    var CANVAS_WIDTH = 500;
    var CANVAS_HEIGHT = 500;
    var CANNON_RADIUS = 15;
    
    function drawCannon() {
        p.fill(150);
        p.stroke(255);
        p.strokeWeight(1);
        p.arc(CANVAS_WIDTH/2, CANVAS_HEIGHT, CANNON_RADIUS*2, CANNON_RADIUS*2, p.PI, 2*p.PI);
    }
    p.setup = function() {
        p.size(CANVAS_WIDTH,CANVAS_HEIGHT);
        p.loop();
    };
    p.draw = function() {
        p.background(0, 50, 100);
        drawCannon();
    };
    p.setup();
};

