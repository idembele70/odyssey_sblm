/* // selector
const output = document.getElementById('output');

// block
let divTp1 = document.createElement('div');
let strongWww = document.createElement('strong');
let strongW3c = document.createElement('strong');
let linkOrg = document.createElement('a');
let linkWww = document.createElement('a');

// 
const tabs = [document.createTextNode('Le'),document.createTextNode(' World Wide Web Consortium') ,document.createTextNode(', abrégé par le sigle'), document.createTextNode(' W3C')
, document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du'), ]

// org link
linkOrg.href='http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
linkOrg.title =="Organisme de normalisation";
linkOrg.textContent = ' organisme de standardisation';

// www link
linkWww.href="http://fr.wikipedia.org/wiki/World_Wide_Web";
linkWww.setAttribute('title','World Wide Web')
linkWww.innerHTML=' World Wide Web.'
// append element to each other;
strongWww.appendChild(tabs[1]);
strongW3c.appendChild(tabs[3]);

output.appendChild(tabs[0]);
output.appendChild(strongWww);
output.appendChild(tabs[2]);
output.appendChild(strongW3c);
output.appendChild(linkOrg);
output.appendChild(tabs[4]);
output.appendChild(linkWww)

// output.appendChild();
// dark theme
document.body.style.color = "white";
document.body.style.backgroundColor = "black"; */

/* ) } */

for (let i = 0; i < 10; i++) {
    if (i == 5) {
       continue
    }
    console.log(i);
}