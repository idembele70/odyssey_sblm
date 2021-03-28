document.body.style.background = 'black';
document.body.style.color = 'white';

function selectElByQuery(queryName) { return document.querySelector(`${queryName}`) }
function createEl(elName) { return document.createElement(`${elName}`) }
const output = selectElByQuery('#output');
const mainDiv = createEl('div');
mainDiv.id = 'divTP3';

const paragraph = createEl('p');
paragraph.innerHTML = 'Langages basés sur ECMAScript :';

const dl = createEl('dl');
const dlChildText = [
    {
        dt: 'JavaScript',
        dd: `JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web 
                interactives mais aussi coté serveur.`
    },
    {
        dt: 'JScript',
        dd: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
    },
    {
        dt: 'ActionScript',
        dd: `ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, 
            Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).`
    },
    {
        dt: 'EX4',
        dd: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
    }
]
for (const text of dlChildText) {
    const dt = createEl('dt');
    const dd = createEl('dd');
    dt.innerHTML = text.dt;
    dd.innerHTML = text.dd;
    dl.appendChild(dt);
    dl.appendChild(dd);
}
mainDiv.appendChild(dl);
output.appendChild(mainDiv); 