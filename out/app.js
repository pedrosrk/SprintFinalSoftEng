import { Daily } from './classes/daily.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Retrospective } from './classes/retrospective.js';
const form = document.querySelector('.new-item-form'); // (as ...) Especific type;
//inputs
const type = document.querySelector('#type');
const positive = document.querySelector('#positive');
const negative = document.querySelector('#negative');
const result = document.querySelector('#result');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'daily') {
        doc = new Daily('day', 15, positive.value, negative.value, result.valueAsNumber);
    }
    else {
        doc = new Retrospective('retro', 120, positive.value, negative.value, result.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
/* Interface, Classes, Atributos, construtuor
Herança, Polimorfismo,
Reuso, fraco acoplamento, alta coesão,
Estrutura do projeto,

Missing
Static, friends, overload, controlers, module tests;
Client-Server Structure;
*/
// tsc .\src\app.ts -w
