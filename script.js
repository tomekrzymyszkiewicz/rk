const canvas = document.getElementById("sandbox");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, true);

const ctx = canvas.getContext('2d');

var img = new Image();
img.src = "frog.png";
var speed = 6;

function Frog(x, y) {
    this.x = x;
    this.y = y;


    this.dx = Math.floor(Math.random() * speed * 2) + 1;
    this.dx *= Math.floor(Math.random() * speed) == 1 ? 1 : -1;
    this.dy = Math.floor(Math.random() * speed * 2) + 1;
    this.dy *= Math.floor(Math.random() * speed) == 1 ? 1 : -1;

    this.draw = function () {
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y)
        ctx.fill();
    }

    this.animate = function () {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + img.width > canvas.width || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y + img.height > canvas.height || this.y < 0) {
            this.dy = -this.dy;
        }
        this.draw();
    }
}

var currentFrog = new Frog(Math.random() * (canvas.width - img.width) / 2, Math.random() * (canvas.height - img.height) / 2);

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentFrog.animate();
    requestAnimationFrame(Update);
}
Update();



canvas.addEventListener('click', function (event) {

    var mouseX = event.clientX;
    var mouseY = event.clientY;
    if (Math.abs(currentFrog.x + (img.width / 2) - mouseX) < img.width / 2 && Math.abs(currentFrog.y + (img.height / 2) - mouseY) < img.height / 2) {
        console.log("zaba");
        $('#myModal').modal('toggle');
    }
}, false);

