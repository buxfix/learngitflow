import _ from 'lodash';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');    
    btn.innerHTML = 'Click me &amp; check console';
    btn.onClick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());