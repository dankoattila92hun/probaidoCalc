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

for (let i= 1; i < 7; i++) {
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

   probaidoEgysegSel.onchange = function() {
            probaidoTartamSel.length = 1;
            var z = probaidoObject[this.value];
            for (var i = 0; i < z.length; i++) {
                probaidoTartamSel.options[probaidoTartamSel.options.length] = new Option(z[i], z[i]);
            }
          }
};

let eredmeny = document.getElementById("date");

if (eredmeny != "") {
    eredmeny.style.backgroundColor = "#BAF2BB";
};