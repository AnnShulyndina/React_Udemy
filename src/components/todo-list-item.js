import React from "react";
//important=false (undefined) - задаем false по умалочнанию для верного определения логического оператора в действии,
//если ставить true по умолчанию то и определяться во всех выражениях будет true и оператор не сработает нужным образом так как
// т.к. true на false будет true и все тексты в том числе где не стоит important будут красным (tomato)
const TodoListItem = ({label, important=false}) => {
    const style = {
        color: important ? 'tomato': 'black'
    };
    return <span style = {style}>{label}</span>;
};
export default TodoListItem;