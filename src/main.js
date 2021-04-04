// body style :
document.body.style.background = "black";
document.body.style.color = "white";

// function

const output = document.querySelector('#output');
const table = output.querySelector('table');
const firstTr = document.getElementsByTagName('tr')[2];
const tr = document.createElement('tr');
tr.innerHTML =
    `<th scope="row">Firefox</th>
    <td>Mozilla</td>
    <td>27,8%</td> `;
    console.log(firstTr);
table.firstChild.insertBefore(tr,firstTr);