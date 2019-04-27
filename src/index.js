import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style.scss';

ReactDOM.render(<div>Hello,React</div>, document.getElementById('root'));

// import _ from 'lodash';
// // fromとかなしでも読み込める
// import './style.css';
// import './style.scss';
// import logo from './logo.png';
// // console.log(style.toString());

// // import Lion from './utilities';
// // jsの場合は拡張子省略可能
// // import { Nijou, NAME } from './utilities';
// // ＊全て取ってきて、utilitiesって名前をつけてあげている
// // asは名前の　競合を防ぐ必要がある場合に有効
// // import * as utilities from './utilities';

// // console.log(utilities.Nijou(9) + utilities.NAME);
// // console.log(Lion.say());

// function component() {
//   const element = document.createElement('div');
//   const array = ['hello', 'webpack', '!!!11'];
//   element.innerHTML = _.join(array, '');
//   return element;
// }

// document.body.appendChild(component());
// document.body.classList.add('haikei');

// const image = new Image();
// image.src = logo;
// document.body.appendChild(image);
