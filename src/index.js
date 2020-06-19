//важно - подключиться к библиотеке, важно соблюдать прописные и строчные буквы
import React from 'react';
//react очень легковесный и поэтому быстро работает
import ReactDom from 'react-dom';

//функции которые возвращают реакт элемен должны начинаться с большой буквы
const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

//вынести в отдельный компонент список дел
const TodoList = () => {
    //добавили  строчку const items и поменяли текст в <li> на наименование переменной
    const items = ['Drink Coffee', 'Build Awesome App'];
    return (
        <ul>
            <li>{ items [0] }</li>
            <li>{ items [1] }</li>
        </ul>
    );
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input
        style={searchStyle}
        placeholder = {searchText}
        disabled={true}
    // в реакте надо писать className а не class, htmlFor = for и обязательно camelCase
    />;
};

const App = () => {

    //реакт элемент
    //логика для входа на сайт
    // const isLoggedIn = false;
    // const loginBox = <span>Log in please</span>
    // const welcomeBox = <span>Welcome back</span>

    return (
        <div>
            {/* отображение текущей даты и времени*/}
            {/*<span>{ (new Date()).toString()}</span>*/}
            {/*так можно добавить только реакт объект, доб через фигруные скобки т.к. это реакт элемент*/}
            {/*логика для входа на сайт*/}
            {/*{ isLoggedIn ? welcomeBox : loginBox }*/}


            <AppHeader/>
            <TodoList/>
            <SearchPanel/>
        </div>);
    }
//превращает React элементы в обычные браузерные DOM элементы и рендерит их на странице
ReactDom.render(<App/>,
    document.getElementById('root'));
