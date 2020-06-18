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
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const SearchPanel = () => {
    return <input placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <TodoList/>
            <SearchPanel/>
        </div>);
    }


//превращает React элементы в обычные браузерные DOM элементы и рендерит их на странице
ReactDom.render(<App/>,
    document.getElementById('root'));
