function Gaussian(x, mu) {
    return Math.pow(Math.E, -Math.pow(x - mu, 2) / 2) / Math.sqrt(2 * Math.PI);
}
function door(x, x0, x1) {
    if (x>x0 && x<x1)
        return 1;
    else
        return 0;
}

var init_mu = -7;
init_door = -8;
const xValues = [];
for (let x = -10; x < 10.05; x += 0.05) {
    xValues.push(x.toFixed(2));
}

const y_door1 = [];
xValues.forEach(x => {
        y_door1.push(door(x, -8,-6));
});

const y_door2 = [];
xValues.forEach(x => {
        y_door2.push(door(x, -1,1));
});

const gen_gauss = [];
xValues.forEach(x => {
    gen_gauss.push(Gaussian(x, 0));
});

const gen_door = [];
xValues.forEach(x => {
    gen_door.push(door(x, -1, 1));
});

const y_gaussian1 = [];
xValues.forEach(x => {
    y_gaussian1.push(Gaussian(x, -6));
});
const y_gaussian2 = [];
xValues.forEach(x => {
    y_gaussian2.push(Gaussian(x, 0));
});
function convolve(array, weights) {
    if (weights.length % 2 !== 1)
      throw new Error('weights array must have an odd length');
  
    var al = array.length;
    var wl = weights.length;
    var offset = ~~(wl / 2);
    var output = new Array(al);
  
    for (var i = 0; i < al; i++) {
      var kmin = (i >= offset) ? 0 : offset - i;
      var kmax = (i + offset < al) ? wl - 1 : al - 1 - i + offset;
  
      output[i] = 0;
      for (var k = kmin; k <= kmax; k++)
        output[i] += array[i - offset + k] * weights[k];
    }
  
    return output;
  }

var functions_list = {
    'Gaussian': gen_gauss,
    'Door': gen_door
}
