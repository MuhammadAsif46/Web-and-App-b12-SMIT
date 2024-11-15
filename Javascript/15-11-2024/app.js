// console.log("hello");
// var main = document.querySelector(".main")
// console.log(main);
// var main = document.getElementsByClassName("main")
// console.log(main);

// var main = document.getElementById("test")
// // var heading = document.getElementById("head")
// console.log(main.childNodes[3].nodeName);

// var nType = heading.nodeType;
// console.log(nType);

// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// var main = document.getElementById("test")
// console.log(main.childNodes[3].nextElementSibling);

// var main = document.getElementById("test")
// console.log(main.hasAttribute("class"));
// console.log(main.getAttribute("class"));
// console.log(main.setAttribute("style","color:red"));

// var main = document.getElementById("test").attributes;
// console.log(main);

var div = document.createElement("div");
var p1 = document.createElement("p");
var h1 = document.createElement("h1");
var p2 = document.createElement("p");

div.appendChild(p1);
div.appendChild(h1);
div.appendChild(p2);

var p1Text = document.createTextNode("user");
var h1Text = document.createTextNode("hello");
var p2Text = document.createTextNode("world");

p1.appendChild(p1Text);
h1.appendChild(h1Text);
p2.appendChild(p2Text);

console.log(div);

var shortCut = `
<div class="main" id="test">
<p>user</p>
<h1>hello</h1>
<p>world</p>
</div>
`;
console.log(shortCut);

var container = document.getElementById("container")
container.innerHTML = shortCut
