const output = document.querySelector('#output');

const mainDiv = document.createElement('div');
mainDiv.id='divTP2';
const paragragh = document.createElement('p');
    paragragh.innerHTML = 'Langages basés sur ECMAScript :';
const newLine = document.createElement('br');

const ulList = document.createElement('ul');
const tabsLi = [];
const tabsText = ['JavaScript', 'JScript', 'ActionScript', 'EX4'];
    for (let i = 0; i < 4; i++) {
       const liListe = document.createElement('li');
        liListe.innerHTML = tabsText[i];
        tabsLi.push(liListe);
        ulList.appendChild(liListe);
    }
mainDiv.appendChild(paragragh);
mainDiv.appendChild(newLine);
mainDiv.appendChild(newLine);
mainDiv.appendChild(ulList);
output.appendChild(mainDiv);