"use strict";

let ejemploDiv= document.querySelector('div');

console.log("lastChild:", ejemploDiv.lastChild);
console.log("lastChild:", ejemploDiv.lastChild.nextSibling);
console.log("children[0]:", ejemploDiv.children[0]);
console.log("children[0]:", ejemploDiv.children[0].previousSibling);