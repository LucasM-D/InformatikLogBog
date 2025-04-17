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
// Array variable numbers start from 0
- // You can add variables to an array:
  - arrayName.push(variable);
- // You can get a variable from a array:
  - arrayName[arrayNumber]
    
Loops:
- // The draw function is a loop
- // You can deactivate loops:
  - noLoop();
- // And activate lopps:
  - loop();
- // For loops:
 - for (let i = start; i < end; i++) {}

Shapes:
- Circle: circle(x, y, diameter);
- Square: square(x1, y1, x2, y2);
- Rectangle: rect(x, y, h, l)

Inputs
- Buttons: button = createButton('text'); button.position(0, 100); button.mousePressed(function);
- Sliders: slider = createSlider(0, 255, 100); slider.position(0, 100); slider.value();
- Text fields: input = createInput(''); input.position(0, 100); input.value();
  
Vectors:
- // Create p5.Vector objects.
  - p1 = createVector(25, 25); point(p1); || point(p2.x, p2.y);
- // Add velocity to position.
  - pos.add(vel);
- p5.Vector([x], [y], [z])

### Flowchart
Et flowchart er simplificeret overblik af ens kode i form af et diagram. Man bruger flowcharts før man kode for at få et overblik af hvad man skal kode eller man kan lave et flowchart efter at man har kodet for at dokumentere hvordan koden fungerer.

<img width="734" alt="Screenshot 2025-04-14 at 22 50 13" src="https://github.com/user-attachments/assets/e34810f8-5e14-4231-825e-cfaf3e058a8a" />
*Flowchart af Christmas tree script.*

## Projects

### Sierpinski triangle
Mit aller første p5.js script skaber en Sierpinski trekant. Generelt fungere scriptet ved at vælge et start punkt af de tre start punkter, vælger et andet tilfældigt punkt og tegner en prik ved koordinatet i midten af de to punkter. Dette gør den forevigt.

<img src="https://raw.githubusercontent.com/LucasM-D/InformatikLogBog/main/Sierpinski-triangle(example).png" width="300px">

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
Dette script var i relation med jul og julestemningen. Vi fikk til opgave om at lave et script der havde noget julestemning over sig, så jeg valgte at et belyst træ. 
Scriptet laver et selv-justerende træ med animeret lys, lavet ud af symboler. Vi måtte godt bruge chatGPT, og da dette script var et af mine første brugte jeg chatGPT til at få mine ideer ud på papiret.

<img width="300" alt="Screenshot 2025-03-25 at 12 23 25" src="https://github.com/user-attachments/assets/539b5ffa-ff46-4da0-9f2d-606c75e248ea" />

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

I forbindelse med en biologi opgave, der handlede om at omkode DNA stringe til RNA stringe lavede jeg dette script til at gøre det for mig. Det grundlæggende koncept er at splitte en string op i array elementer og få nogle if statements til at erstatte baserne med dets komplementære baser. I opgaven skulle man desuden oversætte mRNA-codonerne til deres tilsvarende aminosyrer, men det tilføjede jeg først senere.

<img width="300" alt="Screenshot 2025-04-16 at 20 47 20" src="https://github.com/user-attachments/assets/b3654587-8aa9-4457-a14c-59ce4cf07706" />

