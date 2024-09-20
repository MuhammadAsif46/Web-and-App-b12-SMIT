// chapter no 20: Nested for loop;

// for (var i = 0; i <= 5; i++) {
//   for (var j = 0; j <= 5; j++) {
//     console.log(i,j);
//     break;
//   }
//   break;
// }

var firstNames = ["BlueRay", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
console.log();
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

for(var i = 0; i < firstNames.length; i++){
    for(var j = 0; j < lastNames.length; j++){
        console.log(firstNames[i], lastNames[j]);
    }
}

