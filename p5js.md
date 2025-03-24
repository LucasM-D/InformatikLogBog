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




