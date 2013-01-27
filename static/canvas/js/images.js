window.onload = function() {
    window.exp.initCanvas();
    var ctx = exp.ctx;
    exp.draw_funcs.slice(ctx);
};

window.exp = {
    initCanvas : function() {
        if (this.ctx) { return }
        var canvas = document.getElementById('main_canvas');
        this.ctx = canvas.getContext('2d');
    },
    draw_funcs : {
        "scale" : function(ctx) {
            var frames = 0;
            var scale = 1;
            var interval;
            var draw = function() {
                console.log(interval);
                if (frames>100) {clearInterval(interval)};
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
                scale *= 0.99;
                frames++;
            };
            var img = new Image();
            img.src = '/static/canvas/img/book.jpg';
            img.onload = function() {
                interval = setInterval(draw, 20);
            };
        },
        "slice" : function(ctx) {
            var duration = 2000;
            var frames = 0;
            var scale = 1;
            var interval;
            var source_x = 0;
            var source_y = 0;
            var vx = 2.4;
            var vy = 1.6;
            var window_width = 200;
            var window_height = 160;
            var target_x = (ctx.canvas.width - window_width) / 2;
            var target_y = (ctx.canvas.height - window_height) / 2;
            var draw = function() {
                if (frames>duration) {clearInterval(interval); console.log(frames); return;}
                frames++;
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img, source_x, source_y, window_width, window_height, target_x, target_y, window_width, window_height);
                source_x += 1 * vx;
                source_y += 1 * vy;
                if ((source_x + window_width >= img.width) || (source_x < 0)) {
                    vx *= -1;
                    vx *= (Math.random() * 0.6) + 0.85;
                    if (vx > 20) { vx *= (Math.random() * 0.8) + 0.1}
                    console.log("vx ", vx);
                }
                if ((source_y + window_height >= img.height) || (source_y < 0)) {
                    vy *= -1;
                    vy *= (Math.random() * 0.6) + 0.85;
                    if (vy > 20) { vy *= (Math.random() * 0.8) + 0.1}
                    console.log("vy ", vy);
                }
                if (source_x + window_width > img.width) { source_x = img.width-window_width-1}
                if (source_y + window_height > img.height) { source_y = img.height-window_height-1}
                if (source_x < 0) { source_x = 0;}
                if (source_y < 0) { source_y = 0;}
            };
            var img = new Image();
            img.src = '/static/canvas/img/book.jpg';
            img.onload = function() {
                interval = setInterval(draw, 20);
            };
        }
    }
}
