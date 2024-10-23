function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); // Make sure it's behind other content
    background(0);
}

function draw() {
    fill(random(255), random(255), random(255));
    noStroke();
    let x = random(windowWidth);
    let y = random(windowHeight);
    ellipse(x, y, 5, 5); // Small retro pixel stars
}
