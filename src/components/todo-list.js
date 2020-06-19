import React from "react";
import TodoListItem from "./todo-list-item"

const TodoList = ({todos}) => {
    // const items = ['Drink Coffee', 'Build Awesome App', 'Have a lunch'];
    const elements = todos.map((item) => {
        //для каждого элемента массива todos создаем соответ. JSX элемент return ниже
        return (
            <li>
                {/*можно передать все свойства объекта item в компонент используя Object Spread оператор*/}
                <TodoListItem {...item}
                    // label={item.label}
                    // important={item.important} - все это компактно заменили на {...item}
                />
            </li>
        );
    });
    //для вывода на экран
    return (
        <ul>
            { elements }
        </ul>
    );
};
export default TodoList;

//x