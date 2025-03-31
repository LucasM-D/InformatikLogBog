# P5.js

P5.js er et online kode software der kører på javascript. P5.js bringer nogle in-built functions der gør det nemt at bruge. I det følgene går jeg i gennem mine forskellige projekter og en løbende guide til brug af p5.js.

## P5.js cheatsheet

P5.js variabler:
- Boolean: True/False
- String: Tekst, (f.eks. Hello World) ["Hello World
- Integers: Hele tal (f.eks. 3, 12, 56)
- Floats: Decimaltal (f.eks. 3.14, 2.0, -0.5)
- Arrays: En liste af variabler [arrayName = [Variable, variable, variable]

Arrays:

Loops:

Shapes:
- Circle: circle(x, y, diameter);
- Square: square(x1, y1, x2, y2);
- Rectangle: rect(x, y, h, l)

Inputs
- Buttons

Vectors:

## Projects

### Sierpinski triangle
Mit aller første p5.js script skaber en Sierpinski trekant. Generelt fungere scriptet ved at vælge et start punkt af de tre start punkter, vælger et andet tilfældigt punkt og tegner en prik ved koordinatet i midten af de to punkter. Dette gør den forevigt.

<img src="https://github.com/LucasM-D/InformatikLogBog/blob/main/Sierpinski-triangle(example).png" width="300">

```javascript
  let xPos = [100, 200, 300]; // Array der holder alle x positioner af punkterne
  let yPos = [300, 100, 300]; // Array der holder alle y positioner af punkterne
  let ds = 2;
  
  function setup() {
    createCanvas(400, 400);
    frameRate(255);
  }
  
  function draw() {
    let i = Math.floor(Math.random() * xPos.length); 
    // Vælger tilfældigt start punkt
    let j;
    do {
      j = Math.floor(Math.random() * 3); 
      // Vælger tilfældigt destinationspunkt blandt de første tre punkter
    } while (j === i);
  
    let midX = (xPos[i] + xPos[j]) / 2;
    let midY = (yPos[i] + yPos[j]) / 2;
    // Regner midtpunkt af start og distinations punkter
  
    xPos.push(midX);
    yPos.push(midY);
    // Tilføjer midtpunktets koordinater til position arrays
    
    for (let k = 0; k < xPos.length; k++) {
      fill(0);
      noStroke();
      circle(xPos[k], yPos[k], ds);
      // Tegner alle punkter i arrays
    }
  }
```
> Den har to arrays, xPos og yPos. De tre strat punkter er hardcoded ind i arraysne, men man kunne hvis man ville gemme musens position for hver gang man klikker og bruge det som start positioner. Scriptet vælger et tilfældigt punkt ved brug af Math.floor(Math.random() * xPos.length); - man kunne også bruge let i = int(random(0, xPos.length)); som er mere stabilt og enklere. Så vælger den et tilfældigt punkt igen ved at bruge det samme logik som sidst. Så finder den midt punktets koordinater ved at lægge y koordinater og x koordinator og dividere med to. Og til sidst tegner den alle punkterne i koordinat arraysene.

#### Første iteration
<img src="https://github.com/LucasM-D/InformatikLogBog/blob/main/Midpoint-test(example).png" width="300">

```javascript
  let xs = [100, 200, 300]; 
  let ys = [300, 100, 300]; 
  let ds = 3; 
  
  function setup() 
  { 
    createCanvas(400, 400); 
    
    for (let i = 0; i < xs.length; i++) {
      circle(xs[i], ys[i], ds);
    }
    
    let i = Math.floor(Math.random() * xs.length);
    let j = (i + Math.floor(Math.random() * (xs.length - 1)) + 1) % xs.length;
  
    let xs2 = (xs[i] + xs[j]) / 2;
    let ys2 = (ys[i] + ys[j]) / 2;
      
    circle(xs2, ys2, ds);
  }
```
> Jeg lavede denne første iteration for at eksperimenter med at finde koordinatsættet af midtpunktet. Koden tegner cirkler på bestemte positioner baseret på arrays xs og ys. Derefter vælger den to tilfældige positioner fra disse arrays, og udregner midtpunktet mellem dem og tegner en cirkel på dette punkt.

#### Anden iteration
Denne iteration har jeg faktisk kaldt for det færdie produkt da jeg misforstod opgaven. Opgaven sagde: Scriptet skal udvælge et tilfældigt punkt fra de tre start punkter og kalde det start. scriptet skulle dernæst vælge et tilfældigt punkt af alle punkter, kalde det for slut og finde og tegne midpunktet i mellem disse to punkter. Min opfattelse af opgaven var at den bare skulle finde to tilfældige punkter af alle punkter og tegne midpunktet. Dette ledte til "finale scriptet", eller også kaldt anden iteration.

<img src="https://github.com/LucasM-D/InformatikLogBog/blob/main/Midpoint-%22finale%22(example).png" width="300">

```javascript
let xs = [100, 200, 300]; 
let ys = [300, 100, 300]; 
let ds = 3; 
let numCircles = 1000;


function setup() 
{ 
  createCanvas(400, 400); 
  frameRate(100)
} 

function draw() 
{ 
  background(220); 
  
  let i = Math.floor(Math.random() * xs.length);
  let j = (i + Math.floor(Math.random() * (xs.length - 1)) + 1) % xs.length;

  let xs2 = (xs[i] + xs[j]) / 2;
  let ys2 = (ys[i] + ys[j]) / 2;

  xs.push(xs2);
  ys.push(ys2);
    
  for (let i = 0; i < xs.length; i++) {
    fill(0);
    noStroke();
    circle(xs[i], ys[i], ds);
  }
}
```
### Christmas-Tree
<img src="https://github.com/LucasM-D/InformatikLogBog/blob/main/Sierpinski-triangle(example).png" width="300">

```javascript
function setup() {
  createCanvas(200, 200); 
  // Ændre canvas størrelse for at skifte størrelsen af træet
  gul = color(255, 255, 0);
  grøn = color(0, 255, 0);
  rød = color(255, 0, 0);
  brun = color(150, 75, 0);
  // Farver :O
  frameRate(2);
  textSize(30);
}

function draw() {
  background(0);
  
  let marginY = height / 6;
  // Gør dette så træet ikke klipper ind i toppen og så der er lige mellemrum i mellem træet og canvas.
  let rows = height / 40 - (marginY / 60);
  // Gør dette  så træet har mængde rækker i forhold til sørrelsen af canvas.
  let rowHeight = 30;
  let charWidth = 10;
  let treeBottomY = marginY + (rows - 1) * rowHeight;
  // Gør dette til at lokalisere bunden af træet til at placere stubben rigtigt.
  // Variabler med dynamisk størrelser
  
  // Dynamic logic https://chatgpt.com/share/67617831-bbc0-8011-9a80-66c6057f4943
  
  // Core logic: https://chatgpt.com/share/67617b0a-4920-8011-8bc8-005e0f128bf8

  for (let k = 0; k < rows; k++) {
    var numX = (k * 2) + 1;
    var xOffset = width / 2 - (numX * charWidth) / 2;
    // Gør dette for at placere træet i midten af canvas
    
    for (let x = 0; x < numX; x++) {
      if (k === 0) {
        fill(gul);
      } else if (random(1) < 0.60) {
        fill(grøn);
      } else {
        fill(rød);
      }
      // Forskellige farver blade
      
      text('*', xOffset + x * charWidth, marginY + k * rowHeight);
      // Tegner træets blade med automatisk resizeing
    }
  }

  fill(brun);
  let stumpWidth = width / 200;
  let stumpHeight = rows / 6;
  let stumpX = width / 2 - (stumpWidth * charWidth) / 2;
  let spacing = rowHeight;
  let stumpY = treeBottomY + spacing;
  // Dynamisk stub størrelse og placering

  for (let r = 0; r < stumpHeight; r++) {
    for (let c = 0; c < stumpWidth; c++) {
      text('*', stumpX + c * charWidth, stumpY + r * rowHeight);
      // Tegner træstub ved korrekt x og y placering
    }
  }
}
```

### DNA Decoder