```javascript
// Tabel over alle mulige codon kombinationer med dets oversat aminosyrer.
let codonTable = {
  "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
  "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
  "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met",
  "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
  "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
  "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
  "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
  "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
  "UAU": "Tyr", "UAC": "Tyr", "UAA": "STOP", "UAG": "STOP",
  "CAU": "His", "CAC": "His", "CAA": "Gln", "CAG": "Gln",
  "AAU": "Asn", "AAC": "Asn", "AAA": "Lys", "AAG": "Lys",
  "GAU": "Asp", "GAC": "Asp", "GAA": "Glu", "GAG": "Glu",
  "UGU": "Cys", "UGC": "Cys", "UGA": "STOP", "UGG": "Trp",
  "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
  "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
  "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
};

let mouseClicked = false;

function setup() {
  createCanvas(200, 120);
  inputBox = createInput("DNA Code String...").position(25, 50);
}

function draw() {
  background(220);
  text("DNA String Translator:", 28, 43)
  text("Check Console For Result", 28, 103)
}

function mousePressed() {
  if (mouseClicked == false) {
    inputBox.value("");
    mouseClicked = true;
  }
  
}

function keyPressed() {
  let code = inputBox.value().toUpperCase();

  // Checker om man har skrevet DNA-strengen inde i tekstfeltet og når man trykker enter, så starter oversætningen.
  if (keyCode === ENTER && code) {
    codeString = [];
    templateString = [];
    templateStringLog = [];
    RNA = [];
    RNALog = [];
    codonString = [];

    // Tager indputtet fra tekstfeltet og indsætter hver character ind i en array.
    for (let char of code) {
      codeString.push(char);
    }

    // Oversætter DNA-strengen om til skabalon-strengen. A bliver til T, C til G og vice versa. 
    for (let i = 0; i < codeString.length; i++) {
      if (codeString[i] === "A") {
        templateString.push("T");
        templateStringLog.push("T ");
      } else if (codeString[i] === "T") {
        templateString.push("A");
        templateStringLog.push("A ");
      } else if (codeString[i] === "C") {
        templateString.push("G");
        templateStringLog.push("G ");
      } else if (codeString[i] === "G") {
        templateString.push("C");
        templateStringLog.push("C ");
      }
    }

    // Oversætter skabalon-strengen til RNA-strengen. A bliver til U, C til G og vice versa.
    for (let i = 0; i < templateString.length; i++) {
      if (templateString[i] === "A") {
        RNA.push("U");
        RNALog.push("U ");
      } else if (templateString[i] === "T") {
        RNA.push("A");
        RNALog.push("A ");
      } else if (templateString[i] === "C") {
        RNA.push("G");
        RNALog.push("G ");
      } else if (templateString[i] === "G") {
        RNA.push("C");
        RNALog.push("C ");
      }
    }

    // Laver RNA-strengen om til codons, ved at joine strengen i grupper af tre baser.
    for (let i = 0; i < RNA.length; i += 3) {
      let codonElements = RNA.slice(i, i + 3);
      let codons = codonElements.join('');
      codonString.push(codons);
    }

    // Oversætter RNA-codonsne til aminosyrerne, ved at finde RNA-codonsne i aminosyrer tablen.
    let aminoAcidResult = "";
    for (let i = 0; i < codonString.length; i++) {
      let codon = codonString[i];
      let aminoAcidFromTable = codonTable[codon];
      if (aminoAcidFromTable) {
        aminoAcidResult += aminoAcidFromTable + " ";
      }
    }

    // Samler alle arrays og outputter resultaterne i console.
    console.log("Code String: ", codeString.join(''));
    console.log("Template String: ", templateStringLog.join(''));
    console.log("cRNA String: ", RNALog.join(''));
    console.log("Codon String:", codonString);
    console.log("Amino Acids: " + aminoAcidResult);

    // Tjekker om det sidste aminosyrer hedder "STOP", ellers kan det tyde på en mutation.
    if (!aminoAcidResult.includes("STOP")) {
      console.log("No end amino acid... mutation?");
    }

    inputBox.value("");
  }
}
```
Dette script har givet mig mulighed for at udnytte arrays til deres fulde potentiale og kombinere det med viden fra biologi. Det har gjort mig mere erfaren i begge fag og hjulpet mig med bedre at forstå og huske, hvordan opbyggelsen og oversættelsen af DNA-strenge fungerer, så jeg lettere kan forklare det klart, når det er relevant.

### DNA Decoder and Mutation Detection
Dette script er en forbedret og udvidet version af "DNA Decoder" scriptet. Vi var gået i gang med et nyt emne i biologi om DNA mutationer og fik nogle opgaver for der handlede om at finde mutationerne i DNA-strengen. Opgaven facinerede mig og begyndte at skrive nogle betingelser ned der kunne resultere i at finde mutationerne. Der findes to forskellige DNA mutationer. Den første hedder "punktmutation", hvor et af baserne er blevet erstatet med et andet. Dette er også den svageste af mutationerne da det kun ændre en aminosyrer der alligvel godt kan resultere i den samme aminosyrer som hvis den ikke var mutateret. Længde mutation er den anden og er den værste af dem. Længde mutation er når længden af DNA-strengen bliver ændret. Længdemutation er delt op i to undergrupper; insertion og deletion. Navne siger lidt sig selv, at insertion betyder, at der er tilføjet en base, og deletion betyder, at en base er fjernet fra DNA-strengen.

<img width="300" alt="Screenshot 2025-04-15 at 09 19 13" src="https://github.com/user-attachments/assets/6603fbaf-8dd8-4728-913a-6a70611b599f" />

