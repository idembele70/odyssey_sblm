// body style :
// document.body.style.background = "black";
// document.body.style.color = "white";

// Selector

// Function creation d'élements

function createSimpleNode(name,item,child){
    let elemns =  document.createElement(`${name}`)
  for (const i in item){
     elemns.setAttribute(i,item[i])
  }
  elemns.innerHTML = child;
   return elemns
}

const image = createSimpleNode('img', {src : 'pix.png', alt: 'Image idiote'})
const link = createSimpleNode('a', {'class' : 'external', href : 'www.siteduzero.com'}, 'Liens vers le Site du Zero')

document.body.firstElementChild.appendChild(image);
document.body.firstElementChild.innerHTML += `<br/>`

document.body.firstElementChild.appendChild(link);