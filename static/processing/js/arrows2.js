window.onload = function() {
    var canvas = document.getElementById('main_canvas');
    var processingInstance = new Processing(canvas);
    window.p = processingInstance;
    var char_x = 40;
    var char_y = 80;

    function drawCharacter(x, y) {
        p.fill(p.__keyPressed ? 100 : 0);
        p.stroke(255);
        p.ellipseMode('CENTER');
        p.ellipse(x, y, 10, 10);
        return
    }
    p.setup = function() {
        p.size(500,500);
        p.loop();
    };
    p.draw = function() {
        p.background(0, 50, 100);
        if (p.__keyPressed && p.key == p.CODED) {
            switch (p.keyCode) {
                case p.RIGHT:
                    console.log('right');
                    char_x += 2;
                    break;
                case p.LEFT:
                    console.log('left');
                    char_x -= 2;
                    break;
                case p.UP:
                    console.log('up');
                    char_y -= 2;
                    break;
                case p.DOWN:
                    console.log('down');
                    char_y += 2;
                    break;
            }
        }
        drawCharacter(char_x, char_y);
    };
    p.setup();
};
