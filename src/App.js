

//Объеткы в ES-2015+
//__________Template Literals Шаблонные строки_____________
const user = 'Bob';
const num = 17;
const txt2 = `Hello ${user} you ${num} letters in your inbox`;
console.log(txt2);
//Hello Bob you 17 letters in your inbox

const items = ['tea', 'coffee'];
const templateHtml = `
<ui>
<li>${items[0]}</li>
<li>${items[1]}</li>
</ui>`
console.log(templateHtml)
//<ui>
// <li>tea</li>
// <li>coffee</li>
// </ui>
