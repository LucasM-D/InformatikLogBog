
``` javascript
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





