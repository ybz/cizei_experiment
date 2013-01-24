console.log("-- exp loaded --");

window.onload = function() {
    window.exp.initCanvas();
    var ctx = exp.ctx;
    exp.draw_funcs.arc_2(ctx);
};

window.exp = {
    initCanvas : function() {
        if (this.ctx) { return }
        var canvas = document.getElementById('main_canvas');
        this.ctx = canvas.getContext('2d');
    },
    draw_funcs : {
        "rects_1" : function(ctx) {
            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 55, 50);

            ctx.fillStyle = "rgba(0, 90, 0, 0.3)";
            ctx.fillRect(280, 120, 55, 50);

            ctx.fillStyle = "rgba(210, 200, 0, 0.8)";
            ctx.fillRect(310, 140, 55, 50);
        },
        "rects_2" : function(ctx) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        },
        "path_1" : function(ctx) {
            ctx.beginPath();
            ctx.moveTo(75,50);
            ctx.lineTo(100,75);
            ctx.lineTo(100,25);
            ctx.moveTo(80,80);
            ctx.lineTo(80,100);
            ctx.lineTo(100,100);
            ctx.lineTo(100,80);
            ctx.fill();
        },
        "path_smiley" : function(ctx) {
            ctx.beginPath();
            ctx.arc(75,75,50,0,Math.PI*2, true);
            ctx.moveTo(110, 75);
            ctx.arc(75,75,35,0,Math.PI, false);
            ctx.moveTo(65,65);
            ctx.arc(60,65,5,0,Math.PI*2, true);
            ctx.moveTo(95,65);
            ctx.arc(90,65,5,0,Math.PI*2, true);
            ctx.stroke();
        },
        "line_1" : function(ctx) {
            ctx.moveTo(110,100);
            ctx.lineTo(200,220);
            ctx.lineTo(210,130);
            ctx.closePath();
            ctx.stroke();
        },
        "arc_1" : function(ctx) {
            ctx.beginPath();
            ctx.moveTo(20,10);
            ctx.arc(100, 100, 20, 0, 4.5, false);
            ctx.stroke();
        },
        "arc_2" : function(ctx) {
            var x, y, radius,
                startAngle, endAngle, anticlockwise;
            for (var i=0; i<4; i++) {
                for (var j=0; j<3; j++) {
                    ctx.beginPath();
                    x             = 25 + j*50;
                    y             = 25 + i * 50;
                    radius        = 20;
                    startAngle    = 0;
                    endAngle      = Math.PI+(Math.PI*j)/2;
                    anticlockwise = i%2==0 ? false : true;

                    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                    if (i>1) {
                        ctx.fill();
                    } else {
                        ctx.stroke();
                    }
                }
            }
        }
    }
}
