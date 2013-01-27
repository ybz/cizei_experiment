window.onload = function() {
    window.exp.initCanvas();
    var ctx = exp.ctx;
    exp.draw_funcs.image1(ctx);
};

window.exp = {
    initCanvas : function() {
        if (this.ctx) { return }
        var canvas = document.getElementById('main_canvas');
        this.ctx = canvas.getContext('2d');
    },
    draw_funcs : {
        "image1" : function(ctx) {
            var img = new Image();
            img.src = '/static/canvas/img/book.jpg';
            img.onload = function() {
                ctx.drawImage(img, 40, 40);
            };
        }
    }
}
