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

    function drawGun(rad_angle) {
        var x = CANNON_BASE_X + p.cos(rad_angle) * CANNON_GUN_LENGTH
        var y = CANNON_BASE_Y - p.sin(rad_angle) * CANNON_GUN_LENGTH
        p.stroke(255);
        p.strokeWeight(3);
        p.line(CANNON_BASE_X, CANNON_BASE_Y, x, y);
    };

    function getGunAngle() {
        var x_length = p.mouseX - CANNON_BASE_X;
        var y_length = CANNON_BASE_Y - p.mouseY ;
        var ang_rad = p.atan(y_length / x_length);
        if (ang_rad < 0) {
            ang_rad += p.PI;
        };
        return ang_rad;
    };

    function drawCannon() {
        var gun_angle = getGunAngle();
        drawGun(gun_angle);
        p.fill(150);
        p.stroke(255);
        p.strokeWeight(1);
        p.arc(CANNON_BASE_X, CANNON_BASE_Y, CANNON_RADIUS*2, CANNON_RADIUS*2, p.PI, 2*p.PI);
    };

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

