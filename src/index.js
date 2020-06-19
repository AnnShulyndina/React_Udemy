import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    //в JSX можно вставлять массивы элементов (массив можно передать как свойство
    const todoData = [
        {label:'Drink Coffee', important: false, id: 1},
        {label:'Make Awesome App', important: true, id: 2},
        {label:'Have a lunch', important: true, id: 3},
    ];
    return (
        <div>
            <AppHeader/>
            <TodoList todos={todoData}/>
            <SearchPanel/>
        </div>);
    }

ReactDom.render(<App/>,
    document.getElementById('root'));
