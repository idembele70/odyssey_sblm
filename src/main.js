// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// function
function creatElement(element) { return document.createElement(`${element}`); };


// Selector
const output = document.body.querySelector('#output');

// Exercice mini TP4
// mainDiv
const mainDiv = creatElement('div');
mainDiv.id = "divTP4";
output.appendChild(mainDiv);
// form
const form = creatElement("form");
form.setAttribute("enctype", "multipart/form-data");
form.setAttribute('method', 'post');
form.setAttribute('action', 'upload.php');
mainDiv.appendChild(form);
// fieldset
const fieldset = creatElement('fieldset');
form.appendChild(fieldset);
//legend
const legend = creatElement(`legend`);
legend.appendChild(document.createTextNode('Uploader une image'));
fieldset.appendChild(legend);

//div enfant
const childDiv = creatElement('div');
childDiv.style.textAlign = 'center';
fieldset.appendChild(childDiv);

// label of chilDiv
const label = creatElement('label');
label.setAttribute('for', 'inputUpload');
label.innerText = 'Image à uploader :';
childDiv.appendChild(label)
// inputs of chilDiv
const tabsinput = [creatElement('input'), creatElement('input')];
// first input of childDiv
tabsinput[0].setAttribute('type', 'file');
tabsinput[0].setAttribute('name', 'inputUpload');
tabsinput[0].id = 'inputUpload';
childDiv.appendChild(tabsinput[0]);
// Saut de ligne
const sautLigner = creatElement('br');
childDiv.appendChild(sautLigner);
childDiv.appendChild(sautLigner.cloneNode(false));
tabsinput[1].setAttribute('type','submit');
tabsinput[1].setAttribute('value','Envoyer');
childDiv.appendChild(tabsinput[1]);