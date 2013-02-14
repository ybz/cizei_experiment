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
    var BULLET_SIZE = 3;
    var BULLET_SPEED_PER_FRAME = 10;

    var bullet = null;

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

    function drawBullet() {
        if (!bullet) { return };
        console.log("drawing bullet ", bullet[0], " ", bullet[1]);
        p.fill(150);
        p.stroke(255);
        p.ellipseMode(p.CENTER);
        p.ellipse(bullet[0], bullet[1], BULLET_SIZE, BULLET_SIZE);
    };

    function moveBullet() {
        if (!bullet) { return };
        bullet[0] += bullet[2];
        bullet[1] += bullet[3];
        if (bullet[0] < 0 || bullet[0] > CANVAS_WIDTH || bullet[1] < 0) {
            bullet = null;
        };
    };

    function fire() {
        if (bullet) { return };
        var gun_angle = getGunAngle();
        var bullet_x_speed = BULLET_SPEED_PER_FRAME * p.cos(gun_angle);
        var bullet_y_speed = -1 * BULLET_SPEED_PER_FRAME * p.sin(gun_angle);
        var bullet_x_start = CANNON_BASE_X + CANNON_GUN_LENGTH * p.cos(gun_angle);
        var bullet_y_start = CANNON_BASE_Y - CANNON_GUN_LENGTH * p.sin(gun_angle);
        bullet = [bullet_x_start, bullet_y_start, bullet_x_speed, bullet_y_speed];
    };

    function drawCannon() {
        var gun_angle = getGunAngle();
        drawGun(gun_angle);
        p.fill(150);
        p.stroke(255);
        p.strokeWeight(1);
        p.arc(CANNON_BASE_X, CANNON_BASE_Y, CANNON_RADIUS*2, CANNON_RADIUS*2, p.PI, 2*p.PI);
    };

    p.mouseClicked = function() {
        fire();
    };

    p.setup = function() {
        p.size(CANVAS_WIDTH,CANVAS_HEIGHT);
        p.loop();
    };
    p.draw = function() {
        p.background(0, 50, 100);
        drawCannon();
        if (bullet) {
            drawBullet();
            moveBullet();
        };
    };
    p.setup();
};

