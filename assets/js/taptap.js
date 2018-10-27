var keyData = {
  q: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/bubbles.mp3"]
    }),
    color: "#1abc9c"
  },
  w: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/clay.mp3"]
    }),
    color: "#2ecc71"
  },
  e: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/confetti.mp3"]
    }),
    color: "#3498db"
  },
  r: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/corona.mp3"]
    }),
    color: "#9b59b6"
  },
  t: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/dotted-spiral.mp3"]
    }),
    color: "#34495e"
  },
  y: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/flash-1.mp3"]
    }),
    color: "#16a085"
  },
  u: {
    shape: "circle",
    sound: new Howl({
      src: ["assets/sounds/flash-2.mp3"]
    }),
    color: "#27ae60"
  },
  i: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/flash-3.mp3"]
    }),
    color: "#2980b9"
  },
  o: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/glimmer.mp3"]
    }),
    color: "#8e44ad"
  },
  p: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/moon.mp3"]
    }),
    color: "#2c3e50"
  },
  a: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/pinwheel.mp3"]
    }),
    color: "#f1c40f"
  },
  s: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/piston-1.mp3"]
    }),
    color: "#e67e22"
  },
  d: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/piston-2.mp3"]
    }),
    color: "#e74c3c"
  },
  f: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/prism-1.mp3"]
    }),
    color: "#95a5a6"
  },
  g: {
    shape: "square",
    sound: new Howl({
      src: ["assets/sounds/prism-2.mp3"]
    }),
    color: "#f39c12"
  },
  h: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/prism-3.mp3"]
    }),
    color: "#d35400"
  },
  j: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/splits.mp3"]
    }),
    color: "#1abc9c"
  },
  k: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/squiggle.mp3"]
    }),
    color: "#2ecc71"
  },
  l: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/strike.mp3"]
    }),
    color: "#3498db"
  },
  z: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/suspension.mp3"]
    }),
    color: "#9b59b6"
  },
  x: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/timer.mp3"]
    }),
    color: "#34495e"
  },
  c: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/ufo.mp3"]
    }),
    color: "#16a085"
  },
  v: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/veil.mp3"]
    }),
    color: "#27ae60"
  },
  b: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/wipe.mp3"]
    }),
    color: "#2980b9"
  },
  n: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/zig-zag.mp3"]
    }),
    color: "#8e44ad"
  },
  m: {
    shape: "line",
    sound: new Howl({
      src: ["assets/sounds/moon.mp3"]
    }),
    color: "#2c3e50"
  }
};

var circles = [];

function onKeyDown(event) {
  if (keyData[event.key].shape === "square") {
    console.log(keyData[event.key]);
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = maxPoint * Point.random();
    var almostRectangle = new Rectangle(
      new Point(point, point),
      new Point(point + 500, point + 500)
    );
    var newRectangle = new Path.Rectangle(almostRectangle);
    newRectangle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();

    circles.push(newRectangle);
  } else if (keyData[event.key].shape === "circle") {
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = maxPoint * Point.random();
    var newCircle = new Path.Circle(new Point(point, point), 500);
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();

    circles.push(newCircle);
  } else if (keyData[event.key].shape === "line") {
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = maxPoint * Point.random();
    var newTriangle = new Path.RegularPolygon(new Point(point, point), 3, 200);
    newTriangle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();

    circles.push(newTriangle);
  }
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
    if (circles[i].area < 1) {
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
    }
  }
}
