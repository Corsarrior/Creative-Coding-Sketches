const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    let r = 150;
    let fill = true;
    for (let i = 0; i < 20; i++){    
        context.beginPath();
        context.arc(300, 300, r, 0, Math.PI * 2);
        if (fill){
          context.fillStyle = `rgb(
            ${randomIntFromInterval(0,255)},
            ${randomIntFromInterval(0,255)},
            ${randomIntFromInterval(0,255)})`;
          context.fill();
        }
        else {
          context.fillStyle = 'black';
          context.fill();
        }
        r -= 10;
        fill = !fill;
    }
  };
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

canvasSketch(sketch, settings);
