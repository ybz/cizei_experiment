window.onload = function() {
    window.exp.initCanvas();
    var ctx = exp.ctx;
    exp.draw_funcs.image_scale(ctx);
};

window.exp = {
    initCanvas : function() {
        if (this.ctx) { return }
        var canvas = document.getElementById('main_canvas');
        this.ctx = canvas.getContext('2d');
    },
    draw_funcs : {
        "image_scale" : function(ctx) {
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
        }
    }
}
