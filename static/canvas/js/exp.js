console.log("-- exp loaded --");

window.onload = function() {
    window.exp.initCanvas();
    var ctx = exp.ctx;
    exp.draw_funcs[0](ctx);
    exp.draw_funcs[1](ctx);
};

window.exp = {
    initCanvas : function() {
        if (this.ctx) { return }
        var canvas = document.getElementById('main_canvas');
        this.ctx = canvas.getContext('2d');
    },
    draw_funcs : [
        function(ctx) {
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 55, 50);

            ctx.fillStyle = "rgba(0, 90, 0, 0.3)";
            ctx.fillRect(280, 120, 55, 50);

            ctx.fillStyle = "rgba(210, 200, 0, 0.8)";
            ctx.fillRect(310, 140, 55, 50);
        },
        function(ctx) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        }
    ]
}
