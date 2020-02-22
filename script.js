var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var redius = canvas.height / 2;
ctx.translate(redius, redius);
redius = redius * 0.90;
setInterval(drawClock,1000);
// var img = src = "Images/Raton.jpg";
function drawClock() {

    drawFace(ctx, redius);
    drawNumber(ctx, redius);
    drawTime(ctx,redius);
}
function drawFace(ctx, redius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, redius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    //ctx.fillStyle =<img id="scream" width="220" height="277" src="pic_the_scream.jpg" alt="The Scream"></img>;
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, redius * 0.95, 0, 0, redius * 1.05);
    grad.addColorStop(0, '#ad1457');
    grad.addColorStop(0.5, '#37474f');
    grad.addColorStop(1, '#ad1457');
    ctx.strokeStyle = grad;
    ctx.lineWidth = redius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, redius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = src = "#000";

    ctx.fill();
}
function drawNumber(ctx, redius) {
    var ang;
    var number;
    ctx.font = redius * 0.15 + "px times new roman";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (number = 1; number < 13; number++) {
        ang = number * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -redius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(number.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, redius * 0.85);
        ctx.rotate(-ang);
    }

}
function drawTime(ctx,redius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second =now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx,hour,redius*0.5,redius*0.07);
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx,minute,redius*0.8,redius*0.07);
    second=(second*Math.PI/30);
    drawHand(ctx,second,redius*0.9,redius*0.02);
}
function drawHand(ctx,pos,length,width){
    ctx.beginPath();
    ctx.lineWidth=width;
    ctx.lineCap ="round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);
}