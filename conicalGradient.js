$(function(){

    var canvas=document.getElementById("skillsBar70");
    var ctx=canvas.getContext("2d");
    var percent=0.7;

    function drawMultiRadiantCircle(xc, yc, r, radientColors, percent, ctx) {
        var partLength = (2*percent* Math.PI) / (radientColors.length-1);
        var start = Math.PI/2;;
        var gradient = null;
        var startColor = null,
            endColor = null;

        for (var i = 0; i < radientColors.length-1; i++) {
            startColor = radientColors[i];
            endColor = radientColors[(i + 1) % radientColors.length];

            // x start / end of the next arc to draw
            var xStart = xc + Math.cos(start) * r;
            var xEnd = xc + Math.cos(start + partLength) * r;
            // y start / end of the next arc to draw
            var yStart = yc + Math.sin(start) * r;
            var yEnd = yc + Math.sin(start + partLength) * r;

            ctx.beginPath();

            gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1.0, endColor);

            ctx.strokeStyle = gradient;
            ctx.arc(xc, yc, r, start, start + partLength);
            ctx.lineWidth = 5.5;
            ctx.stroke();
            ctx.closePath();

            start += partLength;
        }
            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(xc, yc, 5, 0, 7);
            ctx.fill();
            ctx.closePath();
            ctx.closePath();
    }

    var someColors = [];
    someColors.push('#802774');
    someColors.push('#dc071d');
                                 
    var skillsBar70=document.getElementById("skillsBar70");
    skillsBar70.width  = 80;
    skillsBar70.height = 80;
    var ctx70=skillsBar70.getContext("2d");
    drawMultiRadiantCircle(40, 40, 37.5, someColors, .7, ctx70);

    var skillsBar90=document.getElementById("skillsBar90");
    var ctx90=skillsBar90.getContext("2d");
    skillsBar90.width  = 80;
    skillsBar90.height = 80;
    drawMultiRadiantCircle(40, 40, 37.5, someColors, .9, ctx90);

    var skillsBar60=document.getElementById("skillsBar60");
    skillsBar60.width  = 80;
    skillsBar60.height = 80;
    var ctx60=skillsBar60.getContext("2d");
    drawMultiRadiantCircle(40, 40, 37.5, someColors, 0.6, ctx60);

    var skillsBar40=document.getElementById("skillsBar40");
    skillsBar40.width  = 80;
    skillsBar40.height = 80;
    var ctx40=skillsBar40.getContext("2d");
    drawMultiRadiantCircle(40, 40, 37.5, someColors, 0.4, ctx40);

});