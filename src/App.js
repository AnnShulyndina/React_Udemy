//______Class properties_________
class Counter {
    count = 1;

    inc = ()=> {
        this.count++;
        console.log(this.count);
    }
    // статическое свойство
    static incStep = 2;
    //статическая функция
    static incrementAll = function (arr) {
        arr.forEach((c)=> c.inc());
    };
}
Counter.incrementAll([])

const cnt = new Counter();
console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc, 1000);