// body style :
document.body.style.background = "#00000073";
document.body.style.color = "white";

// Selector
const td = document.querySelectorAll('td');

td.forEach(el => {
    el.onclick = _ => el.contentEditable = true;
    el.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            el.contentEditable = false;
        }
    })
})