let angle = 0;
let planetexture;
let particles = [];

var textEl;
function preload() {
    planetexture = loadImage('static/imgs/planetTexture.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textEl = createDiv("THE ECOLOGY<br>OF DUNE");
    textEl.style("z-index: 2; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
    button = createButton("ENTER");
    button.position(-2, 20);
    button.id("ENTER");
    document.getElementById("ENTER").addEventListener("click", function () {
        window.location = "secondpage.html";
    })
}


function draw() {
    clear();
    for (let i = 0; i < 5; i++) {
        let p = new Particle(); textEl
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
    rotateY(angle);
    noStroke();
    texture(planetexture);
    sphere(190);
    angle += 0.03;
}

class Particle {
    constructor() {
        this.x = -windowWidth / 2;
        this.y = random(-windowHeight / 2, windowHeight / 2);
        this.vx = random(-5, 5);
        this.vy = random(-5, 5);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.5;
    }

    show() {
        noStroke();
        fill(165, 42, 42, this.alpha);
        ellipse(this.x, this.y, 5);
    }
}


























