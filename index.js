let probaidoObject = {
    "Nap": [],
    "Hét": [],
    "Hónap": []
};

for (let i = 1; i < 183; i++) {
probaidoObject.Nap.push(i);
};

for (let i = 1; i < 27; i++) {
probaidoObject.Hét.push(i);
};

for (let i = 1; i < 7; i++) {
probaidoObject.Hónap.push(i);
};



let probaidoNap = Object.keys(probaidoObject)[0];
let probaidoHet = Object.keys(probaidoObject)[1];
let probaidoHonap = Object.keys(probaidoObject)[2];

let probaidoEgysegSel = document.getElementById("probaidoEgyseg");
let probaidoTartamSel = document.getElementById("probaidoTartam");

window.onload = function () {
for (let x in probaidoObject) {
    probaidoEgysegSel.options[probaidoEgysegSel.options.length] = new Option(x, x);
};

probaidoEgysegSel.onchange = function () { 
    //empty probaidoTartam dropdown
probaidoTartamSel.length = 1;
    //display correct values
for (let y in probaidoObject[this.value]) {
    probaidoTartamSel.options[probaidoTartamSel.options.length] = new Option(y, y);
   };
   
}; 
};
