//_______Объеткы в ES-2015+________
//опции по умолчанию
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin' };
//опции от пользовтеля
const opts = {
    user: 'John',
    password: 'utopia'
};
//Object.assign method
const res = Object.assign({}, defaults, opts);
console.log(res);


