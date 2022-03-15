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
// html ����
//const element = <h1>Hello, world!</h1>

// JS ����
//const name = "Jeongwoo";
//const element = <h1>Hello, {name}</h1>

// ��ü ����
// const name1 = {
//   firstName : "Jeongwoo",
//   lastName : "Ha",
// };
// const element = <h1>Hello, {name1.firstName + " " + name1.lastName}</h1>

// �Լ� ����
// const formatName = function(name){
//   return name.firstName + " " + name.lastName;
// }
// const name1 = {
//   firstName : "Jeongwoo",
//   lastName : "Ha",
// };
// const element = <h1>Hello, {formatName(name1)}!</h1>

// ReactDOM.render( // ���� html�� root dom node�� rendering
//   element,
//   document.getElementById('root')
// );
//---------------------------------------------------

// �̹� rendering �� element�� re-rendering, update
function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); // �� �ʸ��� re-rendering

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// element��? 
// > reacct app�� �����ϴ� ���� ���� ��,
// > ȭ�鿡�� ���̴� ���� ����Ѵ�.
// > element�� ������ �Ŀ��� children�̳� attribute�� �ٲ� �� ����.

// element�� DOM�� �������ϴ� ���
// > react ������ ������� root node��
// react element�� �������� html�� root dom node��� �Ѵ�
// dom�� ���� �����Ǳ� �����̴�.
// ���� react ������ ������� app�� �� �ϳ��� root dom node�� ���� �ȴ�.
// ������ �ִ� app�� react�� �����ϰ� �Ǹ� ���� ���� root dom node�� ���� ���� �ִ�.

// rendering �� element�� update�ϴ� ���