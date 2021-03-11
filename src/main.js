// Selector
const output = document.getElementById('output');
// le div du tp3
const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'divTP3');
// la paragraphe de presentation
const paragraph = document.createElement('p');
paragraph.textContent = "Langages basés sur ECMAScript :";
mainDiv.appendChild(paragraph)
const dlElement = document.createElement('dl');
//les dt et dd
const dxTabs = [
    document.createElement('dt'),
    document.createElement('dd'),
    document.createElement('dt'),
    document.createElement('dd'),
    document.createElement('dt'),
    document.createElement('dd'),
    document.createElement('dt'),
    document.createElement('dd')
]
// le contenu des dt et dd
const dxObj = {
    1 : "JavaScript",
    2 : "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages" +
    "web interactives mais aussi coté serveur.",
    3 : "JScript",
    4 : "JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft.",
    5 : "ActionScript",
    6 : `ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, 
        Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).`,
    7 : "EX4",
    8 : 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.',
}
//ajout du contenu au dt et dd
for (let i = 0; i < dxTabs.length; i++) {
    dxTabs[i].innerHTML = dxObj[1];
    mainDiv.appendChild(dxTabs[i]);
}
// ajout du main div au output
output.appendChild(mainDiv);