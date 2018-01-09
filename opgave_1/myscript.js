document.addEventListener("DOMContentLoaded", event => {
// console.log(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);
// console.log(document.body.children);
let divs = document.querySelectorAll('div');
console.log(divs);
console.log(typeof divs);

let count = divs.length;
// for (let i = 0; i < count; i++) {
//     divs[i].remove();
// }
for (let i = 0; i < count; i++) {
    console.log(divs[i].firstChild.nodeValue);
}

console.log(divs[0]);


});