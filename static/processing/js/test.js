console.log("-- processing_js test --");

function sketchProc(p) {
    p.setup = function() {
        p.size(200,200);
    }
    p.draw = function() {
        if (p.__mousePressed) {
            p.background(100);
        } else {
            p.background(0);
        }
    };
}
window.onload = function() {
    var canvas = document.getElementById('main_canvas');
    var processingInstance = new Processing(canvas, sketchProc);
};
