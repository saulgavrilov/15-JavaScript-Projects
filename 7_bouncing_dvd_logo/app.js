const logo = document.querySelector("#logo");
const svg = logo.querySelector("svg");

const LOGO_WIDTH = 210;
const LOGO_HEIGHT = 100;

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const state = {
  position: {
    x: window.innerWidth / 2 - logo.clientWidth / 2,
    y: window.innerHeight / 2 - logo.clientHeight / 2,
  },
  velocity: {
    x: 1,
    y: -1,
  },
};

function draw() {
  logo.style.top = state.position.y + "px";
  logo.style.left = state.position.x + "px";
}

function update() {
  state.position.y += state.velocity.y * 4;
  state.position.x += state.velocity.x * 4;
}

function collisionDetection() {
  if (state.position.x + logo.clientWidth >= window.innerWidth) {
    state.velocity.x = -state.velocity.x;
    changeFill();
  } else if (state.position.x <= 0) {
    state.velocity.x = -state.velocity.x;
    changeFill();
  }

  if (state.position.y <= 0) {
    state.velocity.y = -state.velocity.y;
    changeFill();
  } else if (state.position.y + logo.clientHeight >= window.innerHeight) {
    state.velocity.y = -state.velocity.y;
    changeFill();
  }
}

function changeFill() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  svg.style.fill = hexColor;
}

function load() {
  update();
  draw();
  collisionDetection();
  requestAnimationFrame(load);
}

load();
