import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//-------------------------------------------
// html 형식
//const element = <h1>Hello, world!</h1>

// JS 형식
//const name = "Jeongwoo";
//const element = <h1>Hello, {name}</h1>

// 객체 형식
// const name1 = {
//   firstName : "Jeongwoo",
//   lastName : "Ha",
// };
// const element = <h1>Hello, {name1.firstName + " " + name1.lastName}</h1>

// 함수 형식
// const formatName = function(name){
//   return name.firstName + " " + name.lastName;
// }
// const name1 = {
//   firstName : "Jeongwoo",
//   lastName : "Ha",
// };
// const element = <h1>Hello, {formatName(name1)}!</h1>

// ReactDOM.render( // 위의 html을 root dom node에 rendering
//   element,
//   document.getElementById('root')
// );
//---------------------------------------------------

// 이미 rendering 된 element를 re-rendering, update
function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); // 매 초마다 re-rendering

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// element란? 
// > reacct app을 구성하는 가장 작은 블럭,
// > 화면에서 보이는 것을 기술한다.
// > element가 생성된 후에는 children이나 attribute를 바꿀 수 없다.

// element를 DOM에 렌더링하는 방법
// > react 만으로 만들어진 root node는
// react element를 렌더링할 html을 root dom node라고 한다
// dom에 의해 관리되기 때문이다.
// 오직 react 만으로 만들어진 app은 단 하나의 root dom node를 갖게 된다.
// 기존에 있던 app에 react를 연동하게 되면 여러 개의 root dom node를 가질 수도 있다.

// rendering 된 element를 update하는 방법