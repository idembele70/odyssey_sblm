// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// Selector
const output = document.getElementById('output');
const br = document.querySelectorAll('br')
// function
function brremove(elements = br) {
    for (const element of elements) {
        element.remove();
    }
}
brremove();


