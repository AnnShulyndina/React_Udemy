import React from 'react';
import ReactDom from 'react-dom';

const el = <h1>Hello World</h1>
//если писать на реакте
// const el = React.createElement(
//     'h1', null, 'Hello World!!');
console.log(el);

ReactDom.render(el,
    document.getElementById('root'));
