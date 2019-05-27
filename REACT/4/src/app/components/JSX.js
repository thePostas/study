import React from 'react';

let el1 = <h1 className={'my'}>Заголовок</h1>;

let el2 = React.createElement('h1', {className: 'My'}, 'Заголовок');

let el3 = <h1 className={'Name'}><b className={'bold'}>Жирный</b>текст</h1>