```javascript
let codonTable = {
  "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
  "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
  "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met",
  "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
  "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
  "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
  "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
  "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
  "UAU": "Tyr", "UAC": "Tyr", "UAA": "STOP", "UAG": "STOP",
  "CAU": "His", "CAC": "His", "CAA": "Gln", "CAG": "Gln",
  "AAU": "Asn", "AAC": "Asn", "AAA": "Lys", "AAG": "Lys",
  "GAU": "Asp", "GAC": "Asp", "GAA": "Glu", "GAG": "Glu",
  "UGU": "Cys", "UGC": "Cys", "UGA": "STOP", "UGG": "Trp",
  "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
  "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
  "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
};

let mouseClicked = false;

function setup() {
  createCanvas(200, 200);
  inputBox = createInput("DNA Code String...").position(25, 50);
  inputBoxNeutral = createInput("Neutral Code String...").position(25, 100);
  inputBoxMutation = createInput("Mutated Code String...").position(25, 130);
}

function draw() {
  background(220);
  text("DNA String Translator:", 28, 43)
  text("Mutation Detector:", 28, 93)
  text("Check Console For Result", 28, 183)
}

function mousePressed() {
  if (mouseClicked == false) {
    inputBox.value("");
    inputBoxNeutral.value("");
    inputBoxMutation.value("");
    mouseClicked = true;
  }
  
}

function keyPressed() {
  let code = inputBox.value().toUpperCase();
  let neutralCode = inputBoxNeutral.value().toUpperCase();
  let mutatedCode = inputBoxMutation.value().toUpperCase();
  
  if (keyCode === ENTER && code) {
    codeString = [];
    templateString = [];
    templateStringLog = [];
    RNA = [];
    RNALog = [];
    codonString = [];

    for (let char of code) {
      codeString.push(char);
    }

    for (let i = 0; i < codeString.length; i++) {
      if (codeString[i] === "A") {
        templateString.push("T");
        templateStringLog.push("T ");
      } else if (codeString[i] === "T") {
        templateString.push("A");
        templateStringLog.push("A ");
      } else if (codeString[i] === "C") {
        templateString.push("G");
        templateStringLog.push("G ");
      } else if (codeString[i] === "G") {
        templateString.push("C");
        templateStringLog.push("C ");
      }
    }

    for (let i = 0; i < templateString.length; i++) {
      if (templateString[i] === "A") {
        RNA.push("U");
        RNALog.push("U ");
      } else if (templateString[i] === "T") {
        RNA.push("A");
        RNALog.push("A ");
      } else if (templateString[i] === "C") {
        RNA.push("G");
        RNALog.push("G ");
      } else if (templateString[i] === "G") {
        RNA.push("C");
        RNALog.push("C ");
      }
    }


    for (let i = 0; i < RNA.length; i += 3) {
      let codonElements = RNA.slice(i, i + 3);
      let codons = codonElements.join('');
      codonString.push(codons);
    }

    let aminoAcidResult = "";
    for (let i = 0; i < codonString.length; i++) {
      let codon = codonString[i];
      let aminoAcidFromTable = codonTable[codon];
      if (aminoAcidFromTable) {
        aminoAcidResult += aminoAcidFromTable + " ";
      }
    }

    
    console.log("Code String: ", codeString.join(''));
    console.log("Template String: ", templateStringLog.join(''));
    console.log("cRNA String: ", RNALog.join(''));
    console.log("Codon String:", codonString);
    console.log("Amino Acids: " + aminoAcidResult);

    if (!aminoAcidResult.includes("STOP")) {
      console.log("No end amino acid... mutation?");
    }

    inputBox.value("");
  }
  
  
  // Checker om man har skrevet DNA-strengen unden mutation og DNA-strengen med mutation inde i de to tekstfelter og når man trykker enter, starter mutation detectionen.
  if (keyCode === ENTER && neutralCode && mutatedCode) {

      let neutralCodeString = [];
      let neutralRNACodonsString = [];
      let neutralRNACodons = [];
      let neutralRNACodeString = [];
      let mutatedCodeString = [];
      let mutatedRNACodonsString = [];
      let mutatedRNACodons = [];
      let mutatedRNACodeString = [];
      let mutatedAminoAcidString = [];
      let mutationLog = [];
      let mutationIndices = [];
      let highlightedMutatedCodon = [];
      
      for (let char of neutralCode) {
        // Hvis char i tekstfeltet er A, T, G eller C bliver de tilføjet til neutralCodeString, for at undgå at man skriver et mellemrum eller komma og at det
        ødelægger koden.
        if (char === "A" || char === "T" || char === "G" || char === "C") {
          neutralCodeString.push(char);
        }
      }
      for (let char of mutatedCode) {
      // Hvis char er A, T, G eller C bliver det tilføjet til mutatedCodeString arrayet.
        if (char === "A" || char === "T" || char === "G" || char === "C") {
          mutatedCodeString.push(char);
        }
      }

      // Laver et array hvor man har positionstallet for hvor mutationen er og laver et array hvor mutationen er synligt. 
      for (let i = 0; i < mutatedCodeString.length; i++) {
        if (neutralCodeString[i] !== mutatedCodeString[i]) {
            mutationIndices.push(i);
            mutationLog.push("[", mutatedCodeString[i], "] ")
        } else {
            mutationLog.push(mutatedCodeString[i], " ");
        }
      }

      // Oversætter DNA-strengen for at senere at kunne finde aminosyrerne. Her har jeg ikke brug for en skabalonstreng.
      for (let i = 0; i < neutralCodeString.length; i++) {
          neutralRNACodeString.push(neutralCodeString[i] === "T" ? "U" : neutralCodeString[i]);
          mutatedRNACodeString.push(mutatedCodeString[i] === "T" ? "U" : mutatedCodeString[i]);
      }

      Laver RNA-strengen om til codons.
      for (let i = 0; i < neutralCodeString.length; i += 3) {
          neutralRNACodons.push(neutralRNACodeString.slice(i, i + 3).join(''));
      }
      for (let i = 0; i < mutatedCodeString.length; i += 3) {
          mutatedRNACodons.push(mutatedRNACodeString.slice(i, i + 3).join(''));
      }

      // Gøre den muteret base synlig i form af codons.
      let mutatedCodonResults = [];
      for (let i = 0; i < (neutralCodeString.length/3); i =+ 3) {
        if (neutralRNACodons !== mutatedRNACodons) {
          mutatedCodonResults.push({ neutral: neutralRNACodons[i], mutated: mutatedRNACodons[i] });

          let highlightedCodon = [];
          let neutral = neutralRNACodons[i];
          let mutated = mutatedRNACodons[i];

          for (let j = 0; j < mutated.length; j++) {
            if (neutral[j] !== mutated[j]) {
              highlightedCodon.push(`[${mutated[j]}]`);
            } else {
              highlightedCodon.push(mutated[j]);
            }
          }

          highlightedMutatedCodon.push(highlightedCodon.join(''));
        }
      }
    
      let neutralAminoAcidResult = "";
      let mutatedAminoAcidResult = "";

      // Tjekker først om længden af begge DNA-strenge er lige lange, hvis ja så samler den alle arrays og outputter resultaterne i console.
      if (mutatedCodeString.length == neutralCodeString.length) {
        console.log("Highlighted Mutation:", mutationLog.join(''));
        console.log("Base Pair Number", (mutationIndices.slice(0, mutationIndices.length).map(num => num + 1)), " Is Mutated");
        console.log("Numbers of Mutations:", (mutationIndices.length));
        for (let i = 0; i < neutralRNACodons.length; i++) {
          mutatedAminoAcidString.push(codonTable[mutatedRNACodons[i]] || "?");
        }
        for (let i = 0; i < mutatedCodonResults.length; i++) {
          let neutral = mutatedCodonResults[i].neutral;
          let mutated = mutatedCodonResults[i].mutated;

          let neutralAminoAcid = codonTable[neutral] || "?";
          let mutatedAminoAcid = codonTable[mutated] || "?";
          
          console.log(highlightedMutatedCodon[i], `Neutral: ${neutralAminoAcid}, Mutated: ${mutatedAminoAcid}`);

          if (neutralAminoAcid == mutatedAminoAcid) {
            console.log("The mutated amino acid is the same as the neutral amino acid");
          }
        }
      // Hvis længden af begge DNA-strenge ikke er lige lange, finder den ud af om det er en insertion eller deletion mutation.
      } else {
        if ((mutatedCodeString.length - neutralCodeString.length) < 0) {
          console.log("Deletion Mutation");
        } else {
          console.log("Insertion Mutation");
        }
      }

      // En RNA-streng skal have et slut-codon der fortæller ribosomet at kæden er nået til slutningen, hvis ikke ved den ikke hvornår kæden er ved sin slutning.
      if (mutatedAminoAcidString[mutatedAminoAcidString.length-1] != "STOP") {
        console.log("No end amino acid... mutation?");
      }
      // En RNA-streng skal også have et start-codon (Met) der fortæller ribosomet hvor kæden starter.
      if (mutatedAminoAcidString[0] != "Met") {
        console.log("No start amino acid... mutation?");
      }
    }
}
```
