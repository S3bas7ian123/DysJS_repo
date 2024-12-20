/* container HEADER */
const head = document.querySelector('header');
/* content for the HEADER */
let fTitle = document.createElement('h1');
// let contLinks = document.createElement('div');


/* settings: */
fTitle.innerHTML = "DysJS";
fTitle.classList.add('h1');
head.append(fTitle);
head.style.padding = '15px';
head.style.backgroundColor = 'black';
head.style.maxHeight = '70px';
head.style.textAlign = 'center';
/* functions: */

console.log(head);