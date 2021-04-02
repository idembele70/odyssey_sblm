// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// function

const zozorBooks = document.querySelector('#zozor-books');
const li = {
    0 : document.createElement('li') ,
    1 : document.createElement('li'),
}
li[0].appendChild(document.createTextNode('Zozor à Pôle emploi'));
zozorBooks.appendChild(li[0]);
const child4 = zozorBooks.children[5];
console.log(child4);
li[1].innerText ="Zozor fait fortune";
zozorBooks.insertBefore((li[1]),child4)