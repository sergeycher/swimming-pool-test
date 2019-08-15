import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
//
import TaxesList from './components/taxes/TaxesList';
import Navbar from './components/navbar';
import { Filler } from './components/utils';
//
import heart from './icons/heart.svg';
import dismiss from './icons/dismiss.svg';
import abonements from './icons/abonements.svg';
import swimming from './icons/swimming.svg';

/*
Нужно создать реакт приложение с роутингом (react-router) и редаксом (react-redux).
Нужно сверстать страницу, она должна быть адаптивной (мобильная версия есть в дизайне).
https://www.figma.com/file/blt0ew5n613iRpDACS6si7rH/Untitled?node-id=1%3A901

По клику на верхнее меню должен осуществляться переход на новую страницу (контент страницы может быть любой)

На главной странице расположены три тарифа, они имеют название и цену.
Тарифы должны храниться в редакс сторе.

По клику на кнопку "Выбрать" в редакс сторе тариф должен отмечаться как выбранный и кнопка "Выбрать" должна пропадать.
Выбран может быть только один тариф.
 */

const menu = [
  { url: '/1', icon: heart, text: 'Оздоровительное плавание\n(разовые посещения)' },
  { url: '/2', icon: abonements, text: 'Абонементы' },
  { url: '/3', icon: swimming, text: 'Обучение плаванию\n(дети)' },
  { url: '/4', icon: dismiss, text: 'Оформить отказ' },
];

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar items={menu} />
        </header>

        <Route path="/1" exact component={TaxesList} />
        <Route path="/2" component={Filler} />
        <Route path="/3" component={Filler} />
        <Route path="/4" component={Filler} />
      </div>
    </Router>
  );
}

export default App;
