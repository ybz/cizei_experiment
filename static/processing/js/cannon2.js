window.onload = function() {
    var canvas = document.getElementById('main_canvas');
    var processingInstance = new Processing(canvas);
    window.p = processingInstance;

    var CANVAS_WIDTH = 500;
    var CANVAS_HEIGHT = 500;
    var CANNON_RADIUS = 15;
    var CANNON_BASE_X = CANVAS_WIDTH / 2 - CANNON_RADIUS
    var CANNON_BASE_Y = CANVAS_HEIGHT
    var CANNON_GUN_LENGTH = CANNON_RADIUS + 10

    function drawGun(deg_angle) {
        var x = CANNON_BASE_X + p.cos(p.radians(deg_angle)) * CANNON_GUN_LENGTH
        var y = CANNON_BASE_Y - p.sin(p.radians(deg_angle)) * CANNON_GUN_LENGTH
        p.stroke(255);
        p.strokeWeight(3);
        p.line(CANNON_BASE_X, CANNON_BASE_Y, x, y);
    };
    
    function drawCannon() {
        var gun_angle = 30;
        drawGun(gun_angle);
        p.fill(150);
        p.stroke(255);
        p.strokeWeight(1);
        p.arc(CANNON_BASE_X, CANNON_BASE_Y, CANNON_RADIUS*2, CANNON_RADIUS*2, p.PI, 2*p.PI);
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